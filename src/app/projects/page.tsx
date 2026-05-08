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

      {/* Intro Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Services With Purpose</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Pastor Elijah believes that no person should go without employment. Through ElijahChurch Projects, we offer top-tier professional services to the community while empowering individuals with meaningful work. Browse our services below to see how we can assist you.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link href={`/projects/${service.id}`} key={service.id} className="group h-full">
                <Card className="h-full overflow-hidden border-0 shadow-xl shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 rounded-3xl bg-white group-hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="bg-emerald-500 p-3 rounded-2xl shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-emerald-600 font-medium text-sm mt-1">{service.subtitle}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <div className="pt-4 flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700">
                      <span>View Service Details</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
