import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, MessageSquare, Mail, ArrowUpRight, ShieldCheck, Code2, Sparkles } from 'lucide-react';

const Footer = () => {
  const whatsappUrl = "https://wa.me/918309582791?text=Hello%20QYVERON%20Technologies%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.";
  const emailUrl = "mailto:derangulashivaprasad7@gmail.com";

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950 light:bg-slate-900 text-slate-300 z-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-brand-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan via-brand-electric to-brand-purple p-[1.5px] shadow-lg shadow-brand-cyan/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-brand-cyan" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-wider font-mono text-white">
                QYVERON TECHNOLOGIES
              </span>
            </Link>
            
            <p className="text-brand-cyan font-medium text-sm">
              "Build Intelligent. Build Digital. Build the Future."
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Engineering modern web applications, AI-powered systems and scalable digital architectures that translate complex operational challenges into dependable software products.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational • Frontend Architecture</span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-mono mb-4 text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Projects', path: '/projects' },
                { name: 'AI Solutions', path: '/ai-solutions' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Capabilities */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-mono mb-4 text-slate-200">
              Focus Areas
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-brand-blue" />
                <span>Full Stack Web Apps</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Applied AI & ML</span>
              </li>
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-brand-purple" />
                <span>Computer Vision & RAG</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Custom Software & ERP</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Agritech & EdTech</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Contact (Strictly WhatsApp & Email Only) */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-mono mb-4 text-slate-200">
              Direct Contact
            </h4>
            
            {/* WhatsApp Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold uppercase tracking-wider">
                  WhatsApp Only
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <p className="text-slate-200 font-mono text-sm font-semibold">
                +91 8309582791
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md shadow-emerald-900/30 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Email Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-700/60 space-y-2">
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">
                Official Email
              </span>
              <p className="text-slate-200 text-xs font-mono break-all font-medium">
                derangulashivaprasad7@gmail.com
              </p>
              <a
                href={emailUrl}
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold border border-slate-600/60 transition-all hover:scale-[1.02]"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                <span>Send Email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            
            <p className="text-[11px] text-slate-400 italic">
              * Official business communication is conducted exclusively via WhatsApp and Email. Phone calls are not supported.
            </p>
          </div>

        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} QYVERON TECHNOLOGIES. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-brand-cyan/80 bg-brand-cyan/10 px-2.5 py-1 rounded-md border border-brand-cyan/20">
              Frontend-Only Architecture
            </span>
            <span>Ready for Django + MySQL Integration</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

