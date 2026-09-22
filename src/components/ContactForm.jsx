import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, ArrowUpRight } from 'lucide-react';
import { isValidEmail, isValidPhoneOrWhatsApp, validateRequired } from '../utils/validation';
import { saveContactEnquiry } from '../utils/storage';

const serviceOptions = [
  "Full Stack Development",
  "AI & Machine Learning",
  "Custom Software",
  "Agricultural Technology",
  "Education Technology",
  "Cloud & Digital Solutions"
];

const ContactForm = ({ initialService = "", onSuccessToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    company: '',
    serviceRequired: initialService || serviceOptions[0],
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const whatsappRedirectUrl = `https://wa.me/918309582791?text=${encodeURIComponent(
    `Hello QYVERON Technologies, I submitted an enquiry for ${formData.serviceRequired}.`
  )}`;

  const validate = () => {
    const errs = {};
    if (!validateRequired(formData.fullName)) errs.fullName = 'Full Name is required.';
    if (!isValidEmail(formData.email)) errs.email = 'Valid email is required.';
    if (!isValidPhoneOrWhatsApp(formData.whatsappNumber)) errs.whatsappNumber = 'Valid WhatsApp number is required (10-15 digits).';
    if (!validateRequired(formData.serviceRequired)) errs.serviceRequired = 'Please select a service.';
    if (!validateRequired(formData.message)) errs.message = 'Please provide details about your project or requirement.';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      saveContactEnquiry(formData);
      setLoading(false);
      setSubmitted(true);
      if (onSuccessToast) {
        onSuccessToast("Thank you for your enquiry. For faster communication, please contact us on WhatsApp.");
      }
    }, 500);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative">
      {submitted ? (
        <div className="py-8 text-center space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-white">
              Thank you for your enquiry.
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              Your inquiry has been recorded successfully. For immediate discussion with our engineering lead, connect directly on WhatsApp:
            </p>
          </div>

          {/* Quick WhatsApp Action Button */}
          <div className="pt-2">
            <a
              href={whatsappRedirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-900/30 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp (+91 8309582791)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  whatsappNumber: '',
                  company: '',
                  serviceRequired: serviceOptions[0],
                  message: ''
                });
              }}
              className="text-xs text-slate-400 hover:text-white underline"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Shiva Prasad"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                  errors.fullName ? 'border-rose-500' : 'border-slate-800'
                } text-white text-sm focus:border-brand-cyan focus:outline-none`}
              />
              {errors.fullName && <p className="text-rose-400 text-[11px] mt-1">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email Address <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                  errors.email ? 'border-rose-500' : 'border-slate-800'
                } text-white text-sm focus:border-brand-cyan focus:outline-none`}
              />
              {errors.email && <p className="text-rose-400 text-[11px] mt-1">{errors.email}</p>}
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                WhatsApp Number <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                placeholder="+91 8309582791"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                  errors.whatsappNumber ? 'border-rose-500' : 'border-slate-800'
                } text-white text-sm focus:border-brand-cyan focus:outline-none`}
              />
              {errors.whatsappNumber && <p className="text-rose-400 text-[11px] mt-1">{errors.whatsappNumber}</p>}
            </div>

            {/* Company / Organization */}
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Company / Organization
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Acme Innovations"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-cyan focus:outline-none"
              />
            </div>
          </div>

          {/* Service Required */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Service Required <span className="text-rose-400">*</span>
            </label>
            <select
              value={formData.serviceRequired}
              onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-cyan focus:outline-none"
            >
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-slate-900 text-white">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Project Details & Requirements <span className="text-rose-400">*</span>
            </label>
            <textarea
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your goals, timeline, and any specific technical requirements..."
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                errors.message ? 'border-rose-500' : 'border-slate-800'
              } text-white text-sm focus:border-brand-cyan focus:outline-none`}
            ></textarea>
            {errors.message && <p className="text-rose-400 text-[11px] mt-1">{errors.message}</p>}
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? (
                <span>Recording Enquiry...</span>
              ) : (
                <>
                  <span>Send Enquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <p className="text-center text-[11px] text-slate-500 mt-2">
            * Direct official inquiries: WhatsApp (+91 8309582791) & Email (derangulashivaprasad7@gmail.com). Phone calls are disabled.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

