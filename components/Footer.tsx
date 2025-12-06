import React from 'react';
import { resumeData } from '../data/resume';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-8 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} {resumeData.personal.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with React, Tailwind & Gemini AI
        </p>
      </div>
    </footer>
  );
};