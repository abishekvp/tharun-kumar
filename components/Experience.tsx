import React from 'react';
import { resumeData } from '../data/resume';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">Career Path</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Professional Experience</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm z-10 mt-1.5 md:mt-0"></div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-10">
                  <div className={`bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Briefcase className="w-4 h-4 text-accent" />
                      <h4 className="font-bold text-lg text-slate-800">{exp.role}</h4>
                    </div>
                    <p className="text-slate-600 font-medium mb-1">{exp.company}</p>
                    <div className={`flex items-center gap-2 text-sm text-slate-500 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                      {exp.duration && <span className="px-2 py-0.5 bg-slate-200 rounded text-xs text-slate-600">{exp.duration}</span>}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
                
                {/* Empty Side for Layout Balance */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};