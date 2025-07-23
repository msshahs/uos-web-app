import React from "react";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function Clients() {
  const heroAnim = useScrollFadeIn();
  const gridAnim = useScrollFadeIn();

  const clients = [
    { name: "MISC Marine Services Pvt Ltd", logo: "/images/clients/misc.png" },
    { name: "Fleet Management", logo: "/images/clients/fleet.png" },
    { name: "Qual Ships", logo: "/images/clients/qualships.png" },
    { name: "TMML", logo: "/images/clients/tmml.png" },
    { name: "Liberian Flag", logo: "/images/clients/liberian.png" },
    {
      name: "Sino Cosmos Ship Management",
      logo: "/images/clients/sinocosmos.png",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-start bg-gradient-to-r from-slate-900 to-blue-900 text-white px-6 md:px-20">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
          src="/images/client.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <div
          ref={heroAnim.ref}
          style={heroAnim.style}
          className="relative z-20 max-w-4xl"
        >
          <Award className="w-12 h-12 mb-4 text-blue-300" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Trusted Clients
          </h1>
          <p className="text-2xl md:text-2xl text-blue-100">
            Proud partnerships across the maritime industry
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={gridAnim.ref}
            style={gridAnim.style}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          >
            {clients.map((client, index) => (
              <Card
                key={index}
                className="p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-42 h-42 mb-4 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
                  {client.name}
                </h3>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
