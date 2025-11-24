import React from 'react';
import { IconLock } from './Icons';

interface LoginRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const LoginRequiredModal: React.FC<LoginRequiredModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 text-center animate-modal-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 mb-4">
          <IconLock className="h-7 w-7 text-blue-600" />
        </div>
        <h2 id="login-modal-title" className="text-xl font-bold text-slate-800 mb-2">Authentication Required</h2>
        <p className="text-slate-600 mb-6">
          Please login to access your Dashboard, Saved Plans, and Profile settings. It's quick and secure!
        </p>
        
        <div className="flex gap-3">
            <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
            >
                Cancel
            </button>
            <button
                onClick={onLogin}
                className="flex-1 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
                Login Now
            </button>
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-pop-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-modal-pop-in {
            animation: modal-pop-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LoginRequiredModal;