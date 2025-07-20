import React, { useEffect } from "react";
import {
  Shield,
  Anchor,
  Ship,
  Users,
  Search,
  FileText,
  Waves,
  Award,
  AlertTriangle,
  ClipboardCheck,
  FileSearch,
  BadgeCheck,
  Container,
  Ruler,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import VesselSlider from "../components/VesselSlider";

export default function Services() {
  const services = [
    {
      title: "VDR Data Analysis",
      description:
        "In-depth analysis of Voyage Data Recorder information to enhance navigational safety, verify compliance, and provide insights for operational improvements.",
      icon: Shield,
      image: "/images/vdr.png",
      features: [
        "Incident investigation support",
        "Performance monitoring",
        "Compliance verification",
        "Navigational practice assessment",
      ],
      featured: true,
    },
    {
      title: "Port Captaincy and Loss Control",
      description:
        "Expert oversight of port operations, cargo handling, and vessel-to-shore interface to ensure efficiency and prevent loss or damage.",
      icon: Anchor,
      image: "/images/port_captaincy.png",
      features: [
        "Loading/discharging supervision",
        "Stowage planning",
        "Risk mitigation",
        "Liaison with port authorities",
      ],
      featured: false,
    },
    {
      title: "Pollution and Safety Advisor",
      description:
        "Specialized advisory services to ensure your operations comply with environmental regulations and uphold the highest safety standards.",
      icon: Waves,
      image: "/images/pollution.png",
      features: [
        "MARPOL compliance",
        "Safety Management System (SMS) enhancement",
        "Pollution prevention strategies",
        "Emergency response planning",
      ],
      featured: false,
    },
    {
      title: "Pre-Purchase Survey",
      description:
        "Comprehensive vessel inspections and condition assessments for prospective buyers, delivering detailed reports to inform investment decisions.",
      icon: Search,
      image: "/images/pre_purchase.png",
      features: [
        "Structural integrity checks",
        "Machinery and equipment evaluation",
        "Documentation review",
        "Fair market valuation",
      ],
      featured: false,
    },
    {
      title: "Ship & Shore Facility Damage Survey",
      description:
        "Expert investigation and assessment of damages to vessels and port facilities, providing impartial reports for insurance and legal purposes.",
      icon: AlertTriangle,
      image: "/images/ship_shore_damage.png",
      features: [
        "Damage cause determination",
        "Repair cost estimation",
        "Extent of damage reporting",
        "Third-party liability assessment",
      ],
      featured: false,
    },
    {
      title: "Underwater Hull Inspection with Sea Drone",
      description:
        "Advanced, non-intrusive underwater inspections using state-of-the-art ROVs for hull, propeller, and rudder assessments.",
      icon: Ship,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Class-approved UWILD",
        "Hull coating and fouling analysis",
        "Damage and crack detection",
        "High-resolution video",
      ],
      featured: false,
    },
    {
      title: "Vessel & Cargo Condition Assessment",
      description:
        "Thorough surveys to ascertain the condition of a vessel and its cargo, crucial for charter agreements, insurance, and quality control.",
      icon: ClipboardCheck,
      image: "/images/cargo_assessment.png",
      features: [
        "Hatch cover and hold inspections",
        "Cargo-worthiness assessment",
        "Pre-loading surveys",
        "Condition reports",
      ],
      featured: false,
    },
    {
      title: "Accident/Incident Investigations",
      description:
        "Impartial investigations for Owners and P&I Clubs to determine the root cause of maritime accidents and incidents.",
      icon: FileSearch,
      image: "/images/accident.png",
      features: [
        "Root cause analysis",
        "Evidence collection",
        "Witness interviews",
        "Expert testimony",
      ],
      featured: false,
    },
    {
      title: "PSC, Vetting, and ISM/ISPS/MLC Audits",
      description:
        "Comprehensive preparation and real-time support for Port State Control inspections, vetting, and internal audits for compliance.",
      icon: FileText,
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: [
        "Pre-inspection preparedness",
        "On-board audit support",
        "Gap analysis",
        "SIRE/CDI vetting prep",
      ],
      featured: false,
    },
    {
      title: "Compliance Audits (ISO, etc.)",
      description:
        "Systematic audits against international standards like ISM, ISPS, ISO 9001/14001, and the MLC Code.",
      icon: BadgeCheck,
      image: "/images/iso.png",
      features: [
        "Management system review",
        "ISO certification support",
        "MLC compliance checks",
        "Continuous improvement",
      ],
      featured: false,
    },
    {
      title: "Loading/Discharging Surveys",
      description:
        "Specialized supervision for loading and discharging of heavy lifts, project cargo, and sensitive materials like steel products.",
      icon: Container,
      image: "/images/loading_discharging.png",
      features: [
        "Lashing & securing surveys",
        "Heavy lift supervision",
        "Project cargo planning",
        "Damage prevention",
      ],
      featured: false,
    },
    {
      title: "On/Off Hire, Bunker & Draft Surveys",
      description:
        "Accurate surveys for vessel condition on charter, bunker quantity, and cargo weight by draft measurement.",
      icon: Ruler,
      image: "/images/on_off.png",
      features: [
        "Vessel condition reports",
        "Bunker quantity verification",
        "Precise draft calculations",
        "Charter party compliance",
      ],
      featured: false,
    },
    {
      title: "Crew Training",
      description:
        "Targeted training programs to enhance crew safety awareness, improve operational standards, and reduce cargo and pollution-related claims.",
      icon: Users,
      image: "/images/crew_training.jpg",
      features: [
        "Safety culture workshops",
        "Cargo handling best practices",
        "Pollution prevention training",
        "Regulatory updates",
      ],
      featured: false,
    },
  ];

  const vesselTypes = [
    {
      name: "LNG Ships",
      icon: "🚢",
      description: "Liquefied Natural Gas carriers",
    },
    {
      name: "LPG Ships",
      icon: "⛽",
      description: "Liquefied Petroleum Gas vessels",
    },
    {
      name: "Oil Tankers",
      icon: "🛢️",
      description: "Crude oil and petroleum carriers",
    },
    {
      name: "Bulk Carriers",
      icon: "🌾",
      description: "Wheat, rice, and grain transport",
    },
    {
      name: "Coal Carriers",
      icon: "🪨",
      description: "Coal and mineral transport",
    },
    {
      name: "Container Ships",
      icon: "📦",
      description: "Containerized cargo vessels",
    },
  ];

  const featuredService = services.find((s) => s.featured);
  const otherServices = services.filter((s) => !s.featured);
  const heroFade = useScrollFadeIn();
  const featuredFade = useScrollFadeIn();

  return (
    <div className="overflow-hidden">
      <style>{`
        
        .glow-border {
          position: relative;
          overflow: hidden;
        }
        
        .glow-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #3b82f6, #0ea5e9, #3b82f6);
          border-radius: inherit;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .glow-border:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div
          ref={heroFade.ref}
          style={heroFade.style}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div>
            <Award className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h1 className="text-4xl sm:text-7xl font-bold mb-6">
              Our <span className="text-blue-300">Services</span>
            </h1>
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
              Comprehensive maritime solutions designed to meet the evolving
              needs of the global shipping industry
            </p>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 ">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Flagship Service
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Leading the industry with specialized VDR data analysis expertise
            </p>
          </div>

          {featuredService && (
            <Card className=" glow-border service-card max-w-4xl mx-auto">
              <div
                ref={featuredFade.ref}
                style={featuredFade.style}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-blue-600 mr-3" />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-md font-medium">
                      Specialty Service
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {featuredService.title}
                  </h3>
                  <p className="text-md sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredService.description}
                  </p>
                  <div className="text-md sm:text-lg space-y-2 mb-6">
                    {featuredService.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={createPageUrl("Contact")}>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Contact Us
                    </Button>
                  </Link>
                </div>
                <div className="relative overflow-hidden rounded-r-lg">
                  <img
                    src={featuredService.image}
                    alt={featuredService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* All Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 ">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Professional maritime services tailored to your specific
              operational requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, index) => {
              const fade = useScrollFadeIn();
              return (
                <Card
                  key={index}
                  className=" service-card h-full flex flex-col"
                >
                  <div ref={fade.ref} style={fade.style}>
                    <div className="relative h-55 overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 mb-4 text-md leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-gray-600 text-md">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vessel Types */}
      {/* <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 ">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Vessel Types We Serve
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive services across all major maritime vessel categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {vesselTypes.map((vessel, index) => {
              const fade = useScrollFadeIn();
              return (
                <Card
                  key={index}
                  className=" bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div ref={fade.ref} style={fade.style}>
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{vessel.icon}</div>
                      <h3 className="font-semibold text-white mb-2">
                        {vessel.name}
                      </h3>
                      <p className="text-xs text-blue-200">
                        {vessel.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section> */}
      <VesselSlider />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Connect with our maritime experts to discuss your specific
              requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl rounded-full">
                  Contact Us
                </Button>
              </Link>
              <Link to={createPageUrl("About")}>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-xl rounded-full"
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
