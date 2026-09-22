import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Cpu, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  User, 
  ArrowRight, 
  Layers, 
  Briefcase, 
  FolderKanban, 
  Sparkles, 
  PhoneCall,
  LayoutDashboard
} from 'lucide-react';
import { getStoredUser, getStoredTheme, setStoredTheme } from '../utils/storage';

const Navbar = ({ onOpenAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentTheme = getStoredTheme();
    setTheme(currentTheme);
    setUser(getStoredUser());

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setStoredTheme(next);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 dark:bg-slate-950/90 light:bg-white/90 backdrop-blur-md border-b border-slate-800/60 light:border-slate-200/80 shadow-lg shadow-black/10' 
        : 'bg-transparent border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan via-brand-electric to-brand-purple p-[1.5px] shadow-lg shadow-brand-cyan/20 group-hover:shadow-brand-cyan/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider font-mono text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors">
                QYVERON
              </span>
              <span className="text-[10px] tracking-widest uppercase text-slate-400 font-semibold -mt-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-brand-cyan bg-brand-cyan/10 font-semibold shadow-inner'
                    : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2.5 rounded-xl border border-slate-700/60 light:border-slate-300 bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 hover:text-brand-cyan hover:border-brand-cyan/50 transition-all duration-200"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Auth / Dashboard Button */}
            {user ? (
              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 light:bg-slate-100 border border-slate-700/70 light:border-slate-300 text-sm font-medium text-slate-200 light:text-slate-800 hover:border-brand-cyan/50 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple flex items-center justify-center text-xs font-bold text-white">
                  {user.fullName ? user.fullName[0].toUpperCase() : 'U'}
                </div>
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 light:text-slate-700 hover:text-white light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-100 transition-colors"
              >
                Login
              </Link>
            )}

            {/* Get Started Button */}
            <Link
              to="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white text-sm font-semibold shadow-lg shadow-brand-blue/25 hover:shadow-brand-cyan/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2 rounded-lg border border-slate-700/50 bg-slate-900/50 text-slate-300 light:text-slate-700"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/70 text-slate-300 hover:text-white hover:border-brand-cyan/40"
              aria-label="Open mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 light:bg-white/95 backdrop-blur-xl px-5 pt-4 pb-6 space-y-3 animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${
                  isActive(link.path)
                    ? 'text-brand-cyan bg-brand-cyan/10 font-semibold'
                    : 'text-slate-300 light:text-slate-700 hover:bg-white/5 light:hover:bg-slate-100'
                }`}
              >
                <span>{link.name}</span>
                {isActive(link.path) && <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex flex-col gap-2.5">
            {user ? (
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-700/60 light:border-slate-300 text-center font-medium text-slate-200 light:text-slate-900 flex items-center justify-center gap-2"
              >
                <LayoutDashboard className="w-4 h-4 text-brand-cyan" />
                <span>Go to Dashboard ({user.fullName.split(' ')[0]})</span>
              </Link>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-4 rounded-xl border border-slate-700 text-center text-sm font-medium text-slate-200 light:text-slate-800 hover:bg-white/5"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-4 rounded-xl border border-brand-cyan/40 bg-brand-cyan/10 text-center text-sm font-medium text-brand-cyan"
                >
                  Create Account
                </Link>
              </div>
            )}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-center font-semibold text-white shadow-md shadow-brand-blue/30 flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

