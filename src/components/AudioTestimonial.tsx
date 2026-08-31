"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Mic2, Volume2, Lock } from "lucide-react";

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

interface AudioTestimonialProps {
  audioSrc: string;
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  badge?: string;
  accent?: "emerald" | "amber";
}

export default function AudioTestimonial({
  audioSrc,
  imageSrc,
  imageAlt = "Testimony photo",
  title = "A Voice of Testimony",
  description = "A brother or sister in Christ shares what God has done in their life — no name, just the praise. Press play and listen.",
  badge = "Anonymous • Shared with permission",
  accent = "emerald",
}: AudioTestimonialProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    const onLoaded = () => {
      setDuration(audio.duration);
      setIsReady(true);
    };
    const onEnd = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    audio.currentTime = ratio * duration;
    setCurrentTime(ratio * duration);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const accentGrad =
    accent === "amber"
      ? "from-amber-500 to-orange-600"
      : "from-emerald-500 to-teal-600";
  const accentRing = accent === "amber" ? "border-amber-400" : "border-emerald-400";
  const barGrad =
    accent === "amber"
      ? "from-amber-500 to-orange-500"
      : "from-emerald-500 to-teal-500";
  const waveActive =
    accent === "amber"
      ? "linear-gradient(180deg, #f59e0b, #ea580c)"
      : "linear-gradient(180deg, #10b981, #14b8a6)";
  const waveInactive = accent === "amber" ? "#fef3c7" : "#d1fae5";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] }}
      className="max-w-4xl mx-auto"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-teal-50 border border-emerald-200 shadow-xl p-8 md:p-10">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center gap-8 relative z-10">
          {/* Play button */}
          <div className="flex md:flex-col items-center gap-5 md:gap-4 shrink-0">
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${accentGrad} text-white shadow-[0_0_40px_rgba(16,185,129,0.4)] flex items-center justify-center`}
              aria-label={isPlaying ? "Pause audio testimony" : "Play audio testimony"}
            >
              {isPlaying && (
                <motion.span
                  className={`absolute inset-0 rounded-full border-2 ${accentRing}`}
                  animate={{ scale: [1, 1.35], opacity: [0.7, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                />
              )}
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </motion.button>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 md:justify-center">
              <Mic2 className="w-3.5 h-3.5" />
              Audio Testimony
            </div>
          </div>

          {/* Player body */}
          <div className="flex-1 w-full">
            <div className="mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-3">
                <Lock className="w-3.5 h-3.5" />
                {badge}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>

            {/* Progress bar */}
            <div
              className="group cursor-pointer py-2"
              onClick={seek}
              role="slider"
              aria-label="Audio progress"
              aria-valuemin={0}
              aria-valuemax={Math.floor(duration)}
              aria-valuenow={Math.floor(currentTime)}
            >
              <div className="h-2.5 rounded-full bg-emerald-100/80 overflow-hidden relative">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${barGrad} relative`}
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 shadow opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 text-sm">
                <span className="font-medium text-emerald-700 tabular-nums">
                  {formatTime(currentTime)}
                </span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <Volume2 className="w-4 h-4" />
                  {isReady ? formatTime(duration) : "…"}
                </span>
              </div>
            </div>

            {/* Waveform decoration */}
            <div className="flex items-end gap-1 h-10 mt-4">
              {Array.from({ length: 48 }).map((_, i) => {
                const h = 4 + ((i * 37 + 11) % 26);
                const active = i / 48 <= progress / 100;
                return (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-full"
                    style={{
                      height: h,
                      background: active ? waveActive : waveInactive,
                      transition: "background 0.2s",
                    }}
                    animate={isPlaying ? { scaleY: [1, 0.6, 1] } : {}}
                    transition={{
                      duration: 0.9,
                      repeat: isPlaying ? Infinity : 0,
                      delay: i * 0.03,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </div>

            {/* Optional photo */}
            {imageSrc && (
              <div className="relative rounded-2xl overflow-hidden border border-emerald-100 shadow-lg mt-6 aspect-[2/1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur rounded-full text-xs font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  The Testimony
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={audioSrc} preload="metadata" />
    </motion.div>
  );
}
