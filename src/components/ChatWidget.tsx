'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatWidget.module.css';

type Message = {
  id: string;
  text: string;
  isBot: boolean;
};

const initialMessage: Message = {
  id: 'initial',
  text: 'Hi there! 👋 I am the Htech AI Assistant. How can I help you today?',
  isBot: true,
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('service') || lowerInput.includes('what do you do')) {
      return 'We offer Enterprise Software Development, AI & Machine Learning integration, Cloud Services, and Advanced Cybersecurity solutions. Check out our Services section for more details!';
    }
    if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('phone') || lowerInput.includes('reach')) {
      return 'You can reach us directly at harikesh@htechsolution.net or call +91 79846 49969. Our HQ is at 431/B Pushpak Corner, Naroda, Ahmedabad.';
    }
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote')) {
      return 'Pricing depends entirely on the scope and complexity of your project. We would love to discuss your vision! Please email us to get a custom quote.';
    }
    if (lowerInput.match(/\b(hi+|hello+|hey+|greetings)\b/)) {
      return 'Hello again! How can I assist you with Htech Solutions today?';
    }
    if (lowerInput.includes('who are you') || lowerInput.includes('ai') || lowerInput.includes('bot')) {
      return 'I am the Htech Virtual Assistant! I am here to quickly answer your questions about our services and help you get in touch with our engineering team.';
    }
    if (lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('react')) {
      return 'We build with the best modern stacks: React, Next.js, Node.js, Python for AI, and robust cloud infrastructure on AWS/GCP.';
    }
    
    return 'Thank you for your message! Since I am still learning, the best way to get a detailed answer is to email our expert team at harikesh@htechsolution.net.';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      isBot: false,
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate network delay and "thinking"
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(newUserMsg.text),
        isBot: true,
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200 + Math.random() * 800);
  };

  return (
    <div className={styles.widgetContainer}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className={styles.header}>
              <div className={styles.headerInfo}>
                <span className={styles.headerTitle}>Htech Support AI</span>
                <span className={styles.headerStatus}>Online & Ready</span>
              </div>
              <button className={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close Chat">
                &times;
              </button>
            </div>
            
            <div className={styles.messages}>
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`${styles.message} ${msg.isBot ? styles.botMessage : styles.userMessage}`}
                >
                  {msg.text}
                </div>
              ))}
              
              {isTyping && (
                <div className={styles.typingIndicator}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className={styles.inputArea}>
              <input
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                aria-label="Chat input"
              />
              <button 
                type="submit" 
                className={styles.sendBtn} 
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        className={styles.fab} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Support Chat"
        data-hover="true"
      >
        {isOpen ? (
          <svg className={styles.fabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg className={styles.fabIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
