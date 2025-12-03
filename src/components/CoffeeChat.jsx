import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Coffee, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CoffeeChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! I'm Henry's virtual assistant. I run on coffee and code. ☕", sender: "bot" },
    { id: 2, text: "How can I help you today?", sender: "bot" }
  ]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const options = [
    { label: "Your Tech Stack? 🛠️", response: "Henry works with the MERN Stack (MongoDB, Express, React, Node) and is diving deep into AI integration with Python!" },
    { label: "Coffee Order? ☕", response: "Double shot espresso, no sugar. Pure fuel for debugging! 🚀" },
    { label: "Hire Henry? 💼", response: "Great choice! He's looking for Full-Stack or AI roles. You can email him at: henrychrisp23@gmail.com" },
  ];

  const handleOptionClick = (option) => {
    // FIX: Use the array length instead of Date.now() to satisfy the linter
    const newId = messages.length + 1; 

    // Add User Message
    const userMsg = { id: newId, text: option.label, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    // Simulate Bot "Typing" delay
    setTimeout(() => {
      const botMsg = { id: newId + 1, text: option.response, sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-slate-800 border border-slate-700 w-80 h-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col mb-2 origin-bottom-right"
          >
            {/* Chat Header */}
            <div className="bg-primary p-4 flex justify-between items-center">
              <div className="flex items-center gap-2 text-white font-bold">
                <Coffee size={20} />
                <span>Henry's Bot</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-900/50 space-y-3 custom-scrollbar">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-xl text-sm ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-slate-700 text-slate-200 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Options Area */}
            <div className="p-3 bg-slate-800 border-t border-slate-700">
              <div className="flex flex-wrap gap-2 justify-center">
                {options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className="text-xs bg-slate-700 hover:bg-slate-600 text-primary border border-primary/30 py-2 px-3 rounded-full transition-colors"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button Container with Label */}
      <div className="flex items-center gap-4">
        {/* The "Call to Action" Label (Only visible when chat is closed) */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 1 }}
            className="bg-white text-slate-900 py-2 px-4 rounded-xl shadow-lg font-bold text-sm hidden md:block arrow-right"
          >
            Chat with my AI? ☕
          </motion.div>
        )}

        {/* Floating Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative bg-primary hover:bg-blue-600 text-white p-4 rounded-full shadow-lg shadow-primary/30 flex items-center justify-center transition-colors"
        >
          {/* Pulse Animation */}
          {!isOpen && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animate-ping"></span>
          )}
          
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.button>
      </div>
    </div>
  );
};

export default CoffeeChat;