import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Ghost, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { chatbotData, chatbotKeywords } from '@/data/Chatbot';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  // Ghost floating animation variants
  const ghostVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  // Message animation variants
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      },
    },
  };

  // Calculate age dynamically
  const calculateAge = (): number => {
    const birthDate = new Date('2007-12-31');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  // Get response based on user input
  const getResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase().trim();
    const lang = language === 'en' ? 'en' : 'bn';

    // Check each category
    if (chatbotKeywords.profile.some(kw => lowerInput.includes(kw))) {
      return chatbotData.profile[lang];
    }
    if (chatbotKeywords.education.some(kw => lowerInput.includes(kw))) {
      return chatbotData.education[lang];
    }
    if (chatbotKeywords.skills.some(kw => lowerInput.includes(kw))) {
      return chatbotData.skills[lang];
    }
    if (chatbotKeywords.experience.some(kw => lowerInput.includes(kw)) && !lowerInput.includes('project')) {
      return chatbotData.experience[lang];
    }
    if (chatbotKeywords.projects.some(kw => lowerInput.includes(kw))) {
      return chatbotData.projects[lang];
    }
    if (chatbotKeywords.certificates.some(kw => lowerInput.includes(kw))) {
      return chatbotData.certificates[lang];
    }
    if (chatbotKeywords.contact.some(kw => lowerInput.includes(kw))) {
      return chatbotData.contact[lang];
    }
    if (chatbotKeywords.volunteer.some(kw => lowerInput.includes(kw))) {
      return chatbotData.volunteer[lang];
    }
    if (chatbotKeywords.family.some(kw => lowerInput.includes(kw))) {
      return chatbotData.family[lang];
    }
    if (chatbotKeywords.research.some(kw => lowerInput.includes(kw))) {
      return chatbotData.research[lang];
    }
    if (chatbotKeywords.blog.some(kw => lowerInput.includes(kw))) {
      return chatbotData.blog[lang];
    }
    if (chatbotKeywords.social.some(kw => lowerInput.includes(kw))) {
      return chatbotData.social[lang];
    }
    if (chatbotKeywords.greeting.some(kw => lowerInput.includes(kw))) {
      return chatbotData.greeting[lang];
    }
    if (chatbotKeywords.thanks.some(kw => lowerInput.includes(kw))) {
      return chatbotData.thanks[lang];
    }
    if (chatbotKeywords.age.some(kw => lowerInput.includes(kw))) {
      const age = calculateAge();
      return chatbotData.age[lang](age);
    }
    if (chatbotKeywords.bloodGroup.some(kw => lowerInput.includes(kw))) {
      return chatbotData.bloodGroup[lang];
    }

    return chatbotData.default[lang];
  };

  useEffect(() => {
    if (isChatOpen) {
      inputRef.current?.focus();
    }
  }, [isChatOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingText]);

  // Typing animation effect
  const typeMessage = async (text: string): Promise<string> => {
    setTypingText('');
    for (let i = 0; i < text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 15));
      setTypingText(text.substring(0, i + 1));
    }
    return text;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    // Get response
    const response = getResponse(userInput);
    
    // Type out the response
    await typeMessage(response);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: response,
      role: 'assistant',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, botMessage]);
    setTypingText('');
    setIsLoading(false);
  };

  const lang = language === 'en' ? 'en' : 'bn';

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full shadow-xl hover:opacity-90 transition-all duration-300 ${
          isChatOpen ? 'scale-0' : 'scale-100'
        }`}
        aria-label="Open chat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/20 rounded-full">
                  <Ghost size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">
                    {language === 'en' ? 'Ghost AI' : 'ঘোস্ট এআই'}
                  </h3>
                  <p className="text-xs opacity-80">
                    {language === 'en' ? 'Online' : 'অনলাইন'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="p-1 hover:bg-primary-foreground/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/30">
              {messages.length === 0 ? (
                // Welcome screen
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <motion.div
                    variants={ghostVariants}
                    animate="float"
                    className="mb-4"
                  >
                    <Ghost size={48} className="text-primary" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {language === 'en' ? 'Welcome!' : 'স্বাগতম!'}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {language === 'en' 
                      ? "Ask me anything about Ridoan Zisan!" 
                      : "রিদোয়ান জিসান সম্পর্কে যেকোনো কিছু জিজ্ঞাসা করুন!"}
                  </p>
                </div>
              ) : (
                <>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      className={`flex gap-2 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
                    >
                      <div
                        className={`p-2 rounded-full flex-shrink-0 ${
                          message.role === 'assistant' ? 'bg-primary/10' : 'bg-accent'
                        }`}
                      >
                        {message.role === 'assistant' ? (
                          <Ghost size={16} className="text-primary" />
                        ) : (
                          <User size={16} className="text-accent-foreground" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-2xl max-w-[80%] ${
                          message.role === 'assistant'
                            ? 'bg-card shadow-sm rounded-tl-none'
                            : 'bg-primary text-primary-foreground rounded-tr-none'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing indicator */}
                  {isLoading && typingText && (
                    <motion.div
                      variants={messageVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex gap-2"
                    >
                      <div className="p-2 rounded-full bg-primary/10">
                        <Ghost size={16} className="text-primary" />
                      </div>
                      <div className="bg-card shadow-sm rounded-2xl rounded-tl-none p-3 max-w-[80%]">
                        <p className="text-sm whitespace-pre-line">{typingText}</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Loading dots */}
                  {isLoading && !typingText && (
                    <div className="flex gap-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Ghost size={16} className="text-primary" />
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
                </>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-border flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={language === 'en' ? 'Ask me anything...' : 'আমাকে কিছু জিজ্ঞাসা করুন...'}
                className="flex-1 px-4 py-2 bg-background border border-border rounded-full focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
