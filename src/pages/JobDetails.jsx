import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { jobOpenings } from '../data/jobs';
import JobModal from '../components/JobModal';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  Send,
  Bookmark
} from 'lucide-react';
import { getSavedJobIds, toggleSaveJobId } from '../utils/storage';

const JobDetails = ({ onShowToast }) => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobOpenings.find((j) => j.id === jobId);

  const [saved, setSaved] = useState(getSavedJobIds().includes(jobId));
  const [showApplyModal, setShowApplyModal] = useState(false);

  if (!job) {
    return (
      <div className="py-24 text-center max-w-md mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-2">Job Opening Not Found</h2>
        <p className="text-sm text-slate-400 mb-6">
          The requested position does not exist or has closed.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan text-slate-950 font-bold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Careers</span>
        </Link>
      </div>
    );
  }

  const handleToggleSave = () => {
    const updated = toggleSaveJobId(job.id);
    const isNowSaved = updated.includes(job.id);
    setSaved(isNowSaved);
    if (onShowToast) {
      onShowToast(isNowSaved ? 'Job saved to Dashboard!' : 'Job removed from saved.');
    }
  };

  return (
    <div className="py-12 sm:py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-brand-cyan mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Openings</span>
        </Link>

        {/* Header Glass Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-700/80 shadow-2xl mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
                {job.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                {job.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleToggleSave}
                className={`p-3 rounded-xl border transition-all ${
                  saved
                    ? 'bg-brand-cyan/20 border-brand-cyan/50 text-brand-cyan'
                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                }`}
                title="Save Job"
              >
                <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => setShowApplyModal(true)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold text-sm shadow-xl shadow-brand-blue/30 flex items-center gap-2 hover:scale-105 transition-all"
              >
                <span>Apply Now</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Meta */}
          <div className="grid grid-cols-3 gap-4 pt-6 text-center">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs text-slate-400 block">Experience</span>
              <span className="text-sm font-bold text-white font-mono">{job.experience}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs text-slate-400 block">Job Type</span>
              <span className="text-sm font-bold text-white font-mono">{job.jobType}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <span className="text-xs text-slate-400 block">Location</span>
              <span className="text-sm font-bold text-white font-mono">{job.location}</span>
            </div>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-slate-700/80 space-y-8">
          <div>
            <h3 className="text-base font-mono uppercase tracking-wider text-brand-cyan mb-2">
              Role Summary
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {job.summary}
            </p>
          </div>

          <div>
            <h3 className="text-base font-mono uppercase tracking-wider text-brand-cyan mb-3">
              Required Technical Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-brand-cyan font-mono text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-mono uppercase tracking-wider text-brand-cyan mb-3">
              Core Responsibilities
            </h3>
            <ul className="space-y-2.5">
              {job.responsibilities.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-mono uppercase tracking-wider text-brand-cyan mb-3">
              Qualifications & Competencies
            </h3>
            <ul className="space-y-2.5">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/20 space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-wider text-brand-cyan flex items-center gap-2 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>What You Will Learn At QYVERON</span>
            </h4>
            <ul className="space-y-1.5">
              {job.whatYouWillLearn.map((item, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={() => setShowApplyModal(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-bold text-sm shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <span>Submit Candidate Application</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal for Application */}
        {showApplyModal && (
          <JobModal
            job={job}
            onClose={() => setShowApplyModal(false)}
            onApplicationSuccess={(title) => {
              if (onShowToast) onShowToast(`Application submitted successfully for ${title}.`);
            }}
          />
        )}

      </div>
    </div>
  );
};

export default JobDetails;

