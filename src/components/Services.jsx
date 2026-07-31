import React from 'react';

const Services = ({ t, isDark }) => {
  return (
    <div className="space-y-20">
      
      {/* Services Grid */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.servicesSection.items.map((service, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group ${isDark ? 'bg-[#121212] border-neutral-800 hover:border-indigo-500' : 'bg-white border-neutral-200 shadow-sm hover:border-indigo-500 hover:shadow-lg'}`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${isDark ? 'bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white' : 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'}`}>
                {/* Dynamic Icon rendering based on index */}
                {idx === 0 ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                ) : idx === 1 ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                )}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Tag Cloud */}
      <div>
        <h3 className="text-2xl font-bold mb-8">{t.skillsSection.heading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Strategy & Management */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-6 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              Strategy & Management
            </h4>
            <div className="flex flex-wrap gap-3">
              {t.skillsSection.categories.strategy.map((skill, idx) => (
                <span 
                  key={idx} 
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors hover:border-indigo-500 ${isDark ? 'bg-[#121212] border-neutral-800 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-sm'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Tools & Platforms */}
          <div>
            <h4 className={`text-sm font-semibold uppercase tracking-wider mb-6 ${isDark ? 'text-neutral-500' : 'text-neutral-400'}`}>
              Tools & Platforms
            </h4>
            <div className="flex flex-wrap gap-3">
              {t.skillsSection.categories.tools.map((skill, idx) => (
                <span 
                  key={idx} 
                  className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-colors hover:border-indigo-500 ${isDark ? 'bg-[#121212] border-neutral-800 text-neutral-300' : 'bg-white border-neutral-200 text-neutral-700 shadow-sm'}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Services;