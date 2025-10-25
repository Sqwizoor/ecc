"use client";
import React, { useMemo, useState, useRef } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HandHeart, Heart, Users, Gift, PhoneCall, Banknote, Package, Sparkles, BookOpen, Cross, Play, MapPin, Target, TrendingUp, Quote } from "lucide-react";

const containerStagger: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemFadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] } },
};

const gallery = [
  { src: "/charity-work.jpeg", alt: "Charity work in action" },
  { src: "/charity-work2.jpeg", alt: "Feeding the hungry in Johannesburg" },
  { src: "/charity-work3.jpeg", alt: "Serving meals to those in need" },
  { src: "/charity-work4.jpeg", alt: "Community outreach and compassion" },
  { src: "/charity-work5.jpeg", alt: "Helping people living on the streets" },
  { src: "/charity-work6.jpeg", alt: "Distributing food and care" },
  { src: "/charity-work7.jpeg", alt: "Love in action - charity ministry" },
  { src: "/charity-work8.jpeg", alt: "Reaching the vulnerable with hope" },
  { src: "/charity-work9.jpeg", alt: "Church charity work - changing lives" },
];

type DonationType = "money" | "food" | "clothes" | "blankets" | "other";
type PreferredMethod = "whatsapp" | "eft" | "inperson";

