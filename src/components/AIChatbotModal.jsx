import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  Bot, 
  User, 
  MessageSquare, 
  ArrowRight, 
  RotateCcw,
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { aiAssistantKnowledge } from '../data/aiSolutions';
import { useNavigate } from 'react-router-dom';

const quickPrompts = [
  "What services do you provide?",
  "What technologies do you use?",
  "Show me your projects.",
  "How can I contact QYVERON?",
  "What Full Stack jobs are available?"
];

const AIChatbotModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'm-init',
      sender: 'assistant',
      text: "Hello! I am the QYVERON AI Assistant. How can I assist you today with our AI systems, Full Stack engineering, or project inquiries?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI inference latency (400-800ms)
    setTimeout(() => {
      const lower = query.toLowerCase();
      let matched = aiAssistantKnowledge.find(item => 
        item.keywords.some(k => lower.includes(k))
      );

      let responseText = "";
      if (matched) {
        responseText = matched.response;
      } else {
        responseText = `Thank you for your question regarding "${query}". QYVERON Technologies specializes in Full Stack development (React, Python, Django, MySQL) and Artificial Intelligence (Computer Vision, RAG, Predictive Analytics).\n\nFor custom consultations, you can also reach our engineering lead directly on WhatsApp at +91 8309582791 or derangulashivaprasad7@gmail.com!`;
      }

      const botMessage = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: `m-${Date.now()}`,
        sender: 'assistant',
        text: "Conversation reset. You can ask anything about QYVERON Technologies or select one of the suggested questions below.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl h-[650px] max-h-[92vh] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan to-brand-blue p-[1.5px]">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-cyan animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">
                  QYVERON AI Assistant
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">
                  Frontend AI Demo
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Simulated AI knowledge base • Instant offline responses
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleReset}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              title="Reset Conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
              title="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Message Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-md ${
                  msg.sender === 'user'
                    ? 'bg-brand-blue text-white rounded-tr-none'
                    : 'bg-slate-950/80 border border-slate-800 text-slate-200 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-line">
                  {msg.text}
                </div>
                <div
                  className={`text-[10px] mt-2 font-mono ${
                    msg.sender === 'user' ? 'text-blue-200 text-right' : 'text-slate-500'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-400 text-xs flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                <span className="ml-1 text-[11px] font-mono">QYVERON AI is formulating answer...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggested Questions Chips */}
        <div className="px-4 py-2 bg-slate-950/40 border-t border-slate-800/80 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="text-[11px] text-slate-400 flex items-center gap-1 shrink-0 font-medium">
              <HelpCircle className="w-3 h-3 text-brand-cyan" />
              Suggested:
            </span>
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-3 py-1 rounded-full bg-slate-800/80 hover:bg-brand-cyan/20 text-slate-300 hover:text-brand-cyan border border-slate-700/60 hover:border-brand-cyan/40 text-xs transition-all shrink-0"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask QYVERON AI something..."
              className="flex-1 py-3 px-4 rounded-xl bg-slate-900 border border-slate-700/80 text-white placeholder:text-slate-500 text-sm focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white shadow-lg shadow-brand-blue/30 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
          <div className="mt-2 text-center text-[10px] text-slate-500">
            Frontend AI Demo • Predefined JavaScript responses • No external API credentials required
          </div>
        </div>

      </div>
    </div>
  );
};

export default AIChatbotModal;

