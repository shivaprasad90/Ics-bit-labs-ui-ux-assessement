import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Boxes, 
  Sprout, 
  GraduationCap, 
  CloudLightning,
  MessageSquare
} from 'lucide-react';

const iconMap = {
  Layers: Layers,
  Cpu: Cpu,
  Boxes: Boxes,
  Sprout: Sprout,
  GraduationCap: GraduationCap,
  CloudLightning: CloudLightning
};

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const handleRequestService = (serviceTitle) => {
    navigate('/contact', { state: { prefilledService: serviceTitle } });
  };

  return (
    <div className="py-12 sm:py-20 relative z-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Enterprise Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 leading-[1.15]">
            Engineered for Precision &{' '}
            <span className="gradient-text">Scalable Impact.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            From modern React interfaces to high-accuracy predictive machine learning and agricultural intelligence systems, explore our 6 core engineering offerings.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={(svc) => setSelectedService(svc)}
            />
          ))}
        </div>

        {/* Detailed Service Modal when "Learn More" is clicked */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan flex items-center justify-center">
                    {React.createElement(iconMap[selectedService.iconName] || Layers, { className: "w-5 h-5" })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {selectedService.title}
                    </h3>
                    <span className="text-xs font-mono text-brand-cyan">
                      Enterprise Technology Domain
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="py-6 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Architectural Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedService.detailedDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Deliverables & Specialized Sub-Offerings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.subOfferings.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-brand-cyan font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/918309582791?text=${encodeURIComponent(
                    `Hello QYVERON Technologies, I want to discuss a project regarding ${selectedService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss on WhatsApp</span>
                </a>

                <button
                  onClick={() => handleRequestService(selectedService.title)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/25"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Services;

