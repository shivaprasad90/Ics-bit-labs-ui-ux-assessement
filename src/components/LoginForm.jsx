import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, ShieldAlert, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { isValidEmail, validateRequired } from '../utils/validation';
import { setStoredUser, getDemoCredentials } from '../utils/storage';

const LoginForm = ({ onSuccessToast }) => {
  const navigate = useNavigate();
  const demoCreds = getDemoCredentials();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleQuickFill = () => {
    setFormData({
      email: demoCreds.email,
      password: demoCreds.password
    });
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!isValidEmail(formData.email)) newErrors.email = 'Please provide a valid email address.';
    if (!validateRequired(formData.password)) newErrors.password = 'Password is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      // Create active demo user session
      const userToStore = {
        ...demoCreds.user,
        email: formData.email,
        fullName: formData.email.split('@')[0].toUpperCase(),
        lastLogin: new Date().toISOString()
      };
      setStoredUser(userToStore);
      setLoading(false);
      if (onSuccessToast) onSuccessToast("Demo authentication successful. Welcome back!");
      navigate('/dashboard');
    }, 500);
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-3xl glass-panel p-8 border border-slate-700/80 shadow-2xl relative">
      
      {/* Demo Notice Banner */}
      <div className="mb-6 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block">Demo Authentication</strong>
          <span>This is a frontend demonstration using browser localStorage. Production credentials and real passwords are not stored.</span>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-extrabold text-white light:text-slate-900">
          Sign In to Portal
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Access your submitted job applications, saved jobs, and profile.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: null });
              }}
              placeholder="demo@qyveron.com"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border ${
                errors.email ? 'border-rose-500' : 'border-slate-800'
              } text-white text-sm focus:border-brand-cyan focus:outline-none`}
            />
            <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          </div>
          {errors.email && <p className="text-rose-400 text-[11px] mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
                if (errors.password) setErrors({ ...errors, password: null });
              }}
              placeholder="••••••••"
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950 border ${
                errors.password ? 'border-rose-500' : 'border-slate-800'
              } text-white text-sm focus:border-brand-cyan focus:outline-none`}
            />
            <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          </div>
          {errors.password && <p className="text-rose-400 text-[11px] mt-1">{errors.password}</p>}
        </div>

        {/* Quick Fill Button */}
        <button
          type="button"
          onClick={handleQuickFill}
          className="w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-brand-cyan text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
        >
          <Zap className="w-3.5 h-3.5" />
          <span>Quick 1-Click Demo Fill</span>
        </button>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? (
            <span>Signing in...</span>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Register */}
      <div className="mt-6 text-center text-xs text-slate-400 border-t border-slate-800 pt-4">
        Don't have a demo profile yet?{' '}
        <Link to="/register" className="text-brand-cyan hover:underline font-semibold">
          Create Demo Account
        </Link>
      </div>

    </div>
  );
};

export default LoginForm;