export default function CharityPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    donationType: "money" as DonationType,
    amount: "",
    items: "",
    preferred: "whatsapp" as PreferredMethod,
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const needsAmount = form.donationType === "money";
  const needsItems = form.donationType !== "money";

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const donateDisabled = useMemo(() => {
    if (!form.fullName) return true;
    if (needsAmount && !form.amount) return true;
    if (needsItems && !form.items) return true;
    return false;
  }, [form.fullName, form.amount, form.items, needsAmount, needsItems]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submitDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (donateDisabled) return;
    setSubmitting(true);
    try {
      const lines = [
        `Hi Elijah Church of Christ, I want to donate to Charity & Outreach.`,
        "",
        "— My Details —",
        `Name: ${form.fullName}`,
        form.phone ? `Phone: ${form.phone}` : undefined,
        form.email ? `Email: ${form.email}` : undefined,
        "",
        "— Donation —",
        `Type: ${form.donationType}`,
        needsAmount ? `Amount: R${form.amount}` : undefined,
        needsItems ? `Items: ${form.items}` : undefined,
        `Preferred Method: ${
          form.preferred === "whatsapp"
            ? "WhatsApp"
            : form.preferred === "eft"
            ? "EFT (please send banking details)"
            : "In-person drop-off"
        }`,
        form.message ? "" : undefined,
        form.message ? "— Message —" : undefined,
        form.message || undefined,
      ].filter(Boolean) as string[];

      const text = encodeURIComponent(lines.join("\n"));
      const wa = `https://wa.me/27637310437?text=${text}`;
      window.open(wa, "_blank");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/charity-work.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Compassion in Action</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Transforming Lives<br />
              <span className="text-emerald-600">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us in bringing hope, food, clothing, and dignity to those living on the streets of South Africa. 
              Your generosity changes lives and builds stronger communities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <MapPin className="w-4 h-4 text-emerald-600" /> 
                <span className="font-medium">Based in South Africa</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Users className="w-4 h-4 text-emerald-600" /> 
                <span className="font-medium">Weekly Outreach Programs</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Heart className="w-4 h-4 text-emerald-600" /> 
                <span className="font-medium">Community Focused</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a href="#donate">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-xl text-lg shadow-lg">
                  <Gift className="w-5 h-5 mr-2" />
                  Donate Now
                </Button>
              </a>
              <a href="#story">
                <Button size="lg" variant="outline" className="px-8 py-6 rounded-xl text-lg border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Our Story
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pastor's Story */}
      <section id="story" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={containerStagger} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemFadeUp} className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                <Cross className="w-4 h-4" />
                <span>From the Streets to Service</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                A Journey of <span className="text-emerald-600">Faith & Compassion</span>
              </h2>
              
              <div className="relative pl-6 border-l-4 border-emerald-600 space-y-4">
                <Quote className="absolute -left-2 top-0 w-8 h-8 text-emerald-600 bg-white" />
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  &ldquo;At a young age, I once lived on the streets in Johannesburg. I experienced firsthand the cold nights, 
                  the hunger, the loneliness, and the feeling of being invisible to the world passing by. Those difficult 
                  days shaped who I am today and ignited a fire within me that has never dimmed.&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  My time on the streets wasn&apos;t just a chapter in my past—it became my calling. God transformed my pain 
                  into purpose, my struggle into strength. What was meant to break me became the very foundation that 
                  would allow me to reach others who are still trapped in that darkness.
                </p>
                <p>
                  I returned to those same streets, not as someone broken, but as someone restored by God&apos;s grace. I came 
                  back to change lives, to be the helping hand I once desperately needed, to show love to those society 
                  has forgotten. Every person we feed, every blanket we distribute, every prayer we offer—it&apos;s personal 
                  to me because I&apos;ve been there.
                </p>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-600 my-6">
                  <h3 className="font-bold text-purple-900 text-xl mb-3 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-purple-600" />
                    In Loving Memory - A Mother&apos;s Legacy
                  </h3>
                  
                  {/* Mother's Image */}
                  <div className="relative rounded-xl overflow-hidden mb-4 shadow-lg">
                    <Image 
                      src="/charity-work2.jpeg" 
                      alt="Pastor's Mother - A hero to many lives" 
                      width={600} 
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent p-4">
                      <p className="text-white font-semibold text-sm">A Mother&apos;s Heart of Service</p>
                    </div>
                  </div>

                  <p className="text-gray-800 italic leading-relaxed">
                    &ldquo;A mother and hero to many many lives that she touched during her serving in communities. 
                    May the Almighty God give my mother a peaceful rest and eternal life. It was her dream to see 
                    every woman, every child get basic needs. The foundation all started together with my mother 
                    living by one powerful tool—PRAYER. We managed to change lives through donating wheelchairs, 
                    books, capital to widows to start up small macro businesses from home. If we are going to serve 
                    God we must be practical and go back to poor communities to serve them and that&apos;s the work of 
                    the church and God&apos;s servants.&rdquo;
                  </p>
                </div>

                <p className="font-medium text-gray-900">
                  I believe that humility and humanity speak to God more powerfully than anything else. As the scripture 
                  teaches us in 1 Peter 5:6:
                </p>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-600">
                  <p className="text-lg font-semibold text-gray-900 italic">
                    &ldquo;Humble yourselves, therefore, under God&apos;s mighty hand, that he may lift you up in due time.&rdquo;
                  </p>
                  <p className="text-sm text-gray-600 mt-2">— 1 Peter 5:6 (NIV)</p>
                </div>
                <p>
                  This ministry isn&apos;t just about charity—it&apos;s about dignity, hope, and restoration. It&apos;s about seeing 
                  Christ in every face we meet on the streets. When we serve the least of these, we serve Him. Join us 
                  in this sacred work of transforming lives, one act of kindness at a time.
                </p>
              </div>

              <div className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <HandHeart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Our Mission</h3>
                  <p className="text-gray-700">
                    To bring the love of Christ to the streets through practical support, spiritual guidance, and genuine 
                    compassion—showing every person that they matter to God and to us.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemFadeUp} className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="/pastor-new5.jpeg" 
                  alt="Our Pastor - From the streets to servant leadership" 
                  width={600} 
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-semibold text-lg">Our Pastor & Founder</p>
                  <p className="text-emerald-300 text-sm">Servant Leader • Street Ministry</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                  <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">1000+</p>
                  <p className="text-xs text-gray-600">Lives Touched</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                  <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">52</p>
                  <p className="text-xs text-gray-600">Weekly Outreaches</p>
                </Card>
                <Card className="p-4 text-center bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                  <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">Growing</p>
                  <p className="text-xs text-gray-600">Impact Daily</p>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={containerStagger} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <motion.div variants={itemFadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>Our Dedicated Team</span>
            </motion.div>
            <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Heart of Our Ministry
            </motion.h2>
            <motion.p variants={itemFadeUp} className="text-gray-600 max-w-3xl mx-auto text-lg">
              Faithful servants committed to changing lives and serving our community with love and compassion.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Charline Jordaan */}
            <motion.div variants={itemFadeUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden rounded-2xl shadow-xl border-0">
                <div className="relative h-96 overflow-hidden">
                  <Image 
                    src="/church-lady2.jpeg" 
                    alt="Charline Jordaan - Church Coordinator" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={95}
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Charline Jordaan</h3>
                    <p className="text-emerald-300 font-medium text-lg">Church Coordinator</p>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-white to-emerald-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Dedicated to coordinating church activities and ensuring smooth operations, Charline brings 
                      organization, care, and a servant&apos;s heart to everything she does in ministry.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Church Treasurer */}
            <motion.div variants={itemFadeUp} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
              <Card className="overflow-hidden rounded-2xl shadow-xl border-0">
                <div className="relative h-96 overflow-hidden">
                  <Image 
                    src="/charity-lady.jpeg" 
                    alt="Church Treasurer and Charity Activities Coordinator" 
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={95}
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Church Treasurer</h3>
                    <p className="text-emerald-300 font-medium text-lg">Charity Activities Coordinator</p>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-white to-emerald-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <HandHeart className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Managing church finances with integrity and coordinating charity activities with compassion, 
                      ensuring every contribution makes a meaningful impact in our community outreach programs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donation Form - New Design */}
      <section id="donate" className="py-24 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/charity-work.jpeg')" }}
        >
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
        </div>

        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <motion.div
            variants={itemFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-800/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
          >
            {/* Header */}
            <div className="text-center mb-8 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Give a donation to help share the hope of Christ and love people all around the world!
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                When we all come together, we can create lasting change and inspire hope in the lives of individuals, families and entire communities. Every contribution, no matter the size, makes a difference by providing much-needed humanitarian relief. Thank you for joining us today!
              </p>
            </div>

            {/* Donation Amount */}
            <div className="space-y-4 mb-6">
              <label className="block text-white font-bold text-lg">
                Donation Amount
              </label>

              {/* Preset Amounts */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { amount: 100, label: "R100" },
                  { amount: 250, label: "R250" },
                  { amount: 500, label: "R500" },
                  { amount: 1000, label: "R1 000" }
                ].map((preset) => (
                  <button
                    key={preset.amount}
                    onClick={() => setForm(f => ({ ...f, amount: String(preset.amount), donationType: "money" }))}
                    className={`py-4 rounded-xl font-semibold text-lg transition-all ${
                      form.amount === String(preset.amount)
                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                        : 'bg-gray-700/50 text-gray-300 border-2 border-gray-600 hover:border-blue-500 hover:bg-gray-700'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input */}
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-lg">
                  R
                </span>
                <input
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={onChange}
                  placeholder="Enter Amount"
                  className="w-full bg-gray-700/50 border-2 border-gray-600 text-white placeholder-gray-400 rounded-xl pl-10 pr-4 py-4 text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50"
                />
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                if (form.amount && parseFloat(form.amount) > 0) {
                  // Open WhatsApp with donation details
                  const message = encodeURIComponent(
                    `Hi Elijah Church of Christ, I want to donate R${form.amount} to help share the hope of Christ and love people all around the world!`
                  );
                  window.open(`https://wa.me/27637310437?text=${message}`, '_blank');
                }
              }}
              disabled={!form.amount || parseFloat(form.amount) <= 0}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:shadow-none"
            >
              Continue
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            variants={containerStagger} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-12"
          >
            <motion.div variants={itemFadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-full text-sm font-medium mb-6">
              <Play className="w-4 h-4" />
              <span>See Our Work in Action</span>
            </motion.div>
            <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
              Witness the Impact
            </motion.h2>
            <motion.p variants={itemFadeUp} className="text-gray-300 max-w-2xl mx-auto text-lg">
              Watch how your donations transform lives on the streets of South Africa. Every contribution makes a real, 
              tangible difference in someone&apos;s day—and their future.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={itemFadeUp}
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-60px" }}
            className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl group"
          >
            <video 
              ref={videoRef}
              className="w-full h-auto"
              controls
              poster="/charity-work.jpeg"
              preload="auto"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/charity-work.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {!isPlaying && (
              <button
                onClick={toggleVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-all"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-xl">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </button>
            )}
          </motion.div>

          <motion.div 
            variants={containerStagger}
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto"
          >
            {[
              { icon: HandHeart, title: "Feeding Programs", desc: "Hot meals served daily to those in need" },
              { icon: Package, title: "Clothing Drives", desc: "Warm clothing and essentials distributed" },
              { icon: Heart, title: "Spiritual Support", desc: "Prayer, counseling, and hope shared" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={itemFadeUp}>
                  <Card className="p-6 bg-white/95 backdrop-blur text-center h-full">
                    <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mb-12 text-center">
            <motion.div variants={itemFadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              <span>Our Community Impact</span>
            </motion.div>
            <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent Outreach Moments
            </motion.h2>
            <motion.p variants={itemFadeUp} className="text-gray-600 max-w-3xl mx-auto text-lg">
              Every photograph tells a story of hope, dignity restored, and lives changed. These are real people, real moments, 
              and real transformation happening in our communities.
            </motion.p>
          </motion.div>
          <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((g, i) => (
              <motion.div key={g.src} variants={itemFadeUp} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card variant="glass" elevation="sm" accent="emerald" interactive className="overflow-hidden rounded-2xl group">
                  <div className="relative aspect-[4/3]">
                    <Image 
                      src={g.src} 
                      alt={g.alt} 
                      fill 
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      priority={i < 3} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">{g.alt}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Original Donation Form Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="text-center mb-12">
            <motion.div variants={itemFadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Gift className="w-4 h-4" /> Partner With Us
            </motion.div>
            <motion.h2 variants={itemFadeUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Make a Difference Today
            </motion.h2>
            <motion.p variants={itemFadeUp} className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Your donation directly impacts lives on the streets of South Africa. Whether it&apos;s money, food, clothing, or blankets—
              every contribution brings hope, dignity, and the love of Christ to those who need it most.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemFadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-8">
                <CardTitle className="text-3xl font-bold">Donation Details</CardTitle>
                <p className="text-emerald-100 mt-2">Fill in your details and we&apos;ll connect with you via WhatsApp to arrange your donation</p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={submitDonation} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <Input 
                        name="fullName" 
                        value={form.fullName} 
                        onChange={onChange} 
                        placeholder="Your full name" 
                        required 
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 h-12" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <Input 
                        name="phone" 
                        value={form.phone} 
                        onChange={onChange} 
                        placeholder="+27 63 731 0437" 
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 h-12" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <Input 
                        name="email" 
                        type="email" 
                        value={form.email} 
                        onChange={onChange} 
                        placeholder="you@example.com" 
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 h-12" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Donation Type *</label>
                      <select 
                        name="donationType" 
                        value={form.donationType} 
                        onChange={onChange} 
                        className="w-full h-12 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                      >
                        <option value="money">💰 Money</option>
                        <option value="food">🍽️ Food</option>
                        <option value="clothes">👕 Clothes</option>
                        <option value="blankets">🛏️ Blankets</option>
                        <option value="other">📦 Other</option>
                      </select>
                    </div>
                  </div>

                  {needsAmount && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Amount (ZAR) *</label>
                      <Input 
                        name="amount" 
                        value={form.amount} 
                        onChange={onChange} 
                        placeholder="e.g., 250" 
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 h-12" 
                      />
                      <p className="text-sm text-gray-500 mt-2">Every Rand makes a difference. Suggested amounts: R100, R250, R500, R1000</p>
                    </div>
                  )}

                  {needsItems && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Items Description *</label>
                      <Input 
                        name="items" 
                        value={form.items} 
                        onChange={onChange} 
                        placeholder="e.g., 5 blankets, 10kg mealie meal, winter jackets" 
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 h-12" 
                      />
                      <p className="text-sm text-gray-500 mt-2">Please describe what you&apos;d like to donate</p>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Contact Method *</label>
                      <select 
                        name="preferred" 
                        value={form.preferred} 
                        onChange={onChange} 
                        className="w-full h-12 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                      >
                        <option value="whatsapp">💬 WhatsApp Chat</option>
                        <option value="eft">🏦 EFT (request banking details)</option>
                        <option value="inperson">🤝 In-person Drop-off</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Message (Optional)</label>
                      <textarea 
                        name="message" 
                        rows={3} 
                        value={form.message} 
                        onChange={onChange} 
                        placeholder="Any special notes or questions..." 
                        className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" 
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      type="submit" 
                      disabled={donateDisabled || submitting} 
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                    >
                      <PhoneCall className="w-5 h-5 mr-2" />
                      {submitting ? "Opening WhatsApp..." : "Donate via WhatsApp"}
                    </Button>
                    <Link href="/contact" className="sm:ml-auto">
                      <Button 
                        variant="outline" 
                        className="px-8 py-6 rounded-xl text-lg border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                      >
                        <Banknote className="w-5 h-5 mr-2" /> 
                        Request EFT Details
                      </Button>
                    </Link>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mt-6">
                    <p className="text-sm text-emerald-800">
                      <strong>How it works:</strong> When you click &ldquo;Donate via WhatsApp&rdquo;, a chat will open with our team at +27 63 731 0437. 
                      We&apos;ll confirm your donation details and guide you through the next steps. All donations go directly to helping those in need.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Sponsor Options */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { 
                icon: Package, 
                label: "Food Parcel", 
                note: "Family pack", 
                donationType: "food" as DonationType, 
                preset: "Food parcel for a family",
                color: "from-orange-50 to-orange-100",
                borderColor: "border-orange-200"
              },
              { 
                icon: HandHeart, 
                label: "Blankets", 
                note: "Winter drive", 
                donationType: "blankets" as DonationType, 
                preset: "2 warm blankets",
                color: "from-blue-50 to-blue-100",
                borderColor: "border-blue-200"
              },
              { 
                icon: Gift, 
                label: "Clothing", 
                note: "Gently used", 
                donationType: "clothes" as DonationType, 
                preset: "Mixed clothing items",
                color: "from-purple-50 to-purple-100",
                borderColor: "border-purple-200"
              },
              { 
                icon: Banknote, 
                label: "R250 Gift", 
                note: "General fund", 
                donationType: "money" as DonationType, 
                preset: "250",
                color: "from-emerald-50 to-emerald-100",
                borderColor: "border-emerald-200"
              },
            ].map((opt) => {
              const Icon = opt.icon;
              return (
                <motion.div 
                  key={opt.label} 
                  variants={itemFadeUp} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{ once: true }} 
                  whileHover={{ y: -8, scale: 1.05 }} 
                  transition={{ duration: 0.3 }}
                >
                  <Card className={`p-6 h-full bg-gradient-to-br ${opt.color} border-2 ${opt.borderColor} hover:shadow-lg transition-shadow`}>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                          <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-lg">{opt.label}</div>
                          <div className="text-xs text-gray-600">{opt.note}</div>
                        </div>
                      </div>
                      <Button
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            donationType: opt.donationType,
                            amount: opt.donationType === "money" ? String(opt.preset) : f.amount,
                            items: opt.donationType !== "money" ? String(opt.preset) : f.items,
                          }))
                        }
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold"
                        size="lg"
                      >
                        Select This Option
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-gray-700 text-lg">
              Have questions or prefer to speak with someone first?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/27637310437" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                WhatsApp Us Anytime
              </a>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-2 border-gray-300">
                  Visit Contact Page
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Heart className="w-16 h-16 mx-auto text-white/90" />
            <h3 className="text-3xl md:text-4xl font-bold">
              Together, We Can Change Lives
            </h3>
            <p className="text-xl text-emerald-100 leading-relaxed max-w-3xl mx-auto">
              Every donation, no matter the size, creates ripples of hope in our community. 
              When we come together in faith and action, we become the hands and feet of Christ 
              to those who need it most.
            </p>
            <div className="pt-4">
              <p className="text-2xl font-semibold italic text-white">
                &ldquo;For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, 
                I was a stranger and you invited me in.&rdquo;
              </p>
              <p className="text-emerald-200 mt-2">— Matthew 25:35 (NIV)</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
