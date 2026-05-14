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
  detailImage: string;
  gallery: string[];
  features: string[];
}> = {
  cleaning: {
    title: "Cleaning Services",
    subtitle: "Commercial & Industrial Excellence",
    description: "Top-tier cleaning solutions tailored for commercial, industrial, and residential spaces.",
    longDescription: "Our professional cleaning team is equipped to handle everything from daily office maintenance to deep industrial cleaning. We specialize in high-traffic commercial environments where hygiene and presentation are paramount. Using medical-grade disinfectants and advanced extraction machinery, we ensure that every square inch of your facility meets the highest international standards. Our staff is trained in specialized chemical handling and workplace safety, ensuring a seamless operation that never disrupts your core business activities. We take pride in being the silent force that keeps your professional image sparkling.",
    image: "/projects/cleaning_service.png",
    detailImage: "/projects/cleaning_detail.png",
    gallery: [
      "/projects/cleaning_1.png",
      "/projects/cleaning_2.png",
      "/projects/cleaning_3.png",
      "/projects/cleaning_4.png",
    ],
    features: [
      "Full Commercial Office Daily Maintenance",
      "Industrial Warehouse & Factory Deep Cleaning",
      "Post-Construction Site Debris Removal",
      "High-Pressure Steam Carpet & Upholstery Care",
      "Certified Medical-Grade Sanitization",
      "Retail Floor Stripping & Waxing",
      "Window & Glass Facade Cleaning",
      "Waste Management & Recycling Coordination",
    ],
  },
  electrical: {
    title: "Electrical Works",
    subtitle: "Expert Installations & Repairs",
    description: "Reliable and safe electrical installations, maintenance, and troubleshooting by certified professionals.",
    longDescription: "Our certified electrical team brings decades of combined experience to every circuit we wire. We handle complex industrial power distributions, commercial lighting designs, and precision residential troubleshooting. We understand that electrical integrity is the backbone of any modern operation, which is why we never compromise on safety or material quality. From upgrading outdated switchgear to implementing energy-efficient LED retrofits, we provide solutions that reduce your long-term energy costs while maximizing system uptime. Every wire pulled and every panel labeled is a testament to our commitment to engineering excellence.",
    image: "/projects/electrical_service.png",
    detailImage: "/projects/electrical_detail.png",
    gallery: [
      "/projects/electrical_1.png",
      "/projects/electrical_2.png",
      "/projects/electrical_3.png",
      "/projects/electrical_4.png",
    ],
    features: [
      "Commercial & Industrial Power Distribution",
      "Electrical Panel Design & Upgrades",
      "Energy-Efficient LED Lighting Retrofits",
      "24/7 Emergency Fault Detection & Repair",
      "Compliance Certificates (CoC) & Inspections",
      "Backup Power & UPS System Installation",
      "Data Cabling & Network Infrastructure",
      "Industrial Motor Control & Maintenance",
    ],
  },
  plumbing: {
    title: "Plumbing Services",
    subtitle: "Complete Plumbing Solutions",
    description: "From routine maintenance to complex installations, our plumbing experts deliver fast and durable solutions.",
    longDescription: "We provide comprehensive hydraulic engineering and plumbing services that keep your facilities running smoothly. Our team is expert in both pressurized water systems and gravity-fed drainage, ensuring optimal flow and zero leaks. We utilize acoustic leak detection technology and thermal imaging to find hidden issues before they become catastrophic failures. Whether it's a large-scale commercial bathroom renovation or maintaining the fire suppression lines in an industrial plant, we bring a level of precision that is rare in the trade. We don't just fix pipes; we engineer systems that last for generations.",
    image: "/projects/plumbing_service.png",
    detailImage: "/projects/plumbing_detail.png",
    gallery: [
      "/projects/plumbing_1.png",
      "/projects/plumbing_2.png",
      "/projects/plumbing_3.png",
      "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=600",
    ],
    features: [
      "Precision Acoustic Leak Detection",
      "Commercial Bathroom & Kitchen Overhauls",
      "High-Capacity Solar & Electric Geyser Systems",
      "Industrial Drain Cleaning & Hydro-Jetting",
      "Fire Suppression Pipework & Maintenance",
      "Water Pressure Regulation & Pumping",
      "Main Line Replacement & Installation",
      "Grease Trap Installation for Restaurants",
    ],
  },
  painting: {
    title: "Painting Services",
    subtitle: "Interior & Exterior Mastery",
    description: "Transform your spaces with our premium painting services. High-quality finishes for both interior and exterior walls.",
    longDescription: "Our painting division doesn't just apply color; we protect your investment. We understand the chemistry of coatings, ensuring that every surface is perfectly primed for its specific environmental conditions. From high-durability epoxy coatings for industrial floors to luxury decorative finishes for corporate boardrooms, we deliver a level of craftsmanship that elevates the entire property. Our meticulous preparation process—including surface repair, damp proofing, and precision masking—ensures a finish that is not only beautiful but exceptionally durable. We transform environments into inspiring spaces through the power of professional coating technology.",
    image: "/projects/painting_service.png",
    detailImage: "/projects/painting_detail.png",
    gallery: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600",
    ],
    features: [
      "Premium Interior & Exterior Coating",
      "Industrial Floor Epoxy & Specialized Finishes",
      "Expert Damp Proofing & Wall Restoration",
      "High-Reach Facade Painting & Maintenance",
      "Commercial Branding & Color Consultation",
      "Timber Treatment & Protective Varnishing",
      "Eco-Friendly Low-VOC Paint Options",
      "Specialized Texture & Decorative Finishes",
    ],
  },
  paving: {
    title: "Paving Services",
    subtitle: "Durable & Aesthetic Surfaces",
    description: "Expert paving for driveways, walkways, and patios. We provide beautiful, long-lasting hardscape solutions.",
    longDescription: "Our paving specialists are masters of civil earthworks and hardscape design. We understand that a great paved surface starts with what's underneath, which is why we spend more time on sub-base preparation and compaction than anyone else. Whether laying heavy-duty interlocking bricks for a logistics yard or intricate natural stone for a high-end patio, we ensure perfect levels and optimal drainage. Our surfaces are designed to withstand heavy loads and South Africa's harsh weather conditions without shifting or cracking. We create the foundations upon which your commercial and residential life happens.",
    image: "/projects/paving_service.png",
    detailImage: "/projects/paving_detail.png",
    gallery: [
      "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1590059353911-309191d5ef2e?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=600",
    ],
    features: [
      "Heavy-Duty Industrial & Logistics Paving",
      "Architectural Brick & Natural Stone Laying",
      "Precision Site Preparation & Earthworks",
      "Stormwater Drainage & Gradient Planning",
      "Paving Restoration & Chemical Sealing",
      "Retaining Wall Construction & Kerbing",
      "Commercial Parking Area Development",
      "Patio & Pool Surround Craftsmanship",
    ],
  },
  landscaping: {
    title: "Landscaping Services",
    subtitle: "Green Spaces & Garden Mastery",
    description: "Transform your outdoor areas with our premium landscaping and garden design services.",
    longDescription: "Our landscaping division brings artistry and horticulture expertise to your outdoor spaces. We specialize in creating sustainable, beautiful gardens that enhance the value of your property and provide a serene environment. From soil preparation and plant selection to installing complex irrigation systems and hardscape elements, we handle it all. Our team is trained in modern landscape architecture and eco-friendly gardening practices, ensuring that your green spaces thrive in South Africa's climate. We don't just plant gardens; we create living art.",
    image: "/projects/landscaping_service.png",
    detailImage: "/projects/landscaping_detail.png",
    gallery: [
      "/projects/landscaping_1.png",
      "/projects/landscaping_2.png",
      "/projects/landscaping_3.png",
      "/projects/landscaping_4.png",
    ],
    features: [
      "Custom Garden Design & Installation",
      "Automated Irrigation System Setup",
      "Lawn Installation & Maintenance",
      "Tree Felling & Pruning",
      "Soil Conditioning & Fertilization",
      "Hardscape Integration (Paths, Borders)",
      "Seasonal Flower Bed Planting",
      "Eco-Friendly & Indigenous Plant Selection",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: serviceId } = await params;
  const service = serviceData[serviceId];
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | ElijahChurch Projects`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: serviceId } = await params;
  const service = serviceData[serviceId];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[500px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-emerald-950/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pb-20">
          <Link href="/projects" className="inline-flex items-center text-emerald-300 hover:text-white transition-all mb-8 font-semibold tracking-wide uppercase text-sm group">
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-2" />
            Back to Project Hub
          </Link>
          <div className="space-y-6">
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-emerald-500/30 text-emerald-100 border border-emerald-500/40 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
              {service.subtitle}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl tracking-tight">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section Area */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content Body */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/60 p-10 md:p-16 border border-gray-100">
              <div className="space-y-10">
                <section>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Service Overview</h2>
                  </div>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">
                    {service.longDescription}
                  </p>
                </section>

                <div className="h-px bg-gray-100" />

                <section>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Scope of Work</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center list-none group">
                        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mr-4 group-hover:bg-emerald-500 transition-colors">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-gray-700 text-lg font-medium">{feature}</span>
                      </li>
                    ))}
                  </div>
                </section>

                <div className="h-px bg-gray-100" />

                {/* New Section: Why Choose Us */}
                <section>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Why Choose Our Team?</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-3xl bg-gray-50 space-y-4">
                      <h4 className="text-xl font-bold text-emerald-700">Skilled Craftsmanship</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Our technicians are not just workers; they are trained specialists who take immense pride in their God-given skills.
                      </p>
                    </div>
                    <div className="p-8 rounded-3xl bg-gray-50 space-y-4">
                      <h4 className="text-xl font-bold text-emerald-700">Unwavering Integrity</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Built on the foundation of Christ, our business practices are transparent, honest, and reliable at every step.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="h-px bg-gray-100" />

                {/* New Section: Gallery */}
                <section>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-1 bg-emerald-500 rounded-full" />
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Project Gallery</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    {service.gallery.map((img, idx) => (
                      <div key={idx} className="relative h-48 md:h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
                        <Image
                          src={img}
                          alt={`${service.title} gallery ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Sidebar / CTA Area */}
          <div className="space-y-8">
            <div className="sticky top-28 space-y-8">
              <div className="bg-emerald-950 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl -mr-16 -mt-16" />
                <div className="relative z-10 space-y-8">
                  <div className="w-20 h-20 bg-emerald-500 text-white rounded-3xl flex items-center justify-center shadow-lg transform -rotate-6">
                    <CalendarCheck className="w-10 h-10" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold leading-tight">Secure Your Service Today</h3>
                    <p className="text-emerald-100/70 text-lg leading-relaxed">
                      APOSTLE Elijah founder and General overseer of Elijah church of christ
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Link href="/contact" className="block w-full">
                      <Button size="lg" className="w-full bg-white hover:bg-emerald-50 text-emerald-950 rounded-2xl py-8 text-xl font-bold shadow-xl transition-all">
                        Get a Free Quote
                      </Button>
                    </Link>
                    <Link href="tel:+27637310437" className="block w-full">
                      <Button variant="outline" size="lg" className="w-full rounded-2xl py-8 text-white border-white/20 hover:bg-white/10 font-bold text-lg">
                        <Phone className="w-5 h-5 mr-3" />
                        Direct Helpline
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pastor & Foundational Verses */}
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
                <div className="relative h-80 w-full">
                  <Image
                    src="/main-pasto.jpeg"
                    alt="Pastor Elijah"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white font-bold text-lg leading-tight">APOSTLE Elijah</p>
                    <p className="text-emerald-400 text-sm font-medium">Founder & General Overseer</p>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <p className="text-gray-900 font-bold leading-relaxed">
                    Serving as a good stewardship our General overseer Apostle Elijah lives and followers the word of God.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                      <p className="text-sm text-gray-600 italic">"Moreover, it is required of stewards that they be found faithful." <span className="block font-bold text-gray-900 not-italic mt-1">— 1 Cor 4:2</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                      <p className="text-sm text-gray-600 italic">"Each of you should use whatever gift you have received to serve others..." <span className="block font-bold text-gray-900 not-italic mt-1">— 1 Peter 4:10</span></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 shrink-0" />
                      <p className="text-sm text-gray-600 italic">"Whatever you do, work heartily, as for the Lord and not for men." <span className="block font-bold text-gray-900 not-italic mt-1">— Col 3:23</span></p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Diversity & Mission Note */}
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  Our Community Impact
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed italic">
                  "We take pride in our diverse and skilled team of professional black men and women who lead our projects with excellence, reflecting the vibrant spirit of Johannesburg."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
