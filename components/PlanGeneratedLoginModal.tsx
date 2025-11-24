
import React from 'react';
import { IconSparkles } from './Icons';

interface PlanGeneratedLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
}

const PlanGeneratedLoginModal: React.FC<PlanGeneratedLoginModalProps> = ({ isOpen, onClose, onLogin }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-ready-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 text-center animate-modal-pop-in border-t-4 border-blue-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mb-5 animate-bounce">
          <IconSparkles className="h-8 w-8 text-blue-600" />
        </div>
        <h2 id="plan-ready-title" className="text-2xl font-bold text-slate-800 mb-2">Your Plan is Ready!</h2>
        <p className="text-slate-600 mb-6">
          We've analyzed your financial profile and generated a personalized investment strategy. <br/><br/>
          <span className="font-semibold text-slate-800">Please login or sign up to unlock your dashboard and see your fund recommendations.</span>
        </p>
        
        <div className="space-y-3">
            <button
                onClick={onLogin}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:-translate-y-0.5"
            >
                Login to View Plan
            </button>
            <button
                onClick={onClose}
                className="w-full px-4 py-2 text-slate-500 hover:text-slate-700 font-medium text-sm hover:underline transition-colors"
            >
                No thanks, I'll do it later
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
            animation: modal-pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      `}</style>
    </div>
  );
};

export default PlanGeneratedLoginModal;
