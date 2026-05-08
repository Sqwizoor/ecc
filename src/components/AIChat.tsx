"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  User, 
  Bot,
  RefreshCcw,
  MinusCircle,
  Church
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { cn } from "@/lib/utils";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sessionId] = useState(() => Math.random().toString(36).substring(7));
  
  // Convex mutations
  const sendMessageToConvex = useMutation(api.messages.send);
  
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: "Greetings in the name of our Lord! I'm the Elijah Church Assistant. How can I help you today? Whether you need service times, prayer, or want to learn about our ministry, I'm here for you."
      }
    ],
    onFinish: async (message) => {
      // Save assistant message to Convex
      await sendMessageToConvex({
        sessionId,
        role: "assistant",
        content: message.content,
      });
    }
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Save user message to Convex
    await sendMessageToConvex({
      sessionId,
      role: "user",
      content: input,
    });

    handleSubmit(e);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      {/* Floating Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed right-6 bottom-24 z-50 w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center group transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-20 group-hover:opacity-40"></div>
            <MessageSquare className="w-6 h-6 relative z-10" />
            <motion.div 
              className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed right-6 bottom-6 z-[60] w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] bg-white rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-emerald-600 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Church className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Church Assistant</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    <span className="text-[10px] text-emerald-100">AI Powered • Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: m.role === "user" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "flex flex-col max-w-[85%]",
                    m.role === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                    m.role === "user" 
                      ? "bg-emerald-600 text-white rounded-tr-none" 
                      : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                  )}>
                    {m.content}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">
                    {m.role === "assistant" ? "ECC Assistant" : "You"}
                  </span>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-gray-400 text-xs px-2">
                  <Bot className="w-4 h-4 animate-bounce" />
                  <span>Thinking...</span>
                </div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={onSubmit}
              className="p-4 bg-white border-t border-gray-100 flex items-center gap-2"
            >
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about ECC, prayer, or services..."
                className="flex-1 rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              />
              <Button 
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>

            <div className="px-4 pb-2 text-[9px] text-center text-gray-400">
              Matthew 7:24 • Built on the Solid Rock
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
