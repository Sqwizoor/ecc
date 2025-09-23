"use client";

import { useEffect, useRef, useState } from "react";
import type { SVGProps } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

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
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path
        fill="#ffffff"
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
            className="mb-2 sm:mb-3 mr-1 max-w-[240px] rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-emerald-100 p-3 relative"
          >
            <div className="absolute -bottom-2 right-6 w-3 h-3 rotate-45 bg-white/95 border-r border-b border-emerald-100" />
            <div className="flex items-start gap-3">
              <div className="relative">
                <WhatsAppIcon className="w-6 h-6 rounded-full shadow" />
                <span className="absolute -right-0 -bottom-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
              </div>
              <div className="text-sm text-gray-700 leading-snug">
                Hi! How can we pray with you today?
              </div>
              <button
                aria-label="Dismiss"
                className="ml-auto text-gray-400 hover:text-gray-600"
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
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mb-3 mr-1 w-[300px] max-w-[88vw] rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl border border-emerald-200 p-4"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-5 h-5 rounded-full" />
                <span className="text-sm font-semibold text-gray-900">WhatsApp us</span>
                <span className="ml-1 w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <button
                aria-label="Close"
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setPanelOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {QUICK_MESSAGES.map((m) => (
                <button
                  key={m}
                  onClick={() => openWhatsApp(m)}
                  className="text-left text-sm px-3 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-100"
                  type="button"
                >
                  {m}
                </button>
              ))}
            </div>

            <button
              onClick={() => openWhatsApp()}
              className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 text-sm shadow-lg"
              type="button"
            >
              <Send className="w-4 h-4" /> Open WhatsApp
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button (compact on mobile, pill on larger screens) */}
      <motion.button
        aria-label="WhatsApp us"
        onClick={() => setPanelOpen((v) => !v)}
        className="group relative flex items-center gap-3 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 text-white pr-3 pl-2 sm:pr-4 py-2 shadow-lg sm:shadow-2xl ring-1 ring-white/10"
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.03 }}
        aria-expanded={panelOpen}
        type="button"
      >
        <div className="relative">
          <WhatsAppIcon className="w-10 h-10 sm:w-9 sm:h-9 rounded-full shadow" />
          <span className="absolute -right-0 -bottom-0 w-2.5 h-2.5 rounded-full bg-white" />
          <span className="absolute -right-0 -bottom-0 w-2 h-2 rounded-full bg-emerald-500" />
        </div>
        <div className="hidden sm:block text-left leading-tight pr-1">
          <div className="text-[11px] text-white/80">Chat on</div>
          <div className="text-sm font-semibold tracking-wide">WhatsApp</div>
        </div>
        <span className="absolute inset-0 rounded-full ring-2 ring-white/10" />
      </motion.button>
    </div>
  );
}
