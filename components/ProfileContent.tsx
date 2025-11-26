import React, { useState, useEffect } from 'react';
import { updateProfile, updateEmail, updatePassword, reauthenticateWithCredential, EmailAuthProvider, sendEmailVerification } from 'firebase/auth';
import { auth } from '../services/firebase';
import { updateUserProfileDocument } from '../services/firestoreService';
import { IconUser, IconMail, IconLogout, IconKey, IconShield } from '../components/Icons';
import { useGlobalContext } from '../context/GlobalContext';
import EmailVerificationBanner from './EmailVerificationBanner';

const Profile: React.FC = () => {
  const { user, handleLogout, handleProfileUpdate, needsEmailVerification, refreshEmailVerification } = useGlobalContext();

  // Display name state
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Change email state
  const [showChangeEmail, setShowChangeEmail] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [emailPassword, setEmailPassword] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);

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

  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser || !newEmail || !emailPassword) return;

    setIsEmailLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      // Reauthenticate user before changing email
      const credential = EmailAuthProvider.credential(user.email!, emailPassword);
      await reauthenticateWithCredential(auth.currentUser, credential);

      // Update email
      await updateEmail(auth.currentUser, newEmail);

      // Send verification email to new address
      await sendEmailVerification(auth.currentUser);

      setSuccessMessage('Email updated! Please verify your new email address.');
      setShowChangeEmail(false);
      setNewEmail('');
      setEmailPassword('');

      // Refresh verification status
      await refreshEmailVerification();
    } catch (err: any) {
      if (err.code === 'auth/wrong-password') {
        setError('Incorrect password. Please try again.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email is already in use by another account.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else if (err.code === 'auth/requires-recent-login') {
        setError('Please log out and log in again before changing your email.');
      } else {
        setError(err.message || 'Failed to update email.');
      }
    } finally {
      setIsEmailLoading(false);
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
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              {user.photoURL ? (
                <img src={user.photoURL} alt="Profile" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-slate-200" />
              ) : (
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-slate-200 flex items-center justify-center ring-4 ring-slate-200">
                  <IconUser className="h-12 w-12 sm:h-14 sm:w-14 text-slate-500" />
                </div>
              )}
            </div>
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

          <div className="space-y-4">
            {/* Change Email Section */}
            <div className="border-b border-slate-200 pb-4">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium text-slate-900">Change Email</h3>
                  <p className="text-sm text-slate-500">Update your email address</p>
                </div>
                <button
                  onClick={() => {
                    setShowChangeEmail(!showChangeEmail);
                    setShowChangePassword(false);
                    setError(null);
                    setSuccessMessage(null);
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  {showChangeEmail ? 'Cancel' : 'Change'}
                </button>
              </div>

              {showChangeEmail && (
                <form onSubmit={handleEmailChange} className="mt-4 space-y-3">
                  <div>
                    <label htmlFor="newEmail" className="block text-sm font-medium text-slate-700 mb-1">New Email</label>
                    <input
                      type="email"
                      id="newEmail"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      required
                      placeholder="newemail@example.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="emailPassword" className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                    <input
                      type="password"
                      id="emailPassword"
                      value={emailPassword}
                      onChange={(e) => setEmailPassword(e.target.value)}
                      required
                      placeholder="••••••••"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isEmailLoading || !newEmail || !emailPassword}
                    className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
                  >
                    {isEmailLoading ? 'Updating...' : 'Update Email'}
                  </button>
                </form>
              )}
            </div>

            {/* Change Password Section */}
            <div className="pt-2">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-medium text-slate-900">Change Password</h3>
                  <p className="text-sm text-slate-500">Update your password</p>
                </div>
                <button
                  onClick={() => {
                    setShowChangePassword(!showChangePassword);
                    setShowChangeEmail(false);
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
        </div>
      )}

      {/* Google User Notice */}
      {isGoogleUser && (
        <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mb-6">
          <div className="flex items-start gap-3">
            <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 01202 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
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