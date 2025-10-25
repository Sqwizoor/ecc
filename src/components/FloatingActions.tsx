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
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.672-1.617-.922-2.221-.242-.58-.487-.5-.672-.51-.173-.01-.372-.012-.571-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347m-5.421 5.451h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.519-5.269c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.897a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.878 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.935L0 24l6.305-1.654a11.86 11.86 0 0 0 5.694 1.448h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 0 0-3.49-8.413Z"
      />
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
