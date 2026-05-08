import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Droplets, Paintbrush, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "ElijahChurch Projects",
  description: "Discover our professional services including Cleaning, Electrical, Plumbing, Painting, and Paving.",
};

const services = [
  {
    id: "cleaning",
    title: "Cleaning Services",
    subtitle: "Commercial & Industrial",
    description: "Top-tier cleaning solutions tailored for commercial, industrial, and residential spaces, ensuring a spotless and hygienic environment.",
    image: "/projects/cleaning_service.png",
    icon: Sparkles,
  },
  {
    id: "electrical",
    title: "Electrical Works",
    subtitle: "Expert Installations & Repairs",
    description: "Reliable and safe electrical installations, maintenance, and troubleshooting by our team of certified professionals.",
    image: "/projects/electrical_service.png",
    icon: Zap,
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    subtitle: "Complete Plumbing Solutions",
    description: "From routine maintenance to complex installations, our plumbing experts deliver fast and durable solutions.",
    image: "/projects/plumbing_service.png",
    icon: Droplets,
  },
  {
    id: "painting",
    title: "Painting Services",
    subtitle: "Interior & Exterior Mastery",
    description: "Transform your spaces with our premium painting services. High-quality finishes for both interior and exterior walls.",
    image: "/projects/painting_service.png",
    icon: Paintbrush,
  },
  {
    id: "paving",
    title: "Paving Services",
    subtitle: "Durable & Aesthetic Surfaces",
    description: "Expert paving for driveways, walkways, and patios. We provide beautiful, long-lasting hardscape solutions.",
    image: "/projects/paving_service.png",
    icon: Hammer,
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects/projects_hero.png"
            alt="ElijahChurch Projects Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald-950/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent opacity-80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 mt-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium uppercase tracking-widest mb-4">
            <span>Empowering Hands, Transforming Lives</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg tracking-tight">
            ElijahChurch <span className="text-emerald-400">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-50/90 font-light max-w-2xl mx-auto leading-relaxed">
            "God has Given every man with a skill."
            <span className="block mt-2 text-sm text-emerald-300 font-medium tracking-widest uppercase">— Exodus 31:6 —</span>
          </p>
        </div>
      </section>

      {/* Intro Section with Expanded Purpose */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-60" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Professional Excellence Built on <span className="text-emerald-600">Faith</span></h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Pastor Elijah believes that no person should go without employment. Through ElijahChurch Projects, we offer top-tier professional services to the community while empowering individuals with meaningful work. Every project we undertake is an opportunity to manifest God's excellence through human skill and dedication.
          </p>
          <div className="grid md:grid-cols-3 gap-12 pt-12">
            <div className="space-y-4">
              <div className="text-3xl font-bold text-emerald-600">100%</div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Local Employment</p>
              <p className="text-gray-600 text-sm">We prioritize hiring within our community to foster economic growth and stability.</p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-emerald-600">Faith-Based</div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Integrity & Honor</p>
              <p className="text-gray-600 text-sm">Our work is a form of worship, ensuring the highest standards of honesty and quality.</p>
            </div>
            <div className="space-y-4">
              <div className="text-3xl font-bold text-emerald-600">Skills-First</div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Continuous Training</p>
              <p className="text-gray-600 text-sm">We invest in our workers through advanced training in modern industrial techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-12 mb-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link href={`/projects/${service.id}`} key={service.id} className="group h-full">
                <Card className="h-full overflow-hidden border-0 shadow-2xl shadow-emerald-900/5 hover:shadow-emerald-900/15 transition-all duration-500 rounded-[2.5rem] bg-white group-hover:-translate-y-3">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                      <div className="bg-emerald-500 p-4 rounded-2xl shadow-xl">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-10 space-y-5">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-emerald-600 font-semibold text-sm mt-1 uppercase tracking-widest">{service.subtitle}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed line-clamp-3 text-base">
                      {service.description}
                    </p>
                    <div className="pt-6 flex items-center text-emerald-600 font-bold group-hover:text-emerald-700 text-lg">
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Mission Section - Added Content */}
      <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80')] bg-fixed" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold leading-tight">Our Commitment to <br /><span className="text-emerald-400">Economic Empowerment</span></h2>
              <div className="space-y-6 text-emerald-50/80 text-lg leading-relaxed">
                <p>
                  At ElijahChurch Projects, we don't just build structures or clean spaces; we build lives. We believe that every individual possesses a God-given talent that, when nurtured, can provide dignity and security through employment.
                </p>
                <p>
                  Our initiative serves as a bridge between faith and industry. By maintaining the highest standards of professional workmanship, we prove that faith-led organizations can compete at the highest levels of the commercial and industrial sectors.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <span className="text-emerald-400 font-bold">01</span>
                  </div>
                  <span className="font-medium">Skill Validation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <span className="text-emerald-400 font-bold">02</span>
                  </div>
                  <span className="font-medium">Dignified Labor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <span className="text-emerald-400 font-bold">03</span>
                  </div>
                  <span className="font-medium">Godly Integrity</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold text-emerald-400">Exodus 31:6 Perspective</h3>
                <p className="italic text-emerald-100/90 text-lg">
                  "And I, behold, I have given with him Aholiab... and in the hearts of all that are wise hearted I have put wisdom, that they may make all that I have commanded thee."
                </p>
                <div className="h-px bg-white/10" />
                <p className="text-sm text-emerald-300">
                  This scripture guides our philosophy: Wisdom and skill are divine gifts meant to be used for the benefit of the community and the glory of God.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
