import React from 'react';
import { resumeData } from '../data/resume';
import { Mail, Phone, MapPin } from 'lucide-react';

export const PrintableResume: React.FC = () => {
  const { personal, skills, experience, education, projects } = resumeData;

  return (
    <div id="resume-print-area" className="bg-white w-[210mm] min-h-[297mm] mx-auto flex text-slate-900 leading-snug print:w-[210mm] print:h-auto">
      
      {/* Left Sidebar - Graphical & Personal Info */}
      <div className="w-[32%] bg-slate-100 border-r border-slate-200 p-5 flex flex-col gap-5 print:bg-slate-100 print:p-4 print:gap-3 print:h-full">
        
        {/* Photo Area - Passport Style */}
        {/* Standard Passport Size is roughly 35mm x 45mm - aspect ratio ~0.77 */}
        <div className="w-[35mm] h-[45mm] bg-slate-300 border-[3px] border-white shadow-sm overflow-hidden mb-2 mx-auto rounded-sm">
           {personal.photoUrl ? (
             <img 
               src={personal.photoUrl} 
               alt={personal.name}
               className="w-full h-full object-cover"
             />
           ) : (
             <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 text-[10px] text-center p-1">
               Photo
             </div>
           )}
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm">
          <h3 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-xs">Contact Info</h3>
          
          <div className="flex items-start gap-2">
            <Mail className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
            <span className="break-all text-xs">{personal.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-slate-700 shrink-0" />
            <span className="text-xs">{personal.phone}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-slate-700 shrink-0 mt-0.5" />
            <span className="text-[10px] leading-tight">{personal.address}</span>
          </div>
        </div>

        {/* Personal Details */}
        <div className="space-y-2">
          <h3 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-xs">Personal Details</h3>
          <div className="grid grid-cols-1 gap-1 text-xs text-slate-700">
            <p><span className="font-semibold">Father's Name:</span> {personal.details.fatherName}</p>
            <p><span className="font-semibold">DOB:</span> {personal.details.dob}</p>
            <p><span className="font-semibold">Gender:</span> {personal.details.gender}</p>
            <p><span className="font-semibold">Nationality:</span> {personal.details.nationality}</p>
            <p><span className="font-semibold">Marital Status:</span> {personal.details.maritalStatus}</p>
          </div>
        </div>

        {/* Passport Details */}
        {personal.details.passport && (
          <div className="space-y-2 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-1 mb-1 text-xs">Passport Details</h3>
            <div className="grid grid-cols-1 gap-1 text-xs text-slate-700">
              <p><span className="font-semibold">No:</span> {personal.details.passport.number}</p>
              <p><span className="font-semibold">DOI:</span> {personal.details.passport.issueDate}</p>
              <p><span className="font-semibold">DOE:</span> {personal.details.passport.expiryDate}</p>
              <p><span className="font-semibold">Place:</span> {personal.details.passport.placeOfIssue}</p>
            </div>
          </div>
        )}

        {/* Skills */}
        <div className="space-y-2">
          <h3 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-xs">Skills</h3>
          <div className="flex flex-wrap gap-1">
            {skills.flatMap(s => s.items).slice(0, 18).map((skill, idx) => (
              <span key={idx} className="bg-white border border-slate-300 px-1.5 py-0.5 rounded text-[10px] font-medium text-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
           <h3 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-xs">Education</h3>
           {education.map((edu, idx) => (
             <div key={idx} className="text-xs">
               <p className="font-bold text-slate-800 leading-tight">{edu.degree}</p>
               <p className="text-slate-600 leading-tight">{edu.institution}</p>
               <p className="text-slate-500 mt-0.5 font-medium">Score: {edu.score}</p>
             </div>
           ))}
        </div>

        {/* Languages */}
        <div>
          <h3 className="font-bold text-slate-900 uppercase tracking-wider border-b border-slate-300 pb-1 mb-2 text-xs">Languages</h3>
          <p className="text-xs text-slate-700">{personal.languages.join(', ')}</p>
        </div>
      </div>

      {/* Right Main Content */}
      <div className="w-[68%] p-6 pt-8 print:p-4 print:pt-4">
        {/* Header */}
        <div className="mb-6 border-b-2 border-slate-900 pb-4 print:mb-4 print:pb-2">
          <h1 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">{personal.name}</h1>
          <h2 className="text-lg text-sky-600 font-bold mt-1">{personal.title}</h2>
          <p className="text-xs text-slate-600 mt-3 text-justify leading-relaxed">{personal.summary}</p>
        </div>

        {/* Experience */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3 flex items-center tracking-wide">
            <span className="bg-slate-800 text-white px-2 py-0.5 mr-2 rounded-sm text-[10px]">EXPERIENCE</span>
            PROFESSIONAL EXPERIENCE
          </h3>
          
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-baseline">
                  <h4 className="font-bold text-sm text-slate-800">{exp.role}</h4>
                  <span className="text-[10px] font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-600 whitespace-nowrap border border-slate-200">{exp.period}</span>
                </div>
                <div className="flex justify-between items-baseline mb-1">
                   <p className="text-xs font-semibold text-sky-700">{exp.company}</p>
                   {exp.duration && <span className="text-[10px] text-slate-400">({exp.duration})</span>}
                </div>
                <p className="text-[11px] text-slate-600 leading-tight">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
           <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-1 mb-3 flex items-center tracking-wide">
            <span className="bg-slate-800 text-white px-2 py-0.5 mr-2 rounded-sm text-[10px]">PROJECTS</span>
            KEY PROJECTS
          </h3>

          <div className="space-y-4">
            {projects.map((proj, idx) => (
              <div key={idx} className="relative pl-3 border-l-2 border-slate-200">
                <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-sm text-slate-800">{proj.name} <span className="font-medium text-slate-500 text-xs">- {proj.client}</span></h4>
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide bg-slate-50 px-1 rounded">{proj.role}</span>
                </div>
                <p className="text-[10px] text-slate-500 mb-1 italic">{proj.description}</p>
                <ul className="list-disc list-outside ml-3 mt-1 space-y-0.5">
                  {proj.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-[10px] text-slate-700 leading-tight pl-1">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};