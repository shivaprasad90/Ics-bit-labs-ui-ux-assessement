import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import JobModal from '../components/JobModal';
import { jobOpenings, jobFilterOptions } from '../data/jobs';
import { getSavedJobIds, toggleSaveJobId } from '../utils/storage';
import { 
  Briefcase, 
  Search, 
  Sparkles, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  Code2, 
  Terminal, 
  Layers
} from 'lucide-react';

const Careers = ({ onShowToast }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedJobIds, setSavedJobIds] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    setSavedJobIds(getSavedJobIds());
  }, []);

  const handleToggleSave = (jobId) => {
    const updated = toggleSaveJobId(jobId);
    setSavedJobIds(updated);
    const isNowSaved = updated.includes(jobId);
    if (onShowToast) {
      onShowToast(
        isNowSaved
          ? 'Job bookmarked to your Saved Jobs dashboard!'
          : 'Job removed from bookmarks.'
      );
    }
  };

  const handleApplicationSuccess = (jobTitle) => {
    if (onShowToast) {
      onShowToast(`Application submitted successfully for ${jobTitle}.`);
    }
  };

  // Filter jobs - strictly Full Stack developer roles only
  const filteredJobs = jobOpenings.filter((job) => {
    const matchesFilter =
      activeFilter === 'All' ||
      job.categoryType === activeFilter ||
      job.experience.toLowerCase().includes(activeFilter.toLowerCase());

    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 relative z-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Careers Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Openings Only</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 leading-[1.15]">
            Build the Future{' '}
            <span className="gradient-text">With QYVERON.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            We are looking for developers who enjoy building modern web applications and solving real-world technology problems.
          </p>

          <div className="inline-flex items-center gap-2 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Exclusively Full Stack Developer Roles • All Listings Marked As Demo / Sample Openings</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10 max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Full Stack developer openings by title, tech stack (React, Python, Django, SQL)..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-700/80 light:border-slate-300 text-white light:text-slate-900 placeholder:text-slate-500 text-sm focus:border-brand-cyan focus:outline-none shadow-lg shadow-black/10"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {jobFilterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setActiveFilter(opt)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeFilter === opt
                    ? 'bg-brand-cyan text-slate-950 font-bold shadow-md shadow-brand-cyan/25 scale-105'
                    : 'bg-slate-900/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-800 light:border-slate-300 hover:border-brand-cyan/50 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs List Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isSaved={savedJobIds.includes(job.id)}
                onToggleSave={handleToggleSave}
                onSelectJob={(j) => setSelectedJob(j)}
              />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
            <Briefcase className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-bold text-white">No developer roles found</h3>
            <p className="text-xs text-slate-400">
              No developer positions matched "{searchQuery}". Remember only Full Stack roles are offered at QYVERON.
            </p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-mono"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Engineering Culture Values */}
        <div className="mt-20 pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white light:text-slate-900">
              Why Engineers Choose QYVERON
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              What it means to write code on real systems solving tangible challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <Terminal className="w-6 h-6 text-brand-cyan mb-3" />
              <h4 className="font-bold text-white mb-1 text-base">Direct Ownership</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build end-to-end features spanning React user interfaces down to database indexes. No siloed ticket pushing.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <Sparkles className="w-6 h-6 text-brand-purple mb-3" />
              <h4 className="font-bold text-white mb-1 text-base">Applied AI Exposure</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Work alongside machine learning models, computer vision pipelines, and RAG architectures in real production apps.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <Layers className="w-6 h-6 text-emerald-400 mb-3" />
              <h4 className="font-bold text-white mb-1 text-base">Clean Craftsmanship</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We believe in readable code, standardized API specs, Git hygiene, and maintainable software engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Job Details & Application Modal */}
        {selectedJob && (
          <JobModal
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
            onApplicationSuccess={handleApplicationSuccess}
          />
        )}

      </div>
    </div>
  );
};

export default Careers;

