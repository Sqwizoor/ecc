"use client";

import { motion } from "framer-motion";
import { Phone, MessageSquare, Heart } from "lucide-react";
import { Button } from "./ui/button";

export default function PrayerLineBanner() {
  return (
    <section className="py-16 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-800 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-200 text-sm font-medium">
              <Heart className="w-4 h-4" />
              <span>24/7 Spiritual Support</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Our Prayer Line is <span className="text-emerald-400">Always Open</span>
            </h2>
            <p className="text-emerald-100/80 text-lg max-w-xl">
              Don&apos;t carry the burden alone. Our dedicated prayer team is ready to stand with you in faith, anytime of the day or night.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <div className="text-center md:text-right">
              <div className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-1">Call Now</div>
              <a 
                href="tel:0718499605" 
                className="text-3xl md:text-4xl font-bold hover:text-emerald-400 transition-colors"
              >
                071 849 9605
              </a>
            </div>
            
            <div className="flex gap-4">
              <a href="tel:0718499605">
                <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-7 rounded-2xl text-lg font-bold shadow-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call
                </Button>
              </a>
              <a 
                href="https://wa.me/27718499605?text=I%20need%20prayer%20support"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-800/50 px-8 py-7 rounded-2xl text-lg font-bold">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
