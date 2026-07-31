import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Services from './components/Services';
import ProjectGrid from './components/ProjectGrid';
import Contact from './components/Contact';
import { content } from './portfolioData';

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const t = content[lang];
  const isDark = theme === 'dark';

  // Typewriter Effect State
  const [typedText, setTypedText] = useState('');
  
  // Combine greeting and name for the typewriter effect
  const fullText = `${t.hero.greeting} ${t.hero.name}`;

  useEffect(() => {
    setTypedText(''); // Reset on language change
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex + 1));
      currentIndex++;
      
      if (currentIndex >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed

    return () => clearInterval(typingInterval);
  }, [lang, fullText]);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${isDark ? 'bg-[#0a0a0a] text-gray-100' : 'bg-neutral-50 text-neutral-900'}`}>
      
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} t={t} />
      
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 max-w-7xl mx-auto pt-24 pb-12 gap-12">
        <div className="flex-1">
          {/* Typewriter Header */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight min-h-[120px] md:min-h-[160px]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
              {typedText}
            </span>
            <span className="animate-pulse text-red-600">|</span>
          </h1>
          
          <h2 className={`text-2xl md:text-3xl font-medium mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.hero.title}
          </h2>
          <p className={`text-lg max-w-xl leading-relaxed mb-10 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg shadow-red-600/20"
            >
              {t.hero.viewWork}
            </a>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center">
          <div className={`w-64 h-80 md:w-72 md:h-96 rounded-2xl border-2 overflow-hidden relative shadow-2xl ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-300 bg-neutral-100'}`}>
            <img 
              src="/profile.jpg" 
              alt="Sangam Gaire" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="absolute inset-0 hidden items-center justify-center p-6 text-center text-sm text-neutral-500">
              Drop your photo as <code className="text-red-400 ml-1">profile.jpg</code> inside <code className="text-red-400 ml-1">public/</code>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 max-w-7xl mx-auto py-20 scroll-mt-24">
        <div className={`p-8 md:p-12 rounded-3xl border ${isDark ? 'bg-[#121212] border-neutral-800' : 'bg-white border-neutral-200 shadow-sm'}`}>
          <h2 className="text-3xl font-bold mb-6">{t.about.heading}</h2>
          <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {t.about.p1}
          </p>
          <p className={`text-lg leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
            {t.about.p2}
          </p>
        </div>
      </section>

     {/* Experience Section */}
      <section id="experience" className="px-8 max-w-7xl mx-auto py-20 scroll-mt-24">
        <Timeline t={t} isDark={isDark} />
      </section>

     {/* Services Section */}
      <section id="services" className="px-8 max-w-7xl mx-auto py-20 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-12">{t.servicesSection.heading}</h2>
        <Services t={t} isDark={isDark} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            {t.projectsSection.heading}
          </h2>
          <p className={`text-lg ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            {t.projectsSection.subtitle}
          </p>
        </div>
        
        <ProjectGrid t={t} isDark={isDark} /> 
      </section>

      {/* Contact Section */}
      <section id="contact" className={`pt-20 px-8 max-w-7xl mx-auto scroll-mt-24 border-t mt-12 ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
        <Contact t={t} isDark={isDark} />
      </section>

    </div>
  );
}

export default App;