import React, { useEffect } from "react";
import { Users, Globe, Award, Anchor, Ship, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
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

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Uncompromising commitment to maritime safety standards and regulatory compliance",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Delivering superior technical expertise and service quality in every project",
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
        
        .ocean-bg {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0ea5e9 100%);
          position: relative;
        }
        
        .ocean-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') center/cover no-repeat;
          opacity: 0.2;
        }
        
        .floating-ship {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="ocean-bg min-h-screen flex items-center justify-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div className="scroll-animate">
            <div className="floating-ship mb-8">
              <Ship className="w-20 h-20 mx-auto text-blue-300" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              About <span className="text-blue-300">UOS NOLA</span>
            </h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl leading-relaxed text-blue-100">
                "We provide our clients with a formidable range of technical and
                service skills that encompass all aspects of maritime
                operations, from vessel management to comprehensive safety
                audits."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Maritime Legacy
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  United Ocean Shipping NOLA, Inc. has been at the forefront of
                  maritime excellence for over two decades, specializing in
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
            <div className="scroll-animate">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Maritime vessel at sea"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every aspect of our maritime operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="scroll-animate hover:shadow-xl transition-all duration-300 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Global Maritime Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="scroll-animate hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{office.flag}</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {office.location}
                  </h3>
                  <p className="text-sm text-gray-600">{office.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <Anchor className="w-16 h-16 mx-auto mb-6 text-blue-300 floating-ship" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
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
