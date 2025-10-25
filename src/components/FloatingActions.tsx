"use client";

import { useEffect, useRef, useState } from "react";
import type { SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";

// WhatsApp configuration
const WHATSAPP_E164 = "+27637310437"; // South Africa +27
const WA_NUMBER = WHATSAPP_E164.replace("+", "");
const QUICK_MESSAGES = [
  "Hi! I’d like to join a service 🙏",
  "Please pray with me",
  "How can I partner?",
];

export default function FloatingActions() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowTeaser(true), 600);
    const autoHide = setTimeout(() => setShowTeaser(false), 10000);
    return () => {
      clearTimeout(t);
      clearTimeout(autoHide);
    };
  }, []);

  // Close panel on outside click or ESC
  useEffect(() => {
    if (!panelOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setPanelOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [panelOpen]);

  const WhatsAppIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 175.216 175.552" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#57d163"/>
          <stop offset="1" stopColor="#23b33a"/>
        </linearGradient>
        <filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="3.531"/>
        </filter>
      </defs>
      <path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)"/>
      <path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"/>
      <path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"/>
      <path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"/>
      <path fill="#fff" fillRule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"/>
    </svg>
  );

  const openWhatsApp = (text?: string) => {
    const url = text
      ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
      : `https://wa.me/${WA_NUMBER}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setPanelOpen(false);
  };

  return (
    <div ref={containerRef} className="fixed right-4 bottom-5 sm:right-6 sm:bottom-6 z-50 select-none">
      {/* Teaser bubble */}
      <AnimatePresence>
        {showTeaser && !panelOpen && (
          <motion.div
            key="teaser"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mb-3 mr-1 max-w-[260px] rounded-2xl bg-white shadow-xl border border-gray-100 p-4 relative"
          >
            <div className="absolute -bottom-2 right-8 w-4 h-4 rotate-45 bg-white border-r border-b border-gray-100" />
            <div className="flex items-start gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <span className="absolute -right-1 -bottom-1 w-3 h-3 rounded-full bg-green-500 ring-2 ring-white animate-pulse" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Need Prayer or Help?</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Chat with us on WhatsApp anytime!
                </p>
              </div>
              <button
                aria-label="Dismiss"
                className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                onClick={() => setShowTeaser(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick panel */}
      <AnimatePresence>
        {panelOpen && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 mr-1 w-[320px] max-w-[90vw] rounded-3xl bg-white shadow-2xl border border-gray-100 p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-md">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Chat with Us</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-500">Online now</span>
                  </div>
                </div>
              </div>
              <button
                aria-label="Close"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => setPanelOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 mb-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">Quick Messages</p>
              {QUICK_MESSAGES.map((m) => (
                <button
                  key={m}
                  onClick={() => openWhatsApp(m)}
                  className="w-full text-left text-sm px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-green-300 transition-all group"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                    <span>{m}</span>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => openWhatsApp()}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
              type="button"
            >
              <Send className="w-4 h-4" /> Open WhatsApp Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.button
        aria-label="WhatsApp us"
        onClick={() => setPanelOpen((v) => !v)}
        className="group relative w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        aria-expanded={panelOpen}
        type="button"
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Pulsing glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Inner circle with icon */}
        <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-inner">
          <WhatsAppIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg relative z-10" />
        </div>

        {/* Notification badge with pulse */}
        <motion.span
          className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-red-600 ring-[3px] ring-white shadow-lg flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-white" />
        </motion.span>

        {/* Ripple effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-white"
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{
            scale: [1, 1.4],
            opacity: [0.8, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
          }}
        />

        {/* Continuous ripple animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{
            scale: [1, 1.6],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.button>
    </div>
  );
}
