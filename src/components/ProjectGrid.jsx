import React from 'react';

const ProjectGrid = ({ t, isDark, lang }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {t.projectsSection.items.map((project, index) => (
        <div 
          key={index} 
          className={`group flex flex-col rounded-3xl border overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl ${
            isDark 
              ? 'bg-[#121212] border-neutral-800 hover:border-red-500/50 hover:shadow-red-900/20' 
              : 'bg-white border-neutral-200 hover:border-red-500/50 hover:shadow-red-600/10'
          }`}
        >
          {/* Image Container */}
          <div className={`aspect-[4/3] relative overflow-hidden border-b ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
            <img 
              src={`/project${index + 1}.jpg`}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMzMzMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
              }}
            />
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

            {/* Visit Link - Updated to Red */}
            <a href="#" className="inline-flex items-center text-sm font-bold text-red-500 hover:text-red-400 transition-colors mt-auto">
              {lang === 'np' ? 'प्रत्यक्ष साइट हेर्नुहोस्' : 'Visit Live Site'} 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;