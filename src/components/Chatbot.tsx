import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { chatbotResponses } from '@/data/portfolioData';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  isTyping?: boolean;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: chatbotResponses.greeting[language],
          isBot: true,
        },
      ]);
    }
  }, [isOpen, language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('শিক্ষা') || lowerMessage.includes('পড়াশোনা')) {
      return chatbotResponses.education[language];
    }
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('দক্ষতা') || lowerMessage.includes('প্রযুক্তি')) {
      return chatbotResponses.skills[language];
    }
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('অভিজ্ঞতা') || lowerMessage.includes('কাজ')) {
      return chatbotResponses.experience[language];
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('যোগাযোগ') || lowerMessage.includes('ইমেইল')) {
      return chatbotResponses.contact[language];
    }
    if (lowerMessage.includes('research') || lowerMessage.includes('paper') || lowerMessage.includes('গবেষণা') || lowerMessage.includes('পেপার')) {
      return chatbotResponses.research[language];
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('হ্যালো') || lowerMessage.includes('হাই')) {
      return chatbotResponses.greeting[language];
    }
    
    return chatbotResponses.default[language];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(input),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-xl hover:opacity-90 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-foreground/20 rounded-full">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{t('chatbot.title')}</h3>
              <p className="text-xs opacity-80">
                {language === 'en' ? 'Online' : 'অনলাইন'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.isBot ? '' : 'flex-row-reverse'}`}
            >
              <div
                className={`p-2 rounded-full flex-shrink-0 ${
                  message.isBot ? 'bg-primary/10' : 'bg-accent'
                }`}
              >
                {message.isBot ? (
                  <Bot size={16} className="text-primary" />
                ) : (
                  <User size={16} className="text-accent-foreground" />
                )}
              </div>
              <div
                className={`p-3 rounded-2xl max-w-[80%] ${
                  message.isBot
                    ? 'bg-card shadow-sm rounded-tl-none'
                    : 'bg-primary text-primary-foreground rounded-tr-none'
                }`}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-2">
              <div className="p-2 rounded-full bg-primary/10">
                <Bot size={16} className="text-primary" />
              </div>
              <div className="bg-card shadow-sm rounded-2xl rounded-tl-none p-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-border flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chatbot.placeholder')}
            className="flex-1 px-4 py-2 bg-background border border-border rounded-full focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
          />
          <button
            type="submit"
            className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
