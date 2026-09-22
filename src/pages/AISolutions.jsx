import React, { useState } from 'react';
import { aiSolutions, aiAssistantKnowledge } from '../data/aiSolutions';
import { 
  Sparkles, 
  MessageSquareCode, 
  Mic, 
  FileSearch, 
  ScanFace, 
  TrendingUp, 
  Workflow, 
  FileText, 
  Sprout, 
  GraduationCap, 
  Bot, 
  Send, 
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  RotateCcw
} from 'lucide-react';

const iconMap = {
  MessageSquareCode: MessageSquareCode,
  Mic: Mic,
  FileSearch: FileSearch,
  ScanFace: ScanFace,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
  FileText: FileText,
  Workflow: Workflow,
  Sprout: Sprout,
  GraduationCap: GraduationCap
};

const quickPrompts = [
  "What services do you provide?",
  "What technologies do you use?",
  "Show me your projects.",
  "How can I contact QYVERON?",
  "What Full Stack jobs are available?"
];

const AISolutions = () => {
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'm1',
      sender: 'assistant',
      text: "Welcome to the QYVERON AI Interactive Showcase. This demo operates entirely on frontend simulated intelligence. Ask any question below or pick a suggested prompt!",
      time: 'Just now'
    }
  ]);

  const handleSendChat = (promptText) => {
    const text = (promptText || chatInput).trim();
    if (!text) return;

    const userMsg = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      const match = aiAssistantKnowledge.find((k) =>
        k.keywords.some((word) => lower.includes(word))
      );

      let reply = "";
      if (match) {
        reply = match.response;
      } else {
        reply = `Regarding "${text}": QYVERON Technologies develops applied AI solutions including Computer Vision, RAG semantic search, and predictive machine learning models coupled with React + Django full-stack systems.\n\nConnect with our engineering lead via WhatsApp at +91 8309582791 or derangulashivaprasad7@gmail.com for tailored development!`;
      }

      const botMsg = {
        id: `b-${Date.now()}`,
        sender: 'assistant',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="py-12 sm:py-20 relative z-10 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5" />
            <span>Applied Cognitive Systems</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 leading-[1.15]">
            Intelligence That Turns{' '}
            <span className="gradient-text">Data Into Action.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            Discover our 10 specialized artificial intelligence capabilities engineered to automate complex human decisions, interpret video and documents, and drive predictive operational agility.
          </p>
        </div>

        {/* 10 AI Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {aiSolutions.map((solution) => {
            const Icon = iconMap[solution.icon] || Sparkles;
            return (
              <div
                key={solution.id}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 hover:border-brand-cyan/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-300 flex items-center justify-center text-brand-cyan group-hover:scale-110 group-hover:bg-brand-cyan/15 group-hover:border-brand-cyan/40 transition-all mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-brand-cyan transition-colors mb-2">
                    {solution.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 light:border-slate-200">
                  <div className="space-y-1.5">
                    {solution.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Frontend AI Assistant Demo Section */}
        <section className="glass-panel rounded-3xl border border-brand-cyan/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Left Description */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive AI Simulator</span>
              </div>

              <h2 className="text-3xl font-extrabold text-white light:text-slate-900">
                QYVERON AI Assistant
              </h2>

              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Interact with our mock AI Chatbot engine directly in the browser. Powered by client-side semantic heuristics, it simulates how an enterprise QYVERON RAG assistant answers client inquiries about systems, tech stacks, and career openings.
              </p>

              {/* Sample Prompts List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Click a Sample Query:
                </span>
                <div className="flex flex-col gap-2">
                  {quickPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendChat(prompt)}
                      className="text-left py-2 px-3 rounded-xl bg-slate-900 hover:bg-brand-cyan/15 border border-slate-800 hover:border-brand-cyan/40 text-xs text-slate-300 hover:text-brand-cyan transition-colors flex items-center justify-between"
                    >
                      <span>{prompt}</span>
                      <ArrowRight className="w-3 h-3 text-slate-500" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] font-mono text-slate-400">
                Status: <strong className="text-brand-cyan">Frontend AI Demo</strong> (Zero external API dependencies)
              </div>
            </div>

            {/* Right Chat Terminal */}
            <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col h-[520px] shadow-2xl overflow-hidden">
              
              {/* Chat Window Top */}
              <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-900/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-mono font-bold text-white">QYVERON-AI-CORE // v2.4</span>
                </div>
                <button
                  onClick={() => setChatMessages([
                    {
                      id: `r-${Date.now()}`,
                      sender: 'assistant',
                      text: "Chat cleared. What would you like to explore next?",
                      time: 'Just now'
                    }
                  ])}
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
                  title="Clear Chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Message List */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5">
                {chatMessages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${
                      m.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-brand-blue text-white rounded-tr-none'
                          : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                      }`}
                    >
                      <div className="whitespace-pre-line">{m.text}</div>
                      <div
                        className={`text-[9px] mt-1 font-mono ${
                          m.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-500'
                        }`}
                      >
                        {m.time}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 text-xs w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    <span className="text-[11px] font-mono text-brand-cyan ml-1">Analyzing...</span>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="p-3 border-t border-slate-800 bg-slate-900/40">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendChat();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask QYVERON AI something..."
                    className="flex-1 py-2.5 px-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:border-brand-cyan focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!chatInput.trim() || isTyping}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-md disabled:opacity-40"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default AISolutions;

