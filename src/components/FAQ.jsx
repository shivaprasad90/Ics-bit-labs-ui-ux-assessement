import React, { useState } from 'react';
import { faqs } from '../data/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openId, setOpenId] = useState('faq-1');

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Everything you need to know about partnering with QYVERON Technologies, our engineering capabilities, and developer careers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:text-brand-cyan transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white light:text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-brand-cyan/20 border-brand-cyan/50 text-brand-cyan' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed border-t border-slate-800/40 light:border-slate-100 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;

