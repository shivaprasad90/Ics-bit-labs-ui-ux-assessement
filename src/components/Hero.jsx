import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Workflow, 
  CloudLightning, 
  ShieldCheck, 
  ChevronRight,
  Code2,
  Terminal
} from 'lucide-react';

const Hero = ({ onOpenAIDemo }) => {
  return (
    <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 light:bg-white/90 border border-brand-cyan/40 shadow-lg shadow-brand-cyan/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
              <span className="text-xs font-mono font-semibold tracking-wider text-brand-cyan uppercase">
                AI • SOFTWARE • DIGITAL INNOVATION
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-950 leading-[1.15]">
              Engineering{' '}
              <span className="gradient-text">Intelligent Digital Solutions</span>{' '}
              for the Real World.
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              QYVERON Technologies builds modern web applications, AI-powered systems and scalable digital solutions that transform ideas into practical products.
            </p>

            {/* Action Buttons & Quick Link */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white font-semibold text-sm shadow-xl shadow-brand-blue/30 hover:shadow-brand-cyan/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 light:bg-white border border-slate-700/80 light:border-slate-300 text-slate-200 light:text-slate-800 font-semibold text-sm hover:border-brand-cyan/50 hover:bg-slate-800/80 transition-all flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
              </Link>

              <Link
                to="/careers"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-cyan hover:text-white transition-colors py-2 px-3 group"
              >
                <span>View Careers</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Trust / Metric indicators */}
            <div className="pt-6 border-t border-slate-800/80 light:border-slate-200 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white light:text-slate-900">
                  Full Stack
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  React & Python
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-cyan">
                  Applied AI
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Vision & RAG
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-brand-purple">
                  Enterprise
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  Relational Scalability
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Interactive Glass Cards Display */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Center Frame */}
            <div className="relative mx-auto max-w-md space-y-4">
              
              {/* Card 1: AI Solutions */}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 animate-float border-gradient-glow hover:border-brand-cyan/60 cursor-pointer"
                   onClick={onOpenAIDemo}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-blue/30 border border-brand-cyan/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-brand-cyan animate-pulse" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white light:text-slate-900 text-sm">
                      AI Solutions
                    </h3>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-brand-cyan/15 text-brand-cyan font-bold">
                      Interactive
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate">
                    Neural RAG assistants, LLM pipelines & vision
                  </p>
                </div>
              </div>

              {/* Card 2: Full Stack Development */}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 animate-float-reverse ml-4 sm:ml-8 border-gradient-glow hover:border-brand-blue/60"
                   style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/30 border border-blue-500/40 flex items-center justify-center shrink-0">
                  <Layers className="w-6 h-6 text-brand-electric" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white light:text-slate-900 text-sm">
                    Full Stack Development
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    React.js UIs paired with Python & Django backends
                  </p>
                </div>
              </div>

              {/* Card 3: Machine Learning */}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 animate-float mr-4 sm:mr-8 border-gradient-glow hover:border-purple-500/60"
                   style={{ animationDelay: '2s' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/30 border border-purple-500/40 flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-brand-purple" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white light:text-slate-900 text-sm">
                    Machine Learning
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    Predictive agronomy, biometrics & forecasting
                  </p>
                </div>
              </div>

              {/* Card 4: Smart Automation */}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 animate-float-reverse ml-2 sm:ml-6 border-gradient-glow hover:border-emerald-500/60"
                   style={{ animationDelay: '3s' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/30 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <Workflow className="w-6 h-6 text-emerald-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white light:text-slate-900 text-sm">
                    Smart Automation
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    Workflow orchestration & automated business logic
                  </p>
                </div>
              </div>

              {/* Card 5: Cloud Solutions */}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4 animate-float border-gradient-glow hover:border-amber-500/60"
                   style={{ animationDelay: '4s' }}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/30 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <CloudLightning className="w-6 h-6 text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white light:text-slate-900 text-sm">
                    Cloud Solutions
                  </h3>
                  <p className="text-xs text-slate-400 truncate">
                    Containerized microservices & scalable deployments
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

