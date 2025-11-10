import React from 'react';
import { IconInfoCircle } from './Icons';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  children?: React.ReactNode;
}

const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose, title, message, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="notification-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 text-center animate-modal-pop-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
          <IconInfoCircle className="h-6 w-6 text-blue-600" />
        </div>
        <h2 id="notification-title" className="text-xl font-semibold text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-600 mb-6">{message}</p>
        
        {children ? (
          <div>{children}</div>
        ) : (
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Got it
          </button>
        )}
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

export default NotificationModal;