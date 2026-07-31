import React from 'react';

const Timeline = ({ t, isDark }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      
      {/* Experience Column */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-red-600">
             {/* Briefcase Icon */}
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
             </svg>
          </span>
          {t.experienceSection.heading}
        </h3>
        
        <div className={`space-y-10 border-l-2 ml-3 ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
          {t.experienceSection.roles.map((role, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Dot */}
              <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-red-600 ring-4 transition-transform group-hover:scale-125 ${isDark ? 'ring-[#0a0a0a]' : 'ring-neutral-50'}`}></span>
              
              {/* Content */}
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isDark ? 'bg-red-600/10 text-indigo-400' : 'bg-indigo-100 text-red-700'}`}>
                {role.period}
              </span>
              <h4 className="text-xl font-bold mt-4 mb-1">{role.title}</h4>
              <p className={`text-sm font-medium mb-3 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {role.org}
              </p>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Column */}
      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="text-red-600">
            {/* Graduation Cap Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6" />
            </svg>
          </span>
          {t.educationSection.heading}
        </h3>
        
        <div className={`space-y-10 border-l-2 ml-3 ${isDark ? 'border-neutral-800' : 'border-neutral-200'}`}>
          {t.educationSection.items.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Dot */}
              <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-red-600 ring-4 transition-transform group-hover:scale-125 ${isDark ? 'ring-[#0a0a0a]' : 'ring-neutral-50'}`}></span>
              
              {/* Content */}
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${isDark ? 'bg-red-600/10 text-indigo-400' : 'bg-indigo-100 text-red-700'}`}>
                {item.period}
              </span>
              <h4 className="text-xl font-bold mt-4 mb-1">{item.degree}</h4>
              <p className={`text-sm font-medium ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Timeline;