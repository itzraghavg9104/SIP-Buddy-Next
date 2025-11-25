(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78385,e=>{"use strict";var t=e.i(96876),i=e.i(5787);e.s(["default",0,({isOpen:e,onClose:a,title:o,message:l,children:s})=>e?(0,t.jsxs)("div",{className:"fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex justify-center items-center p-4 animate-fade-in",onClick:a,role:"dialog","aria-modal":"true","aria-labelledby":"notification-title",children:[(0,t.jsxs)("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 text-center animate-modal-pop-in",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("div",{className:"mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4",children:(0,t.jsx)(i.IconInfoCircle,{className:"h-6 w-6 text-blue-600"})}),(0,t.jsx)("h2",{id:"notification-title",className:"text-xl font-semibold text-slate-800 mb-2",children:o}),(0,t.jsx)("p",{className:"text-slate-600 mb-6",children:l}),s?(0,t.jsx)("div",{children:s}):(0,t.jsx)("button",{onClick:a,className:"w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors",children:"Got it"})]}),(0,t.jsx)("style",{children:`
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
      `})]}):null])}]);