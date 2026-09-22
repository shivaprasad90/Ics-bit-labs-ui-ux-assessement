import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import TechnologyNetwork from '../components/TechnologyNetwork';
import FAQ from '../components/FAQ';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import { services } from '../data/services';
import { featuredProjects } from '../data/projects';
import { technologyCategories } from '../data/technologies';
import { 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Workflow, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Bot,
  Zap,
  Check
} from 'lucide-react';

const processSteps = [
  { num: '01', name: 'Discover', desc: 'Requirements analysis, domain mapping & architectural feasibility assessment.' },
  { num: '02', name: 'Plan', desc: 'Database schema modeling, API contract specification & sprint roadmaps.' },
  { num: '03', name: 'Design', desc: 'High-fidelity component system, UX flows & responsive wireframing.' },
  { num: '04', name: 'Develop', desc: 'Clean, modular frontend React code paired with structured backend logic.' },
  { num: '05', name: 'Test', desc: 'Rigorous responsive testing, integration audits & edge-case validation.' },
  { num: '06', name: 'Deploy', desc: 'Automated CI/CD pipelines, containerized rollout & CDN distribution.' },
  { num: '07', name: 'Improve', desc: 'Telemetry analysis, performance tuning & continuous system updates.' }
];

const Home = ({ onOpenAIDemo, onSelectService, onSelectProject }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. Hero Section */}
      <Hero onOpenAIDemo={onOpenAIDemo} />

      {/* 2. Why QYVERON (Build, Automate, Analyze, Scale) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Why QYVERON Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Engineered from first principles to deliver robust software and intelligent digital systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Build */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-brand-blue/50 group">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2">
              Build
            </h3>
            <p className="text-sm text-slate-300 light:text-slate-600">
              Modern software products engineered with clean architecture, responsive components, and scalable paradigms.
            </p>
          </div>

          {/* Automate */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-brand-cyan/50 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-brand-cyan flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Workflow className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2">
              Automate
            </h3>
            <p className="text-sm text-slate-300 light:text-slate-600">
              Intelligent workflow automation eliminating repetitive operational tasks and human bottlenecks.
            </p>
          </div>

          {/* Analyze */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-purple-500/50 group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-brand-purple flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2">
              Analyze
            </h3>
            <p className="text-sm text-slate-300 light:text-slate-600">
              Data-driven insights and machine learning predictions that convert raw telemetry into decisive action.
            </p>
          </div>

          {/* Scale */}
          <div className="glass-card p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/50 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2">
              Scale
            </h3>
            <p className="text-sm text-slate-300 light:text-slate-600">
              Cloud-ready solutions and normalized database models built to expand without performance bottlenecks.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Technology Network */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <TechnologyNetwork />
      </section>

      {/* 4. Core Services Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-cyan text-xs font-mono mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Stack & AI Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
              Engineering Services
            </h2>
          </div>
          <Link
            to="/services"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white transition-colors"
          >
            <span>Explore All 6 Service Domains</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>
      </section>

      {/* 5. 7-Step Engineering Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Development Lifecycle</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Our Engineering Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            A disciplined seven-phase execution workflow from conceptual discovery to continuous iteration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {processSteps.map((step, idx) => (
            <div
              key={step.num}
              className="glass-card p-4 rounded-2xl border border-slate-800/80 hover:border-brand-cyan/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="text-2xl font-extrabold font-mono text-brand-cyan/70 group-hover:text-brand-cyan transition-colors">
                  {step.num}
                </span>
                <h4 className="text-base font-bold text-white light:text-slate-900 mt-2">
                  {step.name}
                </h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t border-slate-800/50 flex items-center gap-1 text-[10px] font-mono text-brand-cyan">
                <Check className="w-3 h-3" />
                <span>Phase Verified</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Portfolio Showcase (Exactly the 5 projects) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-mono font-semibold uppercase text-brand-cyan tracking-wider block mb-1">
              Featured Portfolio Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
              Battle-Tested Implementations
            </h2>
          </div>
          <Link
            to="/projects"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:text-white transition-colors"
          >
            <span>View All 5 Projects with Architecture Specs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </section>

      {/* 7. Frontend AI Assistant Interactive Demo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-brand-cyan/30 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-mono">
                <Bot className="w-4 h-4" />
                <span>Frontend AI Demo Experience</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white light:text-slate-900">
                Experience the QYVERON AI Assistant
              </h3>
              <p className="text-sm sm:text-base text-slate-300 light:text-slate-600 max-w-xl">
                Test our interactive offline conversational assistant widget. Query our services, engineering tech stack, project architecture, or job openings with zero backend latency.
              </p>
            </div>

            <button
              onClick={onOpenAIDemo}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-cyan via-blue-500 to-brand-purple text-white font-bold text-sm shadow-xl shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shrink-0"
            >
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span>Launch AI Assistant Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Modern Technology Stack Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Modern Toolchains</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Technology Ecosystem
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Structured for high concurrency, clean decoupling, and smooth future backend integration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyCategories.map((cat) => (
            <div
              key={cat.category}
              className="glass-card p-6 rounded-2xl border border-slate-800 hover:border-brand-cyan/40 transition-all"
            >
              <h3 className="text-lg font-bold text-white light:text-slate-900 mb-1">
                {cat.category}
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 light:bg-slate-200 text-slate-300 light:text-slate-700 text-xs font-mono border border-slate-800 light:border-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <FAQ />

      {/* 10. Bottom Action CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-12">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-700/80 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Ready to Build Something Meaningful?
          </h2>
          <p className="text-slate-300 light:text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Whether you need a custom AI application, scalable full-stack web platform, or wish to join our engineering team, reach out today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/918309582791?text=Hello%20QYVERON%20Technologies%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-900/30 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 8309582791)</span>
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm border border-slate-600 flex items-center justify-center gap-2 transition-all"
            >
              <span>Submit Project Requirement</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

