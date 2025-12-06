import React from 'react';
import { resumeData } from '../data/resume';
import { Download, Mail, MapPin, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal } = resumeData;

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-slate-300/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">
                Professional Portfolio
              </h2>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Hello, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">
                  {personal.name}
                </span>
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-slate-600 font-light">
                {personal.title}
              </p>
            </div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              {personal.summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-white bg-accent hover:bg-sky-600 rounded-lg shadow-lg hover:shadow-accent/30 transition-all duration-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
              <button 
                className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg shadow-sm transition-all duration-300"
                onClick={() => window.print()}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-500 pt-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                {personal.location}
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                {personal.phone}
              </div>
            </div>
          </div>

          {/* Image / Visual Side */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
               {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-300 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-slate-200"></div>
              
              {/* Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                 {/* Placeholder for candidate photo - using a professional placeholder */}
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt={personal.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Experience</p>
                    <p className="font-bold text-slate-800">2.5+ Years</p>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 bottom-32 bg-white p-4 rounded-xl shadow-lg border border-slate-100 animate-pulse duration-[4000ms]">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Expertise</p>
                    <p className="font-bold text-slate-800">CMMS & BOM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};