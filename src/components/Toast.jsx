import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const Toast = ({ toast, onClose }) => {
  if (!toast) return null;

  const { message, type = 'success' } = toast;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-brand-cyan shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
  };

  const borderColors = {
    success: 'border-emerald-500/40 bg-slate-900/95 text-slate-100 shadow-emerald-500/10',
    error: 'border-rose-500/40 bg-slate-900/95 text-slate-100 shadow-rose-500/10',
    info: 'border-cyan-500/40 bg-slate-900/95 text-slate-100 shadow-cyan-500/10',
    warning: 'border-amber-500/40 bg-slate-900/95 text-slate-100 shadow-amber-500/10'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md w-[calc(100%-3rem)] animate-bounce-in">
      <div className={`flex items-start gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md transition-all ${borderColors[type] || borderColors.info}`}>
        {icons[type] || icons.info}
        <div className="flex-1 text-sm font-medium leading-relaxed">
          {message}
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors p-1 -mr-1 -mt-1 rounded-lg hover:bg-white/5"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;

