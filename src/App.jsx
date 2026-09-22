import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIBackground from './components/AIBackground';
import AIChatbotModal from './components/AIChatbotModal';
import Toast from './components/Toast';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import AISolutions from './pages/AISolutions';
import Careers from './pages/Careers';
import JobDetails from './pages/JobDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Applications from './pages/Applications';
import Contact from './pages/Contact';

import { getStoredTheme, setStoredTheme } from './utils/storage';
import { Bot, Sparkles } from 'lucide-react';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Initialize theme on initial load
  useEffect(() => {
    const currentTheme = getStoredTheme();
    setStoredTheme(currentTheme);
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-brand-cyan selection:text-slate-950">
      <ScrollToTop />
      
      {/* Animated AI Canvas Background */}
      <AIBackground />

      {/* Main Sticky Navbar */}
      <Navbar onOpenAuth={() => {}} />

      {/* Page Content Viewport */}
      <main className="flex-1 relative z-10">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                onOpenAIDemo={() => setIsAIChatOpen(true)}
                onSelectService={() => {}}
                onSelectProject={() => {}}
              />
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ai-solutions" element={<AISolutions />} />
          <Route path="/careers" element={<Careers onShowToast={showToast} />} />
          <Route path="/careers/:jobId" element={<JobDetails onShowToast={showToast} />} />
          <Route path="/login" element={<Login onShowToast={showToast} />} />
          <Route path="/register" element={<Register onShowToast={showToast} />} />
          <Route path="/dashboard" element={<Dashboard onShowToast={showToast} />} />
          <Route path="/profile" element={<Profile onShowToast={showToast} />} />
          <Route path="/applications" element={<Applications onShowToast={showToast} />} />
          <Route path="/contact" element={<Contact onShowToast={showToast} />} />
          <Route path="*" element={<Home onOpenAIDemo={() => setIsAIChatOpen(true)} />} />
        </Routes>
      </main>

      {/* Modern Enterprise Footer */}
      <Footer />

      {/* Floating AI Assistant Demo Launcher */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsAIChatOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white border border-brand-cyan/50 hover:border-brand-cyan shadow-xl shadow-brand-cyan/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          title="Open QYVERON AI Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>
          <span className="text-xs font-mono font-bold tracking-wide">
            AI Assistant Demo
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-mono bg-brand-cyan/20 text-brand-cyan">
            Frontend
          </span>
        </button>
      </div>

      {/* Global Interactive AI Assistant Chatbot Modal */}
      <AIChatbotModal 
        isOpen={isAIChatOpen} 
        onClose={() => setIsAIChatOpen(false)} 
      />

      {/* Global Toast Notifications */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

