// Storage keys for Frontend-Only Demo
const KEYS = {
  USER: 'qyveron_auth_user',
  THEME: 'qyveron_app_theme',
  SAVED_JOBS: 'qyveron_saved_jobs',
  APPLICATIONS: 'qyveron_job_applications',
  ENQUIRIES: 'qyveron_contact_enquiries',
};

// Seed demo user for immediate review testing
const DEFAULT_DEMO_USER = {
  id: 'demo-user-001',
  fullName: 'Shiva Prasad',
  email: 'demo@qyveron.com',
  whatsappNumber: '+91 8309582791',
  location: 'Hyderabad, India',
  title: 'Full Stack Engineer',
  bio: 'Passionate full-stack developer focusing on React, Python, and AI-assisted workflows.',
  skills: ['React.js', 'JavaScript', 'Python', 'Django', 'MySQL', 'Tailwind CSS', 'Git'],
  createdAt: '2026-01-15T10:00:00Z',
  isDemoAccount: true
};

// User / Authentication Simulation
export const getStoredUser = () => {
  try {
    const raw = localStorage.getItem(KEYS.USER);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const setStoredUser = (user) => {
  try {
    if (!user) {
      localStorage.removeItem(KEYS.USER);
    } else {
      localStorage.setItem(KEYS.USER, JSON.stringify(user));
    }
  } catch (err) {
    console.warn("Error storing user in localStorage", err);
  }
};

export const logoutStoredUser = () => {
  try {
    localStorage.removeItem(KEYS.USER);
  } catch (err) {
    console.warn("Error logging out", err);
  }
};

export const getDemoCredentials = () => ({
  email: DEFAULT_DEMO_USER.email,
  password: 'password123',
  user: DEFAULT_DEMO_USER
});

// Theme Management
export const getStoredTheme = () => {
  try {
    const theme = localStorage.getItem(KEYS.THEME);
    return theme === 'light' ? 'light' : 'dark'; // Default is dark
  } catch {
    return 'dark';
  }
};

export const setStoredTheme = (theme) => {
  try {
    localStorage.setItem(KEYS.THEME, theme);
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  } catch (err) {
    console.warn("Error setting theme", err);
  }
};

// Saved Jobs Management
export const getSavedJobIds = () => {
  try {
    const raw = localStorage.getItem(KEYS.SAVED_JOBS);
    return raw ? JSON.parse(raw) : ['junior-full-stack-developer'];
  } catch {
    return [];
  }
};

export const toggleSaveJobId = (jobId) => {
  const current = getSavedJobIds();
  let updated;
  if (current.includes(jobId)) {
    updated = current.filter(id => id !== jobId);
  } else {
    updated = [...current, jobId];
  }
  try {
    localStorage.setItem(KEYS.SAVED_JOBS, JSON.stringify(updated));
  } catch (err) {
    console.warn("Error saving job", err);
  }
  return updated;
};

// Submitted Job Applications Management
export const getStoredApplications = () => {
  try {
    const raw = localStorage.getItem(KEYS.APPLICATIONS);
    if (raw) return JSON.parse(raw);
    
    // Seed sample initial application for realistic demo feel
    const seed = [
      {
        id: 'app-seed-1',
        jobId: 'junior-full-stack-developer',
        jobTitle: 'Junior Full Stack Developer',
        fullName: 'Shiva Prasad',
        email: 'derangulashivaprasad7@gmail.com',
        whatsappNumber: '+91 8309582791',
        location: 'Hyderabad, India',
        experienceLevel: '0–1 years',
        technicalSkills: 'React, Python, Django, MySQL, JavaScript, HTML, CSS',
        githubUrl: 'https://github.com/shivaprasad90',
        linkedinUrl: 'https://linkedin.com',
        resumeFileName: 'Shiva_Prasad_FullStack_Resume.pdf',
        coverMessage: 'Enthusiastic about joining QYVERON Technologies to engineer scalable web and AI applications.',
        submittedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        status: 'Under Review'
      }
    ];
    localStorage.setItem(KEYS.APPLICATIONS, JSON.stringify(seed));
    return seed;
  } catch {
    return [];
  }
};

export const saveJobApplication = (applicationData) => {
  const current = getStoredApplications();
  const newApp = {
    ...applicationData,
    id: `app-${Date.now()}`,
    submittedAt: new Date().toISOString(),
    status: 'Submitted'
  };
  const updated = [newApp, ...current];
  try {
    localStorage.setItem(KEYS.APPLICATIONS, JSON.stringify(updated));
  } catch (err) {
    console.warn("Error saving application", err);
  }
  return newApp;
};

// Contact Enquiries
export const getStoredEnquiries = () => {
  try {
    const raw = localStorage.getItem(KEYS.ENQUIRIES);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveContactEnquiry = (enquiryData) => {
  const current = getStoredEnquiries();
  const newEnquiry = {
    ...enquiryData,
    id: `enq-${Date.now()}`,
    submittedAt: new Date().toISOString(),
    status: 'Logged'
  };
  const updated = [newEnquiry, ...current];
  try {
    localStorage.setItem(KEYS.ENQUIRIES, JSON.stringify(updated));
  } catch (err) {
    console.warn("Error saving enquiry", err);
  }
  return newEnquiry;
};

