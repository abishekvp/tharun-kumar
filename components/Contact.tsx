import React from 'react';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const { personal } = resumeData;

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-accent font-semibold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h3>
            <p className="text-slate-400 text-lg mb-8">
              I am currently open to new opportunities in CMMS Engineering and Material Cataloging. 
              Feel free to reach out for collaborations or job openings.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-lg font-medium hover:text-accent transition-colors">{personal.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Phone</p>
                  <a href={`tel:${personal.phone}`} className="text-lg font-medium hover:text-accent transition-colors">{personal.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-800 rounded-lg text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="text-lg font-medium">{personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Job Opportunity" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Hi Tharun, I'd like to discuss..."></textarea>
              </div>
              <button type="button" className="w-full bg-accent hover:bg-sky-600 text-white font-bold py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};