import React from 'react';
import { ExternalLink, Eye, Sparkles, Terminal, CheckCircle } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projectSvgPreviews = {
  "ai-agricultural-intelligence": (
    <div className="w-full h-44 bg-gradient-to-br from-emerald-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>SOIL SENSOR ACTIVE</span>
        <span>NPK: 120-45-60</span>
      </div>
      <div className="space-y-1">
        <div className="h-1.5 w-3/4 bg-emerald-500/40 rounded"></div>
        <div className="h-1.5 w-1/2 bg-emerald-500/20 rounded"></div>
        <div className="text-xs font-mono text-slate-300 mt-2">Predicted: High Maize Yield (+28.4%)</div>
      </div>
      <div className="flex gap-2">
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">Telemetry OK</span>
        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">Weather 26°C</span>
      </div>
    </div>
  ),
  "ai-student-scholarship-grievance": (
    <div className="w-full h-44 bg-gradient-to-br from-indigo-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-center text-[10px] font-mono text-indigo-400">
        <span>RAG PIPELINE READY</span>
        <span className="px-1.5 py-0.5 rounded bg-indigo-500/20">SCHOLARSHIP VERIFIED</span>
      </div>
      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-indigo-500/30 text-[11px] text-slate-300 font-mono">
        <span className="text-indigo-400">AI Categorizer:</span> Priority High • Fee Waiver Grievance auto-routed to Dean Office
      </div>
      <div className="flex gap-2 text-[10px] font-mono text-slate-400">
        <span>OCR Match: 99.2%</span>
        <span>•</span>
        <span>Status: Disbursed</span>
      </div>
    </div>
  ),
  "ai-face-recognition-attendance": (
    <div className="w-full h-44 bg-gradient-to-br from-cyan-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>OPENCV STREAM</span>
        <span>FPS: 60 • 1080p</span>
      </div>
      <div className="relative border border-cyan-500/40 rounded-lg p-2.5 bg-cyan-950/30 flex items-center justify-between">
        <div className="text-[11px] font-mono text-cyan-200">Subject #1042 Verified</div>
        <span className="px-2 py-0.5 rounded bg-cyan-500/30 text-cyan-300 text-[10px] font-mono">0.14s Match</span>
      </div>
      <div className="flex gap-2 text-[10px] font-mono text-slate-400">
        <span>Daily Logs: 1,480 Marked</span>
        <span>•</span>
        <span>Anti-Spoof: PASS</span>
      </div>
    </div>
  ),
  "pharmacy-management-system": (
    <div className="w-full h-44 bg-gradient-to-br from-blue-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-center text-[10px] font-mono text-blue-400">
        <span>ERP POINT-OF-SALE</span>
        <span className="text-emerald-400">GST INVOICE #8921</span>
      </div>
      <div className="p-2 rounded-lg bg-slate-900/90 border border-blue-500/30 text-[11px] font-mono space-y-1">
        <div className="flex justify-between text-slate-200">
          <span>Paracetamol 650mg (Batch B42)</span>
          <span className="text-emerald-400">In Stock (840)</span>
        </div>
        <div className="text-[10px] text-amber-400">Expiry Alert: 0 Batches flagged</div>
      </div>
      <div className="flex justify-between text-[10px] font-mono text-slate-400">
        <span>Barcode Scanner: Ready</span>
        <span className="text-slate-200 font-bold">Total: ₹420.00</span>
      </div>
    </div>
  ),
  "b2b-rfq-marketplace": (
    <div className="w-full h-44 bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 p-4 flex flex-col justify-between border-b border-slate-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
        <span>RFQ DISCOVERY ENGINE</span>
        <span className="text-amber-300">5 Bids Received</span>
      </div>
      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-[11px] font-mono">
        <div className="text-slate-200 font-semibold truncate">Precision Aluminum Lathe Fasteners</div>
        <div className="text-[10px] text-slate-400 mt-1">Lowest Quote: $1.42/unit • Verified Vendor</div>
      </div>
      <div className="flex gap-2 text-[10px] font-mono text-slate-400">
        <span>Milestone Terms: 30/70</span>
        <span>•</span>
        <span>Verified GSTIN</span>
      </div>
    </div>
  )
};

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-300">
      <div>
        {/* Mockup Preview */}
        {projectSvgPreviews[project.id] || (
          <div className="w-full h-44 bg-slate-900 flex items-center justify-center text-slate-500 font-mono text-xs">
            Project Architecture Simulation
          </div>
        )}

        {/* Content Container */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold text-brand-cyan uppercase tracking-wider font-mono">
              {project.category}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 light:bg-slate-200 text-slate-300 light:text-slate-700 border border-slate-700 light:border-slate-300">
              {project.badge}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors mb-2.5">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Key Features Bullet List */}
          <div className="space-y-1.5 mb-5">
            {project.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-brand-cyan mt-0.5 shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>

          {/* Technologies Chips */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80 light:border-slate-200">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Action Buttons */}
      <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-2 border-t border-slate-800/60 light:border-slate-200/80">
        
        {/* View Project Detail */}
        <button
          onClick={() => onSelect(project)}
          className="flex-1 py-2 px-3 rounded-xl bg-brand-blue/20 hover:bg-brand-blue text-brand-cyan hover:text-white border border-brand-blue/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>View Project</span>
        </button>

        {/* GitHub Button - Shows 'Coming Soon' when null as required */}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            title="GitHub Repository"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        ) : (
          <span 
            className="px-2.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-1 cursor-default"
            title="Repository Access Restricted (Demo)"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Coming Soon</span>
          </span>
        )}

        {/* Live Demo Button - Shows 'Coming Soon' when null as required */}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
            title="Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <button
            onClick={() => onSelect(project)}
            className="px-2.5 py-1.5 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-400 hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors flex items-center gap-1"
            title="Launch Interactive Simulation"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Coming Soon</span>
          </button>
        )}

      </div>
    </div>
  );
};

export default ProjectCard;
