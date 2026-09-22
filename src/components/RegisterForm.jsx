import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Phone, Lock, ShieldAlert, ArrowRight } from 'lucide-react';
import { isValidEmail, isValidPhoneOrWhatsApp, validateRequired } from '../utils/validation';
import { setStoredUser } from '../utils/storage';

const RegisterForm = ({ onSuccessToast }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateRequired(formData.fullName)) newErrors.fullName = 'Full Name is required.';
    if (!isValidEmail(formData.email)) newErrors.email = 'Valid email is required.';
    if (!isValidPhoneOrWhatsApp(formData.whatsappNumber)) newErrors.whatsappNumber = 'Valid WhatsApp number is required.';
    if (!formData.password || formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const newUser = {
        id: `user-${Date.now()}`,
        fullName: formData.fullName,
        email: formData.email,
        whatsappNumber: formData.whatsappNumber,
        location: 'India',
        title: 'Developer',
        bio: 'QYVERON Community Member',
        skills: ['React', 'JavaScript', 'Python'],
        createdAt: new Date().toISOString(),
        isDemoAccount: true
      };
      setStoredUser(newUser);
      setLoading(false);
      if (onSuccessToast) onSuccessToast("Demo account created successfully! Welcome to QYVERON.");
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
          <span>This creates an offline demonstration profile in localStorage. No real external credentials are sent.</span>
        </div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-white light:text-slate-900">
          Create Demo Account
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          Join QYVERON candidate portal to apply and track positions.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Full Name <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Shiva Prasad"
              className={`w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border ${
                errors.fullName ? 'border-rose-500' : 'border-slate-800'
              } text-white text-sm focus:border-brand-cyan focus:outline-none`}
            />
            <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
          </div>
          {errors.fullName && <p className="text-rose-400 text-[11px] mt-0.5">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Email Address <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="name@example.com"
              className={`w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border ${
                errors.email ? 'border-rose-500' : 'border-slate-800'
              } text-white text-sm focus:border-brand-cyan focus:outline-none`}
            />
            <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
          </div>
          {errors.email && <p className="text-rose-400 text-[11px] mt-0.5">{errors.email}</p>}
        </div>

        {/* WhatsApp Number */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            WhatsApp Number <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={formData.whatsappNumber}
              onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
              placeholder="+91 8309582791"
              className={`w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border ${
                errors.whatsappNumber ? 'border-rose-500' : 'border-slate-800'
              } text-white text-sm focus:border-brand-cyan focus:outline-none`}
            />
            <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
          </div>
          {errors.whatsappNumber && <p className="text-rose-400 text-[11px] mt-0.5">{errors.whatsappNumber}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Password <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Minimum 6 characters"
              className={`w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border ${
                errors.password ? 'border-rose-500' : 'border-slate-800'
              } text-white text-sm focus:border-brand-cyan focus:outline-none`}
            />
            <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
          </div>
          {errors.password && <p className="text-rose-400 text-[11px] mt-0.5">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            Confirm Password <span className="text-rose-400">*</span>
          </label>
          <div className="relative">
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="Repeat password"
              className={`w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border ${
                errors.confirmPassword ? 'border-rose-500' : 'border-slate-800'
              } text-white text-sm focus:border-brand-cyan focus:outline-none`}
            />
            <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-2.5" />
          </div>
          {errors.confirmPassword && <p className="text-rose-400 text-[11px] mt-0.5">{errors.confirmPassword}</p>}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
          >
            {loading ? <span>Creating Account...</span> : <span>Create Account</span>}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Switch to Login */}
      <div className="mt-6 text-center text-xs text-slate-400 border-t border-slate-800 pt-4">
        Already registered?{' '}
        <Link to="/login" className="text-brand-cyan hover:underline font-semibold">
          Sign In
        </Link>
      </div>

    </div>
  );
};

export default RegisterForm;

