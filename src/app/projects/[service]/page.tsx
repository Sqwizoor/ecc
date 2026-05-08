import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Phone, CalendarCheck } from "lucide-react";
import { notFound } from "next/navigation";

// Service Data mapping
const serviceData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
}> = {
  cleaning: {
    title: "Cleaning Services",
    subtitle: "Commercial & Industrial Excellence",
    description: "Top-tier cleaning solutions tailored for commercial, industrial, and residential spaces.",
    longDescription: "Our professional cleaning team is equipped to handle everything from daily office maintenance to deep industrial cleaning. We use state-of-the-art equipment and eco-friendly products to ensure a spotless, hygienic environment for your employees and clients. Excellence and attention to detail are at the heart of what we do.",
    image: "/projects/cleaning_service.png",
    features: [
      "Commercial Office Cleaning",
      "Industrial & Warehouse Cleaning",
      "Post-Construction Cleanup",
      "Deep Carpet & Floor Care",
      "Eco-Friendly Cleaning Products",
    ],
  },
  electrical: {
    title: "Electrical Works",
    subtitle: "Expert Installations & Repairs",
    description: "Reliable and safe electrical installations, maintenance, and troubleshooting by certified professionals.",
    longDescription: "Our certified electricians provide comprehensive electrical services ranging from simple repairs to full system installations. Whether it's upgrading an electrical panel, wiring a new commercial space, or troubleshooting complex issues, we deliver safe, reliable, and up-to-code solutions.",
    image: "/projects/electrical_service.png",
    features: [
      "Commercial & Residential Wiring",
      "Panel Upgrades & Maintenance",
      "Lighting Design & Installation",
      "Emergency Fault Finding",
      "Compliance Certificates",
    ],
  },
  plumbing: {
    title: "Plumbing Services",
    subtitle: "Complete Plumbing Solutions",
    description: "From routine maintenance to complex installations, our plumbing experts deliver fast and durable solutions.",
    longDescription: "We offer professional plumbing services for both residential and commercial properties. Our experienced plumbers handle leak detection, pipe replacements, bathroom fittings, and emergency repairs with efficiency and professionalism, ensuring your systems flow perfectly.",
    image: "/projects/plumbing_service.png",
    features: [
      "Leak Detection & Repair",
      "Bathroom & Kitchen Plumbing",
      "Geyser Installations",
      "Blocked Drains & Pipe Cleaning",
      "Commercial Plumbing Systems",
    ],
  },
  painting: {
    title: "Painting Services",
    subtitle: "Interior & Exterior Mastery",
    description: "Transform your spaces with our premium painting services. High-quality finishes for both interior and exterior walls.",
    longDescription: "Bring new life to your property with our expert painting services. Our skilled painters prepare surfaces meticulously and apply high-quality paints for a flawless, long-lasting finish. We handle everything from single rooms to full commercial exterior repainting.",
    image: "/projects/painting_service.png",
    features: [
      "Interior & Exterior Painting",
      "Surface Preparation & Plastering",
      "Roof Painting",
      "Commercial Property Painting",
      "Color Consultation",
    ],
  },
  paving: {
    title: "Paving Services",
    subtitle: "Durable & Aesthetic Surfaces",
    description: "Expert paving for driveways, walkways, and patios. We provide beautiful, long-lasting hardscape solutions.",
    longDescription: "Our paving contractors specialize in creating durable, visually stunning outdoor surfaces. From elegant brick driveways to practical commercial parking areas, we ensure a solid foundation and precise laying techniques for a finish that stands the test of time.",
    image: "/projects/paving_service.png",
    features: [
      "Brick & Block Paving",
      "Driveways & Walkways",
      "Commercial Parking Areas",
      "Patio & Courtyard Paving",
      "Paving Repair & Restoration",
    ],
  },
};

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const service = serviceData[params.service];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | ElijahChurch Projects`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = serviceData[params.service];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto w-full px-4 pb-16">
          <Link href="/projects" className="inline-flex items-center text-emerald-300 hover:text-white transition-colors mb-6 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 text-sm font-semibold tracking-wide uppercase">
              {service.subtitle}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-5 gap-0">
            {/* Main Content */}
            <div className="md:col-span-3 p-8 md:p-12 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mr-3 mt-0.5" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar / CTA */}
            <div className="md:col-span-2 bg-emerald-50 p-8 md:p-12 border-l border-emerald-100 flex flex-col justify-center">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-emerald-100 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Ready to Start?</h3>
                <p className="text-gray-600">
                  Contact us today to discuss your project requirements and receive a professional quote.
                </p>
                <div className="pt-4 space-y-4">
                  <Link href="/contact" className="block w-full">
                    <Button size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-emerald-200">
                      Request a Quote
                    </Button>
                  </Link>
                  <Link href="tel:+27000000000" className="block w-full">
                    <Button variant="outline" size="lg" className="w-full rounded-full py-6 text-emerald-700 border-emerald-200 hover:bg-emerald-50 font-semibold">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
