import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects, projectFilterOptions } from '../data/projects';
import { 
  Search, 
  Sparkles, 
  X, 
  CheckCircle, 
  ExternalLink, 
  Cpu, 
  Layers, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = featuredProjects.filter((project) => {
    const matchesFilter =
      activeFilter === 'All' ||
      project.filterCategories.includes(activeFilter) ||
      project.technologies.some(t => t.toLowerCase() === activeFilter.toLowerCase());

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 relative z-10 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Projects</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 leading-[1.15]">
            Engineering That{' '}
            <span className="gradient-text">Delivers Results.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            Examine our 5 highlighted systems spanning agricultural AI, grievance resolution, facial biometric tracking, pharmaceutical ERP, and enterprise B2B procurement.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10 max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name, keyword, or tech stack (e.g. OpenCV, RAG, Django, MySQL)..."
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

          {/* Filter Categories Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {projectFilterOptions.map((opt) => (
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

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
            <Cpu className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-bold text-white">No projects found</h3>
            <p className="text-xs text-slate-400">
              No matching projects for query "{searchQuery}". Clear your search or change the active filter.
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

        {/* Detailed Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto">
              
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-semibold text-brand-cyan uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl font-extrabold text-white mt-1">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="py-6 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Executive Brief
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Architecture Highlights */}
                <div className="p-4 rounded-2xl bg-brand-blue/10 border border-brand-blue/30 space-y-2">
                  <div className="flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-wider font-bold">
                    <Layers className="w-4 h-4" />
                    <span>System & Database Architecture</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Engineered Core Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Stack Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Production Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-brand-cyan font-mono text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Bottom CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400">
                    Repository status:
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-amber-300 border border-slate-700">
                    Proprietary / Coming Soon
                  </span>
                </div>

                <a
                  href={`https://wa.me/918309582791?text=${encodeURIComponent(
                    `Hello QYVERON Technologies, I would like to know more about the ${selectedProject.title} project.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-900/30"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Inquire Architecture on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
