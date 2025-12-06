import React from 'react';
import { PrintableResume } from './components/PrintableResume';
import { Download, Printer } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-8 print:bg-white print:py-0 print:block">
      
      {/* Floating Action Button - Hidden on Print */}
      <div className="fixed bottom-8 right-8 flex gap-4 z-50 print:hidden">
        <button 
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-xl hover:bg-slate-800 transition-all hover:scale-105 font-medium"
        >
          <Printer className="w-5 h-5" />
          Print / Save as PDF
        </button>
      </div>

      {/* Document Viewer Container */}
      <div className="print:w-full print:h-full">
        <PrintableResume />
      </div>

      {/* Instructions Footer - Hidden on Print */}
      <div className="mt-8 text-slate-500 text-sm print:hidden">
        <p>Preview Mode • Use the button to save as PDF</p>
      </div>

    </div>
  );
}

export default App;