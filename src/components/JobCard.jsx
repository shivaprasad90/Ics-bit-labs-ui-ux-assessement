import React from 'react';
import { Briefcase, MapPin, Clock, Bookmark, ArrowRight, Check } from 'lucide-react';

const JobCard = ({ job, isSaved, onToggleSave, onSelectJob }) => {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-brand-cyan/50 transition-all duration-300">
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-mono font-semibold">
            {job.badge}
          </span>
          <button
            onClick={() => onToggleSave(job.id)}
            aria-label={isSaved ? "Remove from saved jobs" : "Save this job"}
            className={`p-2 rounded-xl border transition-all ${
              isSaved
                ? 'bg-brand-cyan/20 border-brand-cyan/50 text-brand-cyan'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors mb-2">
          {job.title}
        </h3>

        {/* Experience & Logistics Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{job.experience}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-brand-blue" />
            <span>{job.jobType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-purple" />
            <span>{job.location}</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-5">
          {job.summary}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-900/90 light:bg-slate-200/70 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Action CTA */}
      <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center gap-3">
        <button
          onClick={() => onSelectJob(job)}
          className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-xs shadow-md shadow-brand-blue/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
        >
          <span>View Details & Apply</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;

