import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  User, 
  Briefcase, 
  Bookmark, 
  MessageSquare, 
  Settings, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Trash2, 
  ArrowRight, 
  ShieldCheck, 
  Edit3,
  Save,
  ExternalLink,
  Plus
} from 'lucide-react';
import { 
  getStoredUser, 
  setStoredUser, 
  logoutStoredUser, 
  getStoredApplications, 
  getSavedJobIds, 
  toggleSaveJobId, 
  getStoredEnquiries 
} from '../utils/storage';
import { jobOpenings } from '../data/jobs';

const Dashboard = ({ onShowToast }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('applications'); // 'applications' | 'saved' | 'profile' | 'messages' | 'settings'
  const [applications, setApplications] = useState([]);
  const [savedJobIds, setSavedJobIds] = useState([]);
  const [enquiries, setEnquiries] = useState([]);

  // Profile Edit State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileForm, setProfileForm] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    location: '',
    title: '',
    bio: ''
  });

  useEffect(() => {
    const currentUser = getStoredUser();
    if (!currentUser) {
      navigate('/login');
      return;
    }
    setUser(currentUser);
    setProfileForm({
      fullName: currentUser.fullName || '',
      email: currentUser.email || '',
      whatsappNumber: currentUser.whatsappNumber || '',
      location: currentUser.location || '',
      title: currentUser.title || '',
      bio: currentUser.bio || ''
    });

    setApplications(getStoredApplications());
    setSavedJobIds(getSavedJobIds());
    setEnquiries(getStoredEnquiries());
  }, [navigate]);

  const handleLogout = () => {
    logoutStoredUser();
    if (onShowToast) onShowToast("You have been signed out from demo session.");
    navigate('/');
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const updated = {
      ...user,
      ...profileForm
    };
    setStoredUser(updated);
    setUser(updated);
    setIsEditingProfile(false);
    if (onShowToast) onShowToast("Profile details updated successfully.");
  };

  const handleRemoveSavedJob = (jobId) => {
    const updated = toggleSaveJobId(jobId);
    setSavedJobIds(updated);
    if (onShowToast) onShowToast("Job removed from saved bookmarks.");
  };

  if (!user) return null;

  const savedJobsList = jobOpenings.filter((job) => savedJobIds.includes(job.id));

  return (
    <div className="py-10 sm:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* User Hero Bar */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple p-[2px] shadow-lg shadow-brand-cyan/20 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-xl font-bold text-brand-cyan font-mono">
                {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Welcome, {user.fullName}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-mono">
                  Demo User
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {user.title || 'Full Stack Engineer'} • {user.email} • {user.location || 'Remote'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/careers"
              className="px-4 py-2.5 rounded-xl bg-brand-blue/20 hover:bg-brand-blue/30 border border-brand-blue/40 text-brand-cyan text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Browse Openings</span>
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 border border-slate-700 hover:border-rose-500/40 text-xs font-semibold flex items-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Dashboard Grid & Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Navigation Sidebar */}
          <div className="lg:col-span-3 space-y-2">
            <div className="glass-panel p-3 rounded-2xl border border-slate-800 space-y-1">
              {[
                { id: 'applications', label: 'My Applications', icon: FileText, count: applications.length },
                { id: 'saved', label: 'Saved Jobs', icon: Bookmark, count: savedJobIds.length },
                { id: 'profile', label: 'Profile', icon: User },
                { id: 'messages', label: 'Inquiries & Messages', icon: MessageSquare, count: enquiries.length },
                { id: 'settings', label: 'Account Settings', icon: Settings }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{tab.label}</span>
                    </div>
                    {tab.count !== undefined && (
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Helper Box */}
            <div className="p-4 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/20 text-xs text-slate-400 space-y-2">
              <span className="font-semibold text-brand-cyan block font-mono">Direct Communication</span>
              <p>For application follow-ups, message our engineering lead on WhatsApp (+91 8309582791).</p>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="lg:col-span-9">
            
            {/* 1. Tab: My Applications */}
            {activeTab === 'applications' && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Submitted Applications ({applications.length})
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Track the recruitment review milestones of your submitted applications.
                    </p>
                  </div>
                  <Link
                    to="/careers"
                    className="text-xs font-semibold text-brand-cyan hover:underline flex items-center gap-1"
                  >
                    <span>View More Roles</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {applications.length > 0 ? (
                  <div className="space-y-4">
                    {applications.map((app) => (
                      <div
                        key={app.id}
                        className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-brand-cyan/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-white text-base">
                              {app.jobTitle}
                            </h3>
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                              {app.status || 'Under Review'}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400">
                            Candidate: <span className="text-slate-200">{app.fullName}</span> • {app.email} • WhatsApp: {app.whatsappNumber}
                          </p>
                          <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono pt-1">
                            <span className="flex items-center gap-1">
                              <FileText className="w-3 h-3 text-brand-cyan" />
                              {app.resumeFileName || 'Resume Attached'}
                            </span>
                            <span>•</span>
                            <span>Applied on {new Date(app.submittedAt).toLocaleDateString()}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-300 font-mono">
                            Review Stage 1/3
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-3">
                    <FileText className="w-10 h-10 text-slate-600 mx-auto" />
                    <p className="text-slate-400 text-sm">You haven't submitted any job applications yet.</p>
                    <Link
                      to="/careers"
                      className="inline-block px-5 py-2.5 rounded-xl bg-brand-cyan text-slate-950 font-bold text-xs"
                    >
                      Explore Full Stack Roles
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* 2. Tab: Saved Jobs */}
            {activeTab === 'saved' && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Saved Developer Positions ({savedJobsList.length})
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Roles you have bookmarked for review and quick application.
                    </p>
                  </div>
                  <Link
                    to="/careers"
                    className="text-xs font-semibold text-brand-cyan hover:underline"
                  >
                    Browse All Roles
                  </Link>
                </div>

                {savedJobsList.length > 0 ? (
                  <div className="space-y-4">
                    {savedJobsList.map((job) => (
                      <div
                        key={job.id}
                        className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                            {job.badge}
                          </span>
                          <h3 className="font-bold text-white text-base">
                            {job.title}
                          </h3>
                          <p className="text-xs text-slate-400">
                            {job.experience} • {job.jobType} • {job.location}
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {job.skills.slice(0, 4).map((s) => (
                              <span key={s} className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 text-[10px] font-mono border border-slate-800">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <Link
                            to={`/careers/${job.id}`}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-semibold flex items-center gap-1.5"
                          >
                            <span>Apply</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => handleRemoveSavedJob(job.id)}
                            className="p-2 text-slate-500 hover:text-rose-400 rounded-xl hover:bg-slate-900 border border-transparent hover:border-rose-500/30 transition-colors"
                            title="Remove from saved"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-3">
                    <Bookmark className="w-10 h-10 text-slate-600 mx-auto" />
                    <p className="text-slate-400 text-sm">No saved jobs found in your bookmarks.</p>
                    <Link
                      to="/careers"
                      className="inline-block px-5 py-2.5 rounded-xl bg-brand-cyan text-slate-950 font-bold text-xs"
                    >
                      Browse Developer Jobs
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* 3. Tab: Profile */}
            {activeTab === 'profile' && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Candidate Profile
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Your identity and technical preferences stored in local browser state.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsEditingProfile(!isEditingProfile)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{isEditingProfile ? 'Cancel' : 'Edit Profile'}</span>
                  </button>
                </div>

                {isEditingProfile ? (
                  <form onSubmit={handleSaveProfile} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                        <input
                          type="text"
                          value={profileForm.fullName}
                          onChange={(e) => setProfileForm({ ...profileForm, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-cyan focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Email</label>
                        <input
                          type="email"
                          value={profileForm.email}
                          onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-cyan focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">WhatsApp Number</label>
                        <input
                          type="text"
                          value={profileForm.whatsappNumber}
                          onChange={(e) => setProfileForm({ ...profileForm, whatsappNumber: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-cyan focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">Title / Headline</label>
                        <input
                          type="text"
                          value={profileForm.title}
                          onChange={(e) => setProfileForm({ ...profileForm, title: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-cyan focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Bio & Experience Summary</label>
                      <textarea
                        rows="3"
                        value={profileForm.bio}
                        onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-brand-cyan focus:outline-none"
                      />
                    </div>
                    <div className="pt-2 flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold flex items-center gap-2"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Save Changes</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                        <span className="text-xs text-slate-400 block">Full Legal Name</span>
                        <span className="text-base font-bold text-white mt-1 block">{user.fullName}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                        <span className="text-xs text-slate-400 block">Verified Email</span>
                        <span className="text-base font-bold text-white mt-1 block">{user.email}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                        <span className="text-xs text-slate-400 block">WhatsApp Number</span>
                        <span className="text-base font-bold text-white mt-1 block">{user.whatsappNumber || '+91 8309582791'}</span>
                      </div>
                      <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                        <span className="text-xs text-slate-400 block">Role Title</span>
                        <span className="text-base font-bold text-white mt-1 block">{user.title || 'Full Stack Engineer'}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                      <span className="text-xs text-slate-400 block mb-1">Developer Bio</span>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {user.bio || 'Passionate developer crafting modern full-stack web and AI applications.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 4. Tab: Inquiries / Messages */}
            {activeTab === 'messages' && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Enquiries & Communications ({enquiries.length})
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Messages submitted via our contact portal.
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-brand-cyan hover:underline"
                  >
                    New Inquiry
                  </Link>
                </div>

                {enquiries.length > 0 ? (
                  <div className="space-y-4">
                    {enquiries.map((enq) => (
                      <div
                        key={enq.id}
                        className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-brand-cyan uppercase">
                            {enq.serviceRequired}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {new Date(enq.submittedAt).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-slate-200">
                          {enq.message}
                        </p>
                        <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                          Company: <span className="text-white">{enq.company || 'Direct'}</span> • WhatsApp: {enq.whatsappNumber}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-12 text-center space-y-3">
                    <MessageSquare className="w-10 h-10 text-slate-600 mx-auto" />
                    <p className="text-slate-400 text-sm">No contact inquiries recorded yet.</p>
                    <Link
                      to="/contact"
                      className="inline-block px-5 py-2.5 rounded-xl bg-brand-cyan text-slate-950 font-bold text-xs"
                    >
                      Contact Engineering Team
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* 5. Tab: Account Settings */}
            {activeTab === 'settings' && (
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-700/80 space-y-6">
                <div className="pb-4 border-b border-slate-800">
                  <h2 className="text-xl font-bold text-white">
                    Account & Session Settings
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Manage your client-side demonstration profile and session data.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                  <strong>Notice:</strong> This website runs in strict frontend-only demonstration mode. All accounts, applications, and saved preferences are safely contained within your local browser storage.
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div>
                      <h4 className="font-bold text-white text-sm">Reset Demo State</h4>
                      <p className="text-xs text-slate-400">Clear submitted applications and saved bookmarks in localStorage.</p>
                    </div>
                    <button
                      onClick={() => {
                        localStorage.clear();
                        if (onShowToast) onShowToast("Local demo storage reset.");
                        navigate('/');
                      }}
                      className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-semibold"
                    >
                      Clear Storage
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div>
                      <h4 className="font-bold text-white text-sm">Sign Out</h4>
                      <p className="text-xs text-slate-400">Terminate current demo candidate session.</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;

