import React, { useState, useEffect } from 'react';
import { User, updateProfile } from 'firebase/auth';
import { auth } from '../services/firebase';
import { updateUserProfileDocument } from '../services/firestoreService';
import { IconUser, IconMail, IconLogout } from '../components/Icons';

interface ProfileProps {
  user: User;
  onLogout: () => void;
  onProfileUpdate: (updatedUser: User) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout, onProfileUpdate }) => {
  const [displayName, setDisplayName] = useState(user.displayName || '');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    setDisplayName(user.displayName || '');
  }, [user]);

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
        onProfileUpdate(auth.currentUser);
      }
      
      setSuccessMessage('Display name updated successfully!');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
      setTimeout(() => setSuccessMessage(null), 3000);
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Profile Settings</h1>
        <p className="text-slate-600">Manage your account details.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
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
        
        <div className="mt-8 pt-6 border-t border-slate-200">
           <button
              type="button"
              onClick={onLogout}
              className="w-full sm:w-auto flex justify-center items-center gap-2 py-2.5 px-6 bg-red-50 text-red-600 font-semibold rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
            >
              <IconLogout className="w-5 w-5" />
              Logout
            </button>
        </div>

      </div>
    </div>
  );
};

export default Profile;