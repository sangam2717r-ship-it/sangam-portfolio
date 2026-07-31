import React from 'react';

const ProjectGrid = ({ t, isDark }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {t.projects.map((project) => (
        <div 
          key={project.id}
          className={`rounded-2xl flex flex-col overflow-hidden border transition-all duration-300 hover:-translate-y-2 group ${isDark ? 'bg-[#121212] border-neutral-800 hover:border-indigo-500' : 'bg-white border-neutral-200 shadow-sm hover:border-indigo-500 hover:shadow-xl'}`}
        >
          {/* Image Container */}
          <div className={`h-56 w-full relative overflow-hidden border-b ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'}`}>
            <img 
              src={`/project${project.id}.jpg`} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback Text if Image is Missing */}
            <div className="absolute inset-0 hidden items-center justify-center text-sm font-medium text-neutral-500">
              Add <code className="ml-1 text-indigo-500">project{project.id}.jpg</code> to /public
            </div>
          </div>

          {/* Text Content */}
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              <span className="text-xs font-semibold tracking-wider text-indigo-500 uppercase mb-2 block">
                {project.category}
              </span>
              <h3 className={`text-xl font-bold mb-3 transition-colors ${isDark ? 'group-hover:text-indigo-400' : 'group-hover:text-indigo-600'}`}>
                {project.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {project.desc}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, index) => (
                  <span 
                    key={index}
                    className={`text-xs px-3 py-1 rounded-md border ${isDark ? 'bg-neutral-900 text-neutral-400 border-neutral-800' : 'bg-neutral-100 text-neutral-600 border-neutral-200'}`}
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {project.link !== '#' && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 hover:text-indigo-600 transition-colors"
                >
                  Visit Live Site &rarr;
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
