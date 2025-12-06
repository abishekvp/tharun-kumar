import React from 'react';
import { resumeData } from '../data/resume';
import { MapPin, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Key Projects</h3>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A selection of major industrial projects contributed to, showcasing expertise in material cataloging and CMMS implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="h-2 bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-xl text-slate-800 group-hover:text-accent transition-colors">{project.name}</h4>
                    <p className="text-sm text-slate-500 font-medium mt-1">{project.client}</p>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                    {project.role}
                  </span>
                </div>
                
                <div className="flex items-center text-xs text-slate-400 mb-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  {project.location}
                </div>

                <p className="text-slate-600 text-sm mb-6 min-h-[3rem]">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Key Responsibilities:</h5>
                  <ul className="space-y-2">
                    {project.responsibilities.slice(0, 3).map((resp, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-500">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};