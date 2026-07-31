import React, { useState } from 'react';

const Navbar = ({ lang, setLang, theme, setTheme, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = theme === 'dark';

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 border-b backdrop-blur-md ${isDark ? 'bg-[#0a0a0a]/80 border-neutral-800' : 'bg-neutral-50/80 border-neutral-200'}`}>
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-wider hover:opacity-80 transition-opacity">
          SANGAM<span className="text-indigo-500">.GAIRE</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-indigo-500 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l pl-6 border-neutral-500/30">
            {/* Theme Toggle */}
            <button 
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className={`p-2 rounded-lg text-sm font-semibold border transition-colors cursor-pointer ${isDark ? 'bg-neutral-900 border-neutral-700 text-white hover:border-indigo-500' : 'bg-white border-neutral-300 text-neutral-800 hover:border-indigo-500'}`}
              title="Toggle Theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Language Toggle */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'np' : 'en')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold border transition-colors cursor-pointer ${isDark ? 'bg-neutral-900 border-neutral-700 text-white hover:border-indigo-500' : 'bg-white border-neutral-300 text-neutral-800 hover:border-indigo-500'}`}
            >
              {t.nav.toggleLang}
            </button>
          </div>
        </div>

        {/* Mobile Controls (Menu Toggle & Theme) */}
        <div className="flex items-center gap-3 md:hidden">
           <button 
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`p-2 rounded-lg text-sm font-semibold border transition-colors cursor-pointer ${isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-neutral-300 text-neutral-800'}`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border ${isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-neutral-300 text-neutral-800'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className={`md:hidden border-t ${isDark ? 'bg-[#0a0a0a] border-neutral-800' : 'bg-neutral-50 border-neutral-200'}`}>
          <div className="flex flex-col px-6 py-4 space-y-4 shadow-2xl">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors hover:text-indigo-500 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-500/30">
               <button 
                onClick={() => {
                  setLang(lang === 'en' ? 'np' : 'en');
                  setIsOpen(false);
                }}
                className={`w-full py-2 rounded-lg text-sm font-semibold border transition-colors cursor-pointer ${isDark ? 'bg-neutral-900 border-neutral-700 text-white' : 'bg-white border-neutral-300 text-neutral-800'}`}
              >
                Switch to {t.nav.toggleLang}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;