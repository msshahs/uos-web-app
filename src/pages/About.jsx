import React from "react";
import {
  Users,
  Globe,
  Award,
  Anchor,
  Ship,
  Shield,
  BadgeCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function About() {
  const heroAnim = useScrollFadeIn();
  const storyAnim = useScrollFadeIn();
  const valuesAnim = useScrollFadeIn();
  const globalAnim = useScrollFadeIn();
  const missionAnim = useScrollFadeIn();

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Uncompromising commitment to maritime safety standards and regulatory compliance",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "International presence with local expertise across major maritime hubs",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Building lasting relationships through trust, transparency, and reliability",
    },
    {
      icon: BadgeCheck,
      title: "Quality Control",
      description:
        "Ensuring the highest standards through detailed inspections, audits, and continuous improvement across all maritime operations",
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-start bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 sm:px-12">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 z-0"
          src="/images/vid12.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-slate-900/60 z-10" />

        <div
          ref={heroAnim.ref}
          style={heroAnim.style}
          className="relative z-20 max-w-4xl text-left"
        >
          <div className="floating-ship mb-6">
            <Ship className="w-16 h-16 text-blue-300" />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-300">UOS NOLA</span>
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-lg">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-blue-100">
              "We provide our clients with a formidable range of technical and
              service skills, covering inspections. ISM / ISPS/ISO /
              Navigational / Environmental / Cargo / Bunker Audits, Accident /
              Incident Investigation for Owners and P&I Clubs, Replay & Analyse
              VDR Data, Consultancy, Training and Supervision for the Maritime
              Industry. So that their Superintendents spend less time on the
              road and more time on proactive planning."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={storyAnim.ref} style={storyAnim.style}>
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
                Our Maritime Legacy
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-xl">
                <p>
                  United Ocean Shipping NOLA, Inc. has been at the forefront of
                  maritime excellence for over five decades, specializing in
                  comprehensive shipping solutions and technical consultancy
                  services.
                </p>
                <p>
                  Our flagship service,{" "}
                  <span className="font-semibold text-blue-600">
                    VDR Navigational Audits
                  </span>
                  , represents the pinnacle of our technical expertise, helping
                  vessels worldwide maintain the highest safety and operational
                  standards.
                </p>
                <p>
                  From our strategic locations in Houston, Portland, India, and
                  Abu Dhabi, we deliver world-class maritime services that
                  encompass vessel management, safety advisory, technical
                  surveys, and crew training.
                </p>
              </div>
            </div>
            <div ref={storyAnim.ref} style={storyAnim.style}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96"
                  alt="Maritime vessel at sea"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={valuesAnim.ref}
            style={valuesAnim.style}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every aspect of our maritime operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={globalAnim.ref}
            style={globalAnim.style}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Global Maritime Network
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Strategic locations worldwide to serve your maritime needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                location: "Houston, Texas",
                flag: "🇺🇸",
                specialty: "Gulf Coast Operations",
              },
              {
                location: "Portland, Oregon",
                flag: "🇺🇸",
                specialty: "Pacific Northwest",
              },
              {
                location: "India",
                flag: "🇮🇳",
                specialty: "Asian Maritime Hub",
              },
              {
                location: "Abu Dhabi, UAE",
                flag: "🇦🇪",
                specialty: "Middle East Operations",
              },
            ].map((office, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{office.flag}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {office.location}
                  </h3>
                  <p className="text-lg text-gray-600">{office.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={missionAnim.ref} style={missionAnim.style}>
            <Anchor className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-2xl text-blue-200 mb-8 max-w-6xl mx-auto leading-relaxed">
              To deliver exceptional maritime services that ensure safety,
              efficiency, and compliance across global shipping operations,
              while opening new possibilities for our clients' success in the
              maritime industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
