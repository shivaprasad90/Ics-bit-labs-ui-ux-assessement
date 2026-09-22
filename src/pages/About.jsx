import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Target, 
  Compass, 
  Lightbulb, 
  Code2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const About = () => {
  const pillars = [
    {
      title: "Intelligent",
      subtitle: "AI-powered solutions.",
      icon: Cpu,
      color: "text-brand-cyan",
      borderColor: "hover:border-brand-cyan/50",
      description: "Harnessing predictive models, computer vision, and cognitive retrieval pipelines to transform static workflows into self-optimizing digital systems."
    },
    {
      title: "Modern",
      subtitle: "Current web and software technologies.",
      icon: Code2,
      color: "text-brand-electric",
      borderColor: "hover:border-brand-electric/50",
      description: "Leveraging component-driven React.js, responsive Tailwind paradigms, and Python/Django REST layers for ultra-fast, accessible digital products."
    },
    {
      title: "Scalable",
      subtitle: "Designed for future expansion.",
      icon: Layers,
      color: "text-brand-purple",
      borderColor: "hover:border-brand-purple/50",
      description: "Architected with normalized relational database schemas, decoupled client interfaces, and containerized cloud deployment workflows."
    },
    {
      title: "Practical",
      subtitle: "Focused on real-world problems.",
      icon: Target,
      color: "text-emerald-400",
      borderColor: "hover:border-emerald-400/50",
      description: "Zero algorithmic bloat. We engineer purposeful solutions for agricultural yield improvement, academic grievance transparency, and medical inventory reliability."
    }
  ];

  return (
    <div className="py-12 sm:py-20 relative z-10 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About QYVERON Technologies</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 leading-[1.15]">
            Technology Built Around{' '}
            <span className="gradient-text">Real Problems.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            QYVERON Technologies focuses on building practical software solutions using modern development, artificial intelligence and user-centered design.
          </p>
        </div>

        {/* 4 Pillars Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 transition-all duration-300 group ${item.borderColor}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-300 flex items-center justify-center mb-5 ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white light:text-slate-900 mb-1">
                  {item.title}
                </h3>
                <div className={`text-xs font-mono font-semibold mb-3 ${item.color}`}>
                  {item.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission, Vision, Innovation, Technology Detailed Grid */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 relative overflow-hidden group hover:border-brand-cyan/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Our Mission
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
              To engineer intelligent, high-reliability software systems that eliminate friction in business operations, empower domain experts with machine learning telemetry, and deliver frictionless user experiences across the digital spectrum.
            </p>
          </div>

          {/* Vision */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 relative overflow-hidden group hover:border-brand-blue/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-brand-blue flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Our Vision
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
              To be the premier technology partner for organizations transitioning into the cognitive computing era—where every application is intelligent by default, effortlessly responsive, and engineered on resilient open-source foundations.
            </p>
          </div>

          {/* Innovation */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-brand-purple flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Innovation
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
              Innovation at QYVERON is practical and applied. We do not chase fleeting buzzwords; we deploy Retrieval-Augmented Generation (RAG) to make complex regulatory manuals queryable, and computer vision to automate attendance and defect audits in real time.
            </p>
          </div>

          {/* Technology */}
          <div className="glass-panel p-8 rounded-3xl border border-slate-800/80 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Technology
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed">
              Our architecture emphasizes clean separation of concerns: React.js on the client for responsive rendering, Python and Django for battle-tested API orchestration, and MySQL/PostgreSQL for relational integrity, backed by modern containerization.
            </p>
          </div>

        </div>

        {/* Culture / Call to Action */}
        <div className="mt-20 glass-card p-8 sm:p-12 rounded-3xl border border-slate-800 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white light:text-slate-900">
            Interested in Collaborating with QYVERON?
          </h3>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Explore our featured engineering projects, examine our service offerings, or apply for our open Full Stack Developer positions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-semibold text-sm shadow-lg shadow-brand-blue/20 flex items-center gap-2"
            >
              <span>Explore Portfolio Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/careers"
              className="px-6 py-3 rounded-xl bg-slate-900 light:bg-white border border-slate-700 text-slate-200 light:text-slate-800 font-semibold text-sm hover:border-brand-cyan/50"
            >
              <span>Join as Full Stack Developer</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

