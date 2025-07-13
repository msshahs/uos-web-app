import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  ArrowRight,
  Shield,
  Waves,
  Anchor,
  FileText,
  Globe,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "VDR Data Analysis",
      description:
        "Our flagship service providing comprehensive voyage data recorder analysis.",
      icon: Shield,
      featured: true,
    },
    {
      title: "Port Captaincy & Loss Control",
      description: "Expert port operations and vessel management services.",
      icon: Anchor,
      featured: false,
    },
    {
      title: "Compliance & Vetting Audits",
      description:
        "Real-time support for PSC, vetting, and ISM/ISPS/MLC compliance.",
      icon: FileText,
      featured: false,
    },
    {
      title: "Crew Training",
      description:
        "Improving safety standards to reduce cargo and pollution claims.",
      icon: Users,
      featured: false,
    },
  ];

  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "4", label: "Global Offices" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="overflow-hidden">
      <style>{`
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .wave-bg {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0ea5e9 100%);
          position: relative;
          overflow: hidden;
        }
        
        .wave-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="%23ffffff"></path><path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="%23ffffff"></path><path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="%23ffffff"></path></svg>') bottom/cover no-repeat;
        }
        
        .ship-silhouette {
          position: absolute;
          bottom: 20%;
          right: 10%;
          opacity: 0.3;
          animation: float 8s ease-in-out infinite;
        }
        
        .glow-effect {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease;
        }
        
        .glow-effect:hover {
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.5);
          transform: translateY(-5px);
        }
      `}</style>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="bg-gradient-to-r from-slate-900 to-blue-900 text-white min-h-screen flex items-center justify-center relative"
      >
        <div className="ship-silhouette">
          <Globe className="w-32 h-32 text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              United Ocean Shipping
              <span className="block text-blue-300">NOLA, Inc.</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 font-light">
              Open to New Possibilities
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg text-blue-100 mb-4">
                Specializing in{" "}
                <span className="font-semibold text-white">
                  VDR Data Analysis
                </span>
              </p>
              <p className="text-blue-200">
                Comprehensive maritime services with global expertise
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Services")}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full glow-effect">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Contact")}>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full"
                >
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Waves className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center scroll-animate">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maritime solutions backed by decades of expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`scroll-animate hover:shadow-2xl transition-all duration-300 ${
                  service.featured ? "ring-2 ring-blue-500 glow-effect" : ""
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      service.featured ? "bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${
                        service.featured ? "text-blue-600" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  {service.featured && (
                    <div className="mt-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        Specialty Service
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 scroll-animate">
            <Link to={createPageUrl("Services")}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Navigate New Possibilities?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Connect with our maritime experts for comprehensive shipping
              solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full glow-effect">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("About")}>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg rounded-full"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
