"use client";
import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SmartImage } from "@/components/SmartImage";
import AudioTestimonial from "@/components/AudioTestimonial";
import Link from "next/link";
import { Sparkles, ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
  },
};

export default function TestimoniesPage() {
  const reviews = [
    {
      name: "Thandi M.",
      avatar: "TM",
      rating: 5,
      date: "2 weeks ago",
      review:
        "I came heavy‑hearted and left with peace. The prayer team stood with me, and I witnessed God’s hand restoring my family.",
      helpful: 9,
    },
    {
      name: "James R.",
      avatar: "JR",
      rating: 5,
      date: "1 month ago",
      review:
        "Powerful worship and practical teaching. I felt welcomed from the moment I walked in—this church has become my family.",
      helpful: 6,
    },
    {
      name: "Ayesha P.",
      avatar: "AP",
      rating: 5,
      date: "3 weeks ago",
      review:
        "My child loves the Children’s Church and looks forward to Sundays. We’ve seen real growth in our home since coming to ECC.",
      helpful: 11,
    },
  ] as const;

  return (
    <main className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <motion.div
            variants={itemFadeUp}
            className="inline-flex items-center space-x-3 mb-8"
          >
            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Praise Reports</span>
            </div>
          </motion.div>
          <motion.h1
            variants={itemFadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Testimonies
          </motion.h1>
          <motion.p variants={itemFadeUp} className="text-lg text-gray-600">
            Stories of healing and transformation at Elijah Church of Christ
          </motion.p>
          <motion.div variants={itemFadeUp} className="mt-6">
            <Link
              href="/"
              className="text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Real Healing Testimony */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          <motion.div
            variants={itemFadeUp}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 text-white shadow-2xl"
          >
            <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/15 backdrop-blur rounded-full text-xs font-bold tracking-widest uppercase border border-white/20">
              Featured • Real Story
            </div>
            <div className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Photos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl aspect-[3/4]">
                      <SmartImage
                        src="/testimonies/burn-before-after.jpeg"
                        alt="Burn wound before and after God's healing"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-emerald-700 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Before & After
                    </div>
                  </div>
                  <div className="space-y-4 pt-6">
                    <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-xl aspect-[3/4]">
                      <SmartImage
                        src="/testimonies/burn-healing-progress.jpeg"
                        alt="The burn wound during the process of healing"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-amber-600 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      In Process of Healing
                    </div>
                  </div>
                </div>

                {/* Story text */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-400/20 border border-emerald-300/30 rounded-full text-xs font-semibold text-emerald-100 mb-5">
                    <HeartHandshake className="w-4 h-4" />
                    Healed by the Prayer of Bishop Elijah
                  </div>
                  <blockquote className="space-y-5">
                    <p className="text-lg md:text-xl text-emerald-50 leading-relaxed font-light">
                      "Good day my brothers and sisters in Christ. About months
                      ago I was burnt by a fan heater... The wound turned into a
                      third degree burn and got so infected that they told me at
                      the clinic they were going to <em className="font-semibold text-white">amputate my leg</em> —
                      until I contacted Bishop Elijah. The man of God prayed for
                      me for healing... And today my leg is healed completely by
                      God's grace."
                    </p>
                    <footer className="flex items-center gap-4 pt-4 border-t border-white/15">
                      <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white font-bold text-lg">
                        ♥
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          A Brother in Christ
                        </div>
                        <div className="text-sm text-emerald-200">
                          Elijah Church of Christ • Healed by Prayer
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="https://wa.me/27718499605?text=Hi%20Elijah%20Church%20of%20Christ%2C%20I%20want%20to%20share%20my%20testimony."
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-full font-semibold shadow-lg hover:bg-emerald-50 transition-colors"
                    >
                      Share Your Testimony
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-emerald-100/80">
                      <ShieldCheck className="w-4 h-4" />
                      Real story • Photos shared with permission
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Original written testimony image */}
          <motion.div
            variants={itemFadeUp}
            className="mt-8 max-w-3xl mx-auto"
          >
            <div className="text-center mb-4">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                The original testimony as shared by our brother
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg max-w-md mx-auto aspect-[4/5] bg-gray-50">
              <SmartImage
                src="/testimonies/burn-testimony-text.jpeg"
                alt="Original written testimony of the burn healing shared by a member"
                fill
                className="object-contain w-full"
                sizes="(max-width: 768px) 90vw, 450px"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Anonymous Audio Testimony */}
        <AudioTestimonial audioSrc="/testimonies/testimony-audio1.ogg" />

        {/* Leg Healing Audio Testimony with photo */}
        <div className="mt-10">
          <AudioTestimonial
            audioSrc="/testimonies/leg-audio.ogg"
            imageSrc="/testimonies/leg-testimony.jpeg"
            imageAlt="Leg healing testimony photo shared by a church member"
            title="Another Voice of Testimony"
            description="Another brother or sister in Christ shares what God has done in their life — no name, just the praise. Press play and listen."
            badge="Anonymous • Leg Healing"
            accent="amber"
          />
        </div>

        <motion.div
          variants={containerStagger}
          initial="hidden"
          animate="show"
          className="space-y-6 mt-14"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              variants={itemFadeUp}
              className="max-w-4xl mx-auto"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <Card variant="solid" elevation="sm" accent="emerald" interactive className="p-6 rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {review.avatar}
                    </motion.div>
                    <div>
                      <motion.h4
                        className="font-medium text-gray-900 hover:text-blue-600 cursor-pointer transition-colors duration-200"
                        whileHover={{ x: 2 }}
                      >
                        {review.name}
                      </motion.h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>{review.date}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          <span>Johannesburg</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="More options"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </motion.button>
                </div>
                <motion.div
                  className="flex items-center space-x-1 mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + i * 0.05 + 0.4, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>
                <motion.p
                  className="text-gray-700 leading-relaxed mb-4 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                >
                  {review.review}
                </motion.p>
                <motion.div
                  className="flex items-center justify-between pt-3 border-t border-gray-100"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.button
                      className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9 6v11.5m0 0L7 20"
                        />
                      </svg>
                      <span>Helpful ({review.helpful})</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center space-x-2 text-gray-500 hover:text-blue-600 transition-colors duration-200 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                      <span>Share</span>
                    </motion.button>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500">
                    <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Verified</span>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
