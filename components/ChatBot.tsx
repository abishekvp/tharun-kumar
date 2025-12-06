import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles, BrainCircuit } from 'lucide-react';
import { sendMessageToGemini, ChatMessage } from '../services/geminiService';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Tharun's AI assistant. Ask me anything about his experience with CMMS, SAP, or his projects." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isThinkingMode, setIsThinkingMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Create a history array excluding the last user message we just added to state 
      // (it will be added to the prompt logic inside service if we used chat history properly, 
      // but here we just pass the history as context).
      const responseText = await sendMessageToGemini(userMessage.text, messages, isThinkingMode);
      const botMessage: ChatMessage = { role: 'model', text: responseText, isThinking: isThinkingMode };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-accent text-white p-4 rounded-full shadow-2xl hover:bg-sky-600 transition-all duration-300 z-40 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-full max-w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-full">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Assistant</h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-slate-300">Online</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Controls (Thinking Mode) */}
        <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
           <div className="flex items-center gap-2">
             <BrainCircuit className={`w-4 h-4 ${isThinkingMode ? 'text-purple-600' : 'text-slate-400'}`} />
             <span className="text-xs font-medium text-slate-600">Deep Think</span>
           </div>
           <button 
             onClick={() => setIsThinkingMode(!isThinkingMode)}
             className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors focus:outline-none ${isThinkingMode ? 'bg-purple-600' : 'bg-slate-300'}`}
           >
             <span className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${isThinkingMode ? 'translate-x-5' : 'translate-x-1'}`} />
           </button>
        </div>

        {/* Messages */}
        <div className="h-[400px] overflow-y-auto p-4 bg-slate-50 space-y-4 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-accent text-white rounded-tr-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
              }`}>
                {msg.isThinking && msg.role === 'model' && (
                    <div className="flex items-center gap-1 mb-2 text-xs text-purple-600 font-medium">
                        <Sparkles className="w-3 h-3" /> Thought deeply
                    </div>
                )}
                <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm flex items-center gap-2">
                 <Loader2 className="w-4 h-4 animate-spin text-accent" />
                 <span className="text-xs text-slate-500">
                    {isThinkingMode ? 'Thinking deeply...' : 'Typing...'}
                 </span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 bg-white rounded-b-2xl border-t border-slate-100">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isThinkingMode ? "Ask a complex question..." : "Ask about skills, projects..."}
              className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-sm"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 p-2 bg-accent text-white rounded-lg hover:bg-sky-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};