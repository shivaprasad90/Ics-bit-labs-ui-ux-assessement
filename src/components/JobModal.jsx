import React, { useState } from 'react';
import { 
  X, 
  Briefcase, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  UploadCloud, 
  FileText, 
  Send,
  AlertCircle
} from 'lucide-react';
import { isValidEmail, isValidPhoneOrWhatsApp, isValidUrl, validateRequired } from '../utils/validation';
import { saveJobApplication, getStoredUser } from '../utils/storage';

const JobModal = ({ job, onClose, onApplicationSuccess }) => {
  if (!job) return null;

  const currentUser = getStoredUser();
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'apply'
  
  // Application Form State
  const [formData, setFormData] = useState({
    fullName: currentUser?.fullName || '',
    email: currentUser?.email || '',
    whatsappNumber: currentUser?.whatsappNumber || '',
    currentLocation: currentUser?.location || '',
    experienceLevel: job.experience,
    technicalSkills: currentUser?.skills ? currentUser.skills.join(', ') : job.skills.join(', '),
    githubUrl: '',
    linkedinUrl: '',
    coverMessage: '',
    resumeFileName: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, resumeFileName: file.name }));
      if (errors.resumeFileName) {
        setErrors(prev => ({ ...prev, resumeFileName: null }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!validateRequired(formData.fullName)) newErrors.fullName = 'Full Name is required.';
    if (!isValidEmail(formData.email)) newErrors.email = 'Valid email address is required.';
    if (!isValidPhoneOrWhatsApp(formData.whatsappNumber)) newErrors.whatsappNumber = 'Valid WhatsApp number is required (10-15 digits).';
    if (!validateRequired(formData.currentLocation)) newErrors.currentLocation = 'Current Location is required.';
    if (!validateRequired(formData.technicalSkills)) newErrors.technicalSkills = 'Please specify your technical skills.';
    if (formData.githubUrl && !isValidUrl(formData.githubUrl)) newErrors.githubUrl = 'Please enter a valid URL (http/https).';
    if (formData.linkedinUrl && !isValidUrl(formData.linkedinUrl)) newErrors.linkedinUrl = 'Please enter a valid URL (http/https).';
    if (!formData.resumeFileName) newErrors.resumeFileName = 'Please upload a resume file (PDF/DOCX simulated).';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      saveJobApplication({
        jobId: job.id,
        jobTitle: job.title,
        ...formData
      });
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      if (onApplicationSuccess) {
        onApplicationSuccess(job.title);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-8">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div>
            <span className="text-xs font-mono font-semibold uppercase text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
              {job.badge}
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-2">
              {job.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-950/30 px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-brand-cyan text-brand-cyan'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Role Overview & Requirements
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'apply'
                ? 'border-brand-cyan text-brand-cyan'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Apply for this Role</span>
            <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {activeTab === 'overview' ? (
            <div className="space-y-6">
              
              {/* Meta Stats */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center">
                <div>
                  <div className="text-xs text-slate-400">Experience</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">{job.experience}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Job Type</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">{job.jobType}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">{job.location}</div>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Position Brief
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {job.summary}
                </p>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Core Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-brand-blue/15 border border-brand-blue/30 text-brand-cyan text-xs font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Qualifications & Requirements
                </h4>
                <ul className="space-y-2">
                  {job.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You Will Learn */}
              <div className="p-4 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/20">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-cyan mb-2.5 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>What You Will Learn At QYVERON</span>
                </h4>
                <ul className="space-y-1.5">
                  {job.whatYouWillLearn.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Apply CTA */}
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setActiveTab('apply')}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-brand-blue/30 transition-all"
                >
                  Proceed to Application
                </button>
              </div>

            </div>
          ) : (
            <div>
              {submittedSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Application submitted successfully.
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Your candidate profile for <strong className="text-white">{job.title}</strong> has been logged in local demo storage. You can view its real-time review status anytime in your Dashboard.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-3">
                    <button
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Frontend Demo Application: Applications persist directly to your browser's localStorage.</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Shiva Prasad"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 text-sm focus:border-brand-cyan focus:outline-none`}
                      />
                      {errors.fullName && <p className="text-rose-400 text-[11px] mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.email ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 text-sm focus:border-brand-cyan focus:outline-none`}
                      />
                      {errors.email && <p className="text-rose-400 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        WhatsApp Number <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleInputChange}
                        placeholder="+91 8309582791"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.whatsappNumber ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 text-sm focus:border-brand-cyan focus:outline-none`}
                      />
                      {errors.whatsappNumber && <p className="text-rose-400 text-[11px] mt-1">{errors.whatsappNumber}</p>}
                    </div>

                    {/* Current Location */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Current Location <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="currentLocation"
                        value={formData.currentLocation}
                        onChange={handleInputChange}
                        placeholder="e.g. Hyderabad, India"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.currentLocation ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 text-sm focus:border-brand-cyan focus:outline-none`}
                      />
                      {errors.currentLocation && <p className="text-rose-400 text-[11px] mt-1">{errors.currentLocation}</p>}
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Experience Level
                      </label>
                      <input
                        type="text"
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-brand-cyan focus:outline-none"
                      />
                    </div>

                    {/* Technical Skills */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Technical Skills <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="technicalSkills"
                        value={formData.technicalSkills}
                        onChange={handleInputChange}
                        placeholder="React, Python, Django, MySQL, Git"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.technicalSkills ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 text-sm focus:border-brand-cyan focus:outline-none`}
                      />
                      {errors.technicalSkills && <p className="text-rose-400 text-[11px] mt-1">{errors.technicalSkills}</p>}
                    </div>

                    {/* GitHub URL */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        GitHub Profile URL
                      </label>
                      <input
                        type="url"
                        name="githubUrl"
                        value={formData.githubUrl}
                        onChange={handleInputChange}
                        placeholder="https://github.com/username"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.githubUrl ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 text-sm focus:border-brand-cyan focus:outline-none`}
                      />
                      {errors.githubUrl && <p className="text-rose-400 text-[11px] mt-1">{errors.githubUrl}</p>}
                    </div>

                    {/* LinkedIn URL */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        name="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/username"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border ${
                          errors.linkedinUrl ? 'border-rose-500' : 'border-slate-800'
                        } text-slate-200 text-sm focus:border-brand-cyan focus:outline-none`}
                      />
                      {errors.linkedinUrl && <p className="text-rose-400 text-[11px] mt-1">{errors.linkedinUrl}</p>}
                    </div>
                  </div>

                  {/* Resume Upload Box */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Resume Upload (PDF / DOCX) <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative border-2 border-dashed border-slate-700 hover:border-brand-cyan/60 rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-950/60">
                      <input
                        type="file"
                        accept=".pdf,.docx,.doc"
                        onChange={handleFileUpload}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      {formData.resumeFileName ? (
                        <div className="flex items-center justify-center gap-2 text-brand-cyan text-sm font-medium">
                          <FileText className="w-5 h-5" />
                          <span>{formData.resumeFileName}</span>
                          <span className="text-xs text-slate-400">(Click to change)</span>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <UploadCloud className="w-7 h-7 text-slate-400 mx-auto" />
                          <div className="text-xs text-slate-300">
                            Click or drag resume file to upload
                          </div>
                          <div className="text-[10px] text-slate-500">
                            PDF, DOCX up to 10MB (Simulated client attachment)
                          </div>
                        </div>
                      )}
                    </div>
                    {errors.resumeFileName && <p className="text-rose-400 text-[11px] mt-1">{errors.resumeFileName}</p>}
                  </div>

                  {/* Cover Message */}
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Cover Message (Optional)
                    </label>
                    <textarea
                      name="coverMessage"
                      rows="3"
                      value={formData.coverMessage}
                      onChange={handleInputChange}
                      placeholder="Tell us about your full stack projects, favorite tech, or what drives you..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-sm focus:border-brand-cyan focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan hover:from-blue-600 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Application...</span>
                      ) : (
                        <>
                          <span>Apply Now</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default JobModal;

