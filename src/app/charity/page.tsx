"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HandHeart, Heart, Users, Gift, PhoneCall, Banknote, Package, Sparkles } from "lucide-react";

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
  { src: "/helping.jpeg", alt: "Serving meals to the poor" },
  { src: "/helping2.jpeg", alt: "Distributing food parcels" },
  { src: "/helping3.jpeg", alt: "Community outreach team" },
  { src: "/helping4.jpeg", alt: "Clothing donations and care" },
  { src: "/helping5.jpeg", alt: "Outreach to families" },
  { src: "/helping6.jpeg", alt: "Serving the community with love" },
  { src: "/helping7.jpeg", alt: "Love in action in our city" },
  { src: "/helping8.jpeg", alt: "Feeding program" },
  { src: "/helping10.jpeg", alt: "Community compassion" },
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

  const needsAmount = form.donationType === "money";
  const needsItems = form.donationType !== "money";

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
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Compassion in Action</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Charity & Outreach</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Your generosity feeds families, clothes the vulnerable, and brings hope to our city. Partner with us to
              put love into action.
            </p>
            <div className="flex justify-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Users className="w-4 h-4 text-emerald-600" /> Weekly Outreach</div>
              <div className="flex items-center gap-2"><HandHeart className="w-4 h-4 text-emerald-600" /> Feeding & Clothing</div>
              <div className="flex items-center gap-2"><Heart className="w-4 h-4 text-emerald-600" /> Healing & Care</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="mb-10 text-center">
            <motion.h2 variants={itemFadeUp} className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Recent Outreaches</motion.h2>
            <motion.p variants={itemFadeUp} className="text-gray-600 max-w-2xl mx-auto">Moments from our feeding schemes, clothing drives, and street ministry.</motion.p>
          </motion.div>
          <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((g, i) => (
              <motion.div key={g.src} variants={itemFadeUp} whileHover={{ y: -6 }}>
                <Card variant="glass" elevation="sm" accent="emerald" interactive className="overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3]">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover" priority={i < 3} />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="text-center mb-12">
            <motion.div variants={itemFadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Gift className="w-4 h-4" /> Make a Donation
            </motion.div>
            <motion.h2 variants={itemFadeUp} className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Support the Mission</motion.h2>
            <motion.p variants={itemFadeUp} className="text-gray-600 max-w-2xl mx-auto">Fill in the form to donate via WhatsApp. Prefer EFT or in-person? Choose your preferred method below and we’ll guide you.</motion.p>
          </motion.div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Donation Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={submitDonation} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input name="fullName" value={form.fullName} onChange={onChange} placeholder="Your full name" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input name="phone" value={form.phone} onChange={onChange} placeholder="+27 63 731 0437" className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Donation Type *</label>
                    <select name="donationType" value={form.donationType} onChange={onChange} className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option value="money">Money</option>
                      <option value="food">Food</option>
                      <option value="clothes">Clothes</option>
                      <option value="blankets">Blankets</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {needsAmount && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount (ZAR) *</label>
                    <Input name="amount" value={form.amount} onChange={onChange} placeholder="e.g., 250" className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                  </div>
                )}

                {needsItems && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Items *</label>
                    <Input name="items" value={form.items} onChange={onChange} placeholder="e.g., 5 blankets, 10kg mealie meal, winter jackets" className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Method *</label>
                    <select name="preferred" value={form.preferred} onChange={onChange} className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500">
                      <option value="whatsapp">WhatsApp Chat</option>
                      <option value="eft">EFT (request banking details)</option>
                      <option value="inperson">In-person Drop-off</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea name="message" rows={3} value={form.message} onChange={onChange} placeholder="Share any specifics or a note..." className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button type="submit" disabled={donateDisabled || submitting} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-xl">
                    <PhoneCall className="w-4 h-4 mr-2" />
                    {submitting ? "Opening WhatsApp..." : "Donate via WhatsApp"}
                  </Button>
                  <Link href="/contact" className="sm:ml-auto">
                    <Button variant="outline" className="px-8 py-6 rounded-xl">
                      <Banknote className="w-4 h-4 mr-2" /> Request EFT Details
                    </Button>
                  </Link>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                  By submitting, a WhatsApp chat will open with our team at +27 63 731 0437. We’ll confirm details and arrange next steps.
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Quick sponsor options */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: Package, label: "Food Parcel", note: "Family pack", donationType: "food" as DonationType, preset: "Food parcel for a family" },
              { icon: HandHeart, label: "Blankets", note: "Winter drive", donationType: "blankets" as DonationType, preset: "2 warm blankets" },
              { icon: Gift, label: "Clothing", note: "Gently used", donationType: "clothes" as DonationType, preset: "Mixed clothing items" },
              { icon: Banknote, label: "R250 Gift", note: "General fund", donationType: "money" as DonationType, preset: "250" },
            ].map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.div key={opt.label} variants={itemFadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ y: -6 }}>
                  <Card variant="glass" elevation="sm" accent="emerald" interactive className="p-5 h-full">
                    <CardContent>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{opt.label}</div>
                          <div className="text-xs text-gray-500">{opt.note}</div>
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
                        className="w-full"
                        variant="outline"
                      >
                        Use This Option
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10 text-sm text-gray-600">
            Prefer to chat first? <a href="https://wa.me/27637310437" target="_blank" rel="noopener" className="text-emerald-700 underline">WhatsApp us</a> anytime.
          </div>
        </div>
      </section>
    </div>
  );
}
