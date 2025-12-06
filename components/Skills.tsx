import React from 'react';
import { resumeData } from '../data/resume';
import { Cpu, PenTool, Users } from 'lucide-react';

export const Skills: React.FC = () => {
  const icons = [Cpu, PenTool, Users];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {resumeData.skills.map((skillGroup, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-accent">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-800">{skillGroup.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};