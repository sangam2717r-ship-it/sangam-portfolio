import React from 'react';

const ProjectGrid = ({ t, isDark, lang }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {t.projects.map((project, index) => (
        <div 
          key={index} 
          className={`group flex flex-col rounded-3xl border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl ${
            isDark 
              ? 'bg-[#121212] border-neutral-800 hover:border-red-500/50 hover:shadow-red-900/20' 
              : 'bg-white border-neutral-200 hover:border-red-500/50 hover:shadow-red-600/10'
          }`}
        >
          {/* Image Container - Browser Mockup Style */}
          <div className={`p-4 pb-2 border-b ${isDark ? 'border-neutral-800 bg-neutral-900' : 'border-neutral-200 bg-neutral-100'}`}>
            {/* Fake browser dots */}
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            {/* The screenshot with rounded corners, showing 100% of the top title */}
            <div className="overflow-hidden rounded-xl border border-neutral-700/30 shadow-inner">
              <img 
                src={`/project${index + 1}.jpg`}
                alt={project.title}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-red-600 text-sm font-bold tracking-wider mb-2 uppercase">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className={`text-base leading-relaxed mb-6 flex-grow ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
              {project.desc}
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className={`px-3 py-1 text-xs font-semibold rounded-full border ${
                    isDark 
                      ? 'bg-neutral-900 border-neutral-700 text-neutral-300' 
                      : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Visit Link - Conditionally Rendered */}
            {project.link && project.link !== "#" && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-bold text-red-500 hover:text-red-400 transition-colors mt-auto"
              >
                {lang === 'np' ? 'प्रत्यक्ष साइट हेर्नुहोस्' : 'Visit Live Site'} 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;