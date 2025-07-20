import React from "react";
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
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const heroAnim = useScrollFadeIn();
  const statsAnim = useScrollFadeIn();
  const servicesAnim = useScrollFadeIn();
  const ctaAnim = useScrollFadeIn();

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
    { number: "50+", label: "Years Experience" },
    { number: "1000+", label: "Projects Completed" },
    { number: "4", label: "Global Offices" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 z-0"
          src="/images/aboutvid.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-slate-900/60  z-10" />

        {/* Content */}
        <div
          ref={heroAnim.ref}
          style={heroAnim.style}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-4xl sm:text-7xl font-bold mb-4">
            United Ocean Shipping
          </h1>
          <p className="text-xl sm:text-3xl mb-4">Open to New Possibilities</p>

          <div className="text-blue-100 text-xl mb-6 h-8">
            <Typewriter
              words={[
                "VDR Navigational Audits",
                "Port Captaincy & Compliance",
                "Cargo Condition Surveys",
                "24/7 Global Support",
              ]}
              loop
              cursor
              typeSpeed={60}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Services")}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl rounded-full">
                Explore Our Services
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-xl rounded-full"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsAnim.ref}
            style={statsAnim.style}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xl font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesAnim.ref}
            style={servicesAnim.style}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive maritime solutions backed by decades of expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      service.featured ? "bg-blue-100" : "bg-gray-100"
                    }`}
                  >
                    <service.icon
                      className={`w-8 h-8 ${
                        service.featured ? "text-blue-600 " : "text-gray-600"
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-md leading-relaxed">
                    {service.description}
                  </p>
                  {service.featured && (
                    <div className="mt-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Specialty Service
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Services")}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={ctaAnim.ref} style={ctaAnim.style}>
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              Ready to Navigate New Possibilities?
            </h2>
            <p className="text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Connect with our maritime experts for comprehensive shipping
              solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl rounded-full">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("About")}>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-xl rounded-full"
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
