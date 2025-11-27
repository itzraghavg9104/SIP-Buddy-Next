import React, { useState, useEffect, useRef } from 'react';
import { updateProfile, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';
import { updateUserProfileDocument } from '../services/firestoreService';
import { IconUser, IconMail, IconLogout, IconShield } from '../components/Icons';
import { useGlobalContext } from '../context/GlobalContext';
import EmailVerificationBanner from './EmailVerificationBanner';
import imageCompression from 'browser-image-compression';

const Profile: React.FC = () => {
  const { user, handleLogout, handleProfileUpdate, needsEmailVerification } = useGlobalContext();

  // Display name state
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Profile picture upload state
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Change password state
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordLoading, setIsPasswordLoading] = useState(false);

  // Check if user is using Google OAuth (can't change email/password)
  const isGoogleUser = user?.providerData[0]?.providerId === 'google.com';

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName || '');
    }
  }, [user]);

  if (!user) {
    return <div>Loading profile...</div>;
  }

  // Helper to check if URL is from Cloudinary
  const isCloudinaryUrl = (url: string): boolean => {
    return url.includes('res.cloudinary.com');
  };

  // Helper to extract Cloudinary public ID from URL
  const extractPublicId = (url: string): string | null => {
    try {
      const match = url.match(/\/profile-pictures\/[^.]+/);
      return match ? match[0].substring(1) : null; // Remove leading slash
    } catch {
      return null;
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      setError('Please select a valid image file (JPG, PNG, WebP, or GIF)');
      return;
    }

    // Validate file size (max 10MB before compression)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      // Compress image
      const compressionOptions = {
        maxSizeMB: 0.025, // 25KB max
        maxWidthOrHeight: 400,
        useWebWorker: true,
        fileType: 'image/jpeg',
        initialQuality: 0.6,
      };

      const compressedFile = await imageCompression(file, compressionOptions);
      setSelectedFile(compressedFile);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(compressedFile);
    } catch (err) {
      setError('Failed to process image. Please try again.');
      console.error('Compression error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleProfilePictureUpload = async () => {
    if (!selectedFile || !auth.currentUser) return;

    setIsUploading(true);
    setError(null);

    try {
      // Upload to Cloudinary
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('userId', user.uid);

      const uploadResponse = await fetch('/api/upload-profile-picture', {
        method: 'POST',
        body: formData,
      });

      if (!uploadResponse.ok) {
        const errorData = await uploadResponse.json();
        throw new Error(errorData.error || 'Failed to upload image');
      }

      const { url: newPhotoURL, publicId: newPublicId } = await uploadResponse.json();

      // Delete old Cloudinary image if exists
      const oldPhotoURL = user.photoURL;
      if (oldPhotoURL && isCloudinaryUrl(oldPhotoURL)) {
        const oldPublicId = extractPublicId(oldPhotoURL);
        if (oldPublicId) {
          try {
            await fetch('/api/delete-profile-picture', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ publicId: oldPublicId }),
            });
          } catch (deleteErr) {
            console.error('Failed to delete old image:', deleteErr);
            // Don't block on deletion failure
          }
        }
      }

      // Update Firebase Auth profile
      await updateProfile(auth.currentUser, { photoURL: newPhotoURL });

      // Update Firestore
      await updateUserProfileDocument(user.uid, {
        photoURL: newPhotoURL,
        cloudinaryPublicId: newPublicId,
      });

      // Update global context
      if (auth.currentUser) {
        handleProfileUpdate(auth.currentUser);
      }

      setSuccessMessage('Profile picture updated successfully!');
      setSelectedFile(null);
      setPreviewUrl(null);

      // Clear file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload profile picture');
    } finally {
      setIsUploading(false);
    }
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleProfileSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || displayName === user.displayName) return;

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await updateProfile(auth.currentUser, { displayName });
      await updateUserProfileDocument(user.uid, { displayName });

      if (auth.currentUser) {
        handleProfileUpdate(auth.currentUser);
      }

      setSuccessMessage('Display name updated successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || !currentPassword || !newPassword) return;

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setIsPasswordLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Reauthenticate user before changing password
      const credential = EmailAuthProvider.credential(user.email!, currentPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);

      // Update password
      await updatePassword(auth.currentUser, newPassword);

      setSuccessMessage('Password updated successfully!');
      setShowChangePassword(false);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      if (err.code === 'auth/wrong-password') {
        setError('Incorrect current password.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password is too weak. Please choose a stronger password.');
      } else if (err.code === 'auth/requires-recent-login') {
        setError('Please log out and log in again before changing your password.');
      } else {
        setError(err.message || 'Failed to update password.');
      }
    } finally {
      setIsPasswordLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-600">Manage your account details and security.</p>
      </div>

      {/* Email Verification Banner */}
      {needsEmailVerification && <EmailVerificationBanner />}

      {/* Profile Information Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Profile Information</h2>

        {error && <p className="bg-red-100 text-red-700 p-3 rounded-md text-sm mb-4">{error}</p>}
        {successMessage && <p className="bg-green-100 text-green-700 p-3 rounded-md text-sm mb-4">{successMessage}</p>}

        <form onSubmit={handleProfileSave} className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative group">
              {previewUrl ? (
                <img src={previewUrl} alt="Preview" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-blue-500" />
              ) : user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-slate-200" />
              ) : (
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-200 flex items-center justify-center ring-4 ring-slate-200">
                  <IconUser className="h-12 w-12 sm:h-14 sm:w-14 text-slate-500" />
                </div>
              )}

              {/* Edit overlay button */}
              {!previewUrl && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />

            {/* Upload controls */}
            {selectedFile && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleProfilePictureUpload}
                  disabled={isUploading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors text-sm font-medium"
                >
                  {isUploading ? 'Uploading...' : 'Upload Photo'}
                </button>
                <button
                  type="button"
                  onClick={handleCancelUpload}
                  disabled={isUploading}
                  className="px-4 py-2 bg-slate-200 text-slate-700 rounded-md hover:bg-slate-300 disabled:opacity-50 transition-colors text-sm font-medium"
                >
                  Cancel
                </button>
              </div>
            )}

            {!selectedFile && (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Change Profile Picture
              </button>
            )}
          </div>

          <div>
            <label htmlFor="displayName" className="block text-sm font-medium text-slate-700">Display Name</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconUser className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconMail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                id="email"
                value={user.email || ''}
                disabled
                className="w-full pl-10 pr-3 py-2 bg-slate-100 border border-slate-300 rounded-md shadow-sm text-slate-500 cursor-not-allowed"
              />
            </div>
            {user.emailVerified && (
              <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified
              </p>
            )}
          </div>

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              type="submit"
              disabled={isLoading || displayName === user.displayName}
              className="w-full sm:w-auto flex justify-center items-center gap-2 py-2.5 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Account Security Card */}
      {!isGoogleUser && (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <IconShield className="h-5 w-5 text-blue-600" />
            Account Security
          </h2>

          {/* Change Password Section */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-medium text-slate-900">Change Password</h3>
                <p className="text-sm text-slate-500">Update your password</p>
              </div>
              <button
                onClick={() => {
                  setShowChangePassword(!showChangePassword);
                  setError(null);
                  setSuccessMessage(null);
                }}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
              >
                {showChangePassword ? 'Cancel' : 'Change'}
              </button>
            </div>

            {showChangePassword && (
              <form onSubmit={handlePasswordChange} className="mt-4 space-y-3">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                  <input
                    type="password"
                    id="currentPassword"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                  <input
                    type="password"
                    id="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPasswordLoading || !currentPassword || !newPassword || !confirmPassword}
                  className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
                >
                  {isPasswordLoading ? 'Updating...' : 'Update Password'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Google User Notice */}
      {isGoogleUser && (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mb-6">
          <div className="flex items-start gap-3">
            <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="font-semibold text-blue-900">Signed in with Google</h3>
              <p className="text-sm text-blue-700 mt-1">
                Your account is managed through Google. To change your email or password, please visit your Google Account settings.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Logout Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Session</h2>
        <button
          type="button"
          onClick={handleLogout}
          className="w-full sm:w-auto flex justify-center items-center gap-2 py-2.5 px-6 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
        >
          <IconLogout className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;