
import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Content */}
      <div className="relative bg-[#0c0c0c] w-full max-w-lg rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-stone-800 overflow-hidden scale-100 transition-all duration-500 animate-[slideUp_0.4s_ease-out]">
        <div className="p-8 border-b border-stone-900 flex justify-between items-center bg-stone-900/20">
          <h3 className="text-2xl font-black text-white tracking-tight">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-500"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-8 max-h-[75vh] overflow-y-auto text-stone-300">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
