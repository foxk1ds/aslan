import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Search, 
  BookOpen, 
  FileQuestion, 
  BarChart3, 
  FolderLock, 
  HelpCircle,
  Clock
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Types', path: '/types' },
    { name: 'Causes', path: '/causes' },
    { name: 'Case Files', path: '/case-files' },
    { name: 'Statistics', path: '/statistics' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Quiz', path: '/quiz' },
    { name: 'My Opinion', path: '/opinion' },
    { name: 'Sources', path: '/sources' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#0a0c10]/95 dark:bg-[#0a0c10]/95 light:bg-white/95 backdrop-blur-md border-b border-zinc-800 dark:border-zinc-800/80 light:border-zinc-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-10 h-10 rounded-lg bg-red-950/80 border border-red-700/60 flex items-center justify-center text-red-500 shadow-[0_0_15px_rgba(220,38,38,0.3)] group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all">
              <ShieldAlert className="w-5 h-5 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
            </div>
            <div>
              <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-white dark:text-white light:text-zinc-900 group-hover:text-red-400 transition-colors">
                CRIME <span className="text-red-500 font-sans font-light">&</span> SOCIETY
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase -mt-1">
                Investigation Archive
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-red-950/60 text-red-400 border border-red-700/50 shadow-sm font-semibold'
                      : 'text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-zinc-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action Icons (Dark/Light Toggle + Hamburger) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-amber-400 transition-colors"
              aria-label="Toggle Dark/Light Mode"
              title="Toggle Dark / Light Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-700" />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e14] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="font-mono text-[11px] text-zinc-500 uppercase px-2 mb-2 tracking-widest">
            Investigative Sections
          </div>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-xs font-mono tracking-wider transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-red-950 text-red-400 border border-red-800/80 font-bold'
                      : 'bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-[10px] text-zinc-600">›</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
