import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Droplets, Paintbrush, Hammer, Leaf } from "lucide-react";

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
  {
    id: "landscaping",
    title: "Landscaping Services",
    subtitle: "Green Spaces & Garden Mastery",
    description: "Transform your outdoor areas with our premium landscaping and garden design services.",
    image: "/projects/landscaping_service.png",
    icon: Leaf,
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

      {/* Intro Section with Pastor's Image */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-60" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -ml-48 -mb-48 opacity-60" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            {/* Pastor's Image */}
            <div className="md:col-span-5">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/main-pasto.jpeg"
                  alt="Pastor Elijah"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bible Verses */}
              <div className="mt-8 space-y-6 bg-emerald-950 p-8 rounded-3xl text-white shadow-xl border border-emerald-800/50">
                <p className="text-emerald-100 font-medium leading-relaxed">
                  Serving as a good stewardship our General overseer Apostle Elijah lives and followers the word of God.
                </p>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2.5 shrink-0" />
                  <div>
                    <p className="font-bold text-emerald-400">1 Corinthians 4:2 (ESV)</p>
                    <p className="text-emerald-50/90 italic leading-relaxed">"Moreover, it is required of stewards that they be found faithful."</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2.5 shrink-0" />
                  <div>
                    <p className="font-bold text-emerald-400">1 Peter 4:10 (NIV)</p>
                    <p className="text-emerald-50/90 italic leading-relaxed">"Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms."</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2.5 shrink-0" />
                  <div>
                    <p className="font-bold text-emerald-400">Colossians 3:23 (ESV)</p>
                    <p className="text-emerald-50/90 italic leading-relaxed">"Whatever you do, work heartily, as for the Lord and not for men."</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="md:col-span-7 space-y-6">
              <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">APOSTLE Elijah founder and General overseer of Elijah church of christ</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Pastor Elijah believes that no person should go without employment. Through ElijahChurch Projects, we offer top-tier professional services to the community while empowering individuals with meaningful work. Every project we undertake is an opportunity to manifest God's excellence through human skill and dedication.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-emerald-600">100%</div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Local Employment</p>
                  <p className="text-gray-600 text-sm">We prioritize hiring within our community to foster economic growth and stability.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-emerald-600">Faith-Based</div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Integrity & Honor</p>
                  <p className="text-gray-600 text-sm">Our work is a form of worship, ensuring the highest standards of honesty and quality.</p>
                </div>
              </div>
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
 
      {/* Project Gallery Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Project Gallery</h2>
            <div className="w-24 h-1.5 bg-emerald-500 rounded-full mx-auto mb-6" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A glimpse into our recent work and community transformation projects.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.41.49 PM.jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.41.51 PM.jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.48 PM (1).jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.48 PM.jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.49 PM.jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.50 PM (1).jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.50 PM.jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.51 PM.jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.52 PM (2).jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.52 PM.jpeg",
              "/new-imagegallary/WhatsApp Image 2026-05-13 at 5.42.53 PM.jpeg"
            ].map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <Image
                  src={img}
                  alt={`Project Gallery ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-emerald-950/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Get Involved with Youth Empowerment</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Are you a qualified plumber, electrician, or do you have any other skill but are currently unemployed? Whether you want to volunteer, find employment, or learn a skill through our church program, fill out the form below.
            </p>
          </div>
          
          <form className="bg-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">I am looking to:</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none bg-white">
                <option>Select an option...</option>
                <option>Volunteer to work on Elijah church projects</option>
                <option>Looking for employment</option>
                <option>Learn a skill through our church program</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Message / Motivation</label>
              <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none h-32" placeholder="Tell us more about yourself..."></textarea>
            </div>
            
            <Button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl text-lg font-bold transition-all duration-300">
              Submit Application
            </Button>
          </form>
        </div>
      </section>

      {/* Donate Section */}
      <section className="relative py-24 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80')] bg-fixed" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium uppercase tracking-widest text-emerald-300">
                Support Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Donate to Elijah <br /><span className="text-emerald-400">Youth Projects</span></h2>
              <div className="space-y-4 text-emerald-50/80 text-lg leading-relaxed">
                <p>
                  Our projects are designed to create employment opportunities to reduce hopelessness, crime, and drug abuse in our communities. We give skills to the youth and help them find dignity in work.
                </p>
                <p>
                  We also have to add youth projects to teach skills to children who are vulnerable and on streets helping them to become useful to society.
                </p>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mt-6">
                  <h4 className="font-bold text-emerald-300 mb-2">Monthly Partnership Subscription — R200</h4>
                  <p className="text-sm text-emerald-50/90 leading-relaxed">
                    Subscribe to become a partner of Elijah projects. Partners get discounted services for the work done by our team. Subscribe to qualify for discounts on all quotations for job cards on plumbing, painting and electrical work.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 p-8 md:p-10 rounded-3xl shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Make a Donation</h3>
              <p className="text-gray-600 text-sm">Every contribution helps us train one more youth and keep them off the streets.</p>
              
              <div className="grid grid-cols-3 gap-4">
                <button className="py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-colors">R100</button>
                <button className="py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-colors">R200</button>
                <button className="py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-xl hover:bg-emerald-50 transition-colors">R500</button>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Custom Amount (ZAR)</label>
                <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" placeholder="Enter amount" />
              </div>
              
              <Button type="button" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl text-lg font-bold transition-all duration-300">
                Donate via Secure Payment
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                For direct bank transfers, please contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
