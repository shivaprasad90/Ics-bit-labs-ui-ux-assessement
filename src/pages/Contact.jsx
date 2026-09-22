import React from 'react';
import { useLocation } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { 
  MessageSquare, 
  Mail, 
  Sparkles, 
  ArrowUpRight, 
  ShieldAlert, 
  Clock, 
  MapPin, 
  CheckCircle2 
} from 'lucide-react';

const Contact = ({ onShowToast }) => {
  const location = useLocation();
  const prefilledService = location.state?.prefilledService || '';

  const whatsappUrl = "https://wa.me/918309582791?text=" + encodeURIComponent(
    "Hello QYVERON Technologies, I would like to know more about your services."
  );
  const emailUrl = "mailto:derangulashivaprasad7@gmail.com";

  return (
    <div className="py-12 sm:py-20 relative z-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 leading-[1.15]">
            Let's Build Something{' '}
            <span className="gradient-text">Meaningful.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            Have a project idea, business requirement, or technology question? Connect with QYVERON Technologies through WhatsApp or email.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-emerald-500/40 relative overflow-hidden shadow-xl space-y-4 group hover:border-emerald-400/60 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                  WhatsApp Only
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Direct WhatsApp Engineering Desk
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Connect instantly for rapid requirements discussion, feasibility review, and technical inquiries.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-base font-bold text-slate-200">
                +91 8309582791
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="text-[11px] text-amber-300/80 flex items-center gap-2 pt-1 font-mono">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                <span>Phone calling is not supported. Please send a WhatsApp message.</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-slate-700/80 relative overflow-hidden shadow-xl space-y-4 group hover:border-brand-blue/60 transition-all">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 border border-brand-blue/40 text-brand-cyan flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold uppercase tracking-wider">
                  Official Email
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">
                  Technical Correspondence
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Send RFPs, enterprise architecture briefs, NDA requests, and project documentation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs sm:text-sm font-medium text-slate-200 break-all">
                derangulashivaprasad7@gmail.com
              </div>

              <a
                href={emailUrl}
                className="w-full py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold text-sm border border-slate-600 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-4 h-4 text-brand-cyan" />
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Response Time Indicator */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>Typical Response Time: Within 2–4 hours during standard operational hours.</span>
            </div>

          </div>

          {/* Right Column: Contact & Project Inquiry Form */}
          <div className="lg:col-span-7">
            <ContactForm initialService={prefilledService} onSuccessToast={onShowToast} />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;

