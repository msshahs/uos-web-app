import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Send, Compass, Users, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PortMap from "../components/PortMap";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace these with your actual values
  const AIRTABLE_BASE_ID = "appyvXfI2zNLD5C1z";
  const AIRTABLE_TABLE_NAME = "Responses";
  const AIRTABLE_TOKEN =
    "patQe0Ig9bBDV2hiy.b6c66858c631f33316a035a2c5e3c30acc9d7c90e2202c2dc8dfd050a9bc2ede"; // Use env variable in production

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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          records: [
            {
              fields: {
                Name: formData.name,
                Email: formData.email,
                Company: formData.company,
                Service: formData.service,
                Message: formData.message,
              },
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${AIRTABLE_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Submitted successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting to Airtable:", err);
      alert("Failed to submit form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const offices = [
    {
      city: "Houston, Texas",
      flag: "🇺🇸",
      address: "Maritime Plaza, Houston, TX 77002",
      phone: "+1 (713) 555-0123",
      email: "houston@uos-nola.com",
      specialty: "Gulf Coast Operations",
    },
    {
      city: "Portland, Oregon",
      flag: "🇺🇸",
      address: "Pacific Maritime Center, Portland, OR 97201",
      phone: "+1 (503) 555-0124",
      email: "portland@uos-nola.com",
      specialty: "Pacific Northwest",
    },
    {
      city: "Mumbai, India",
      flag: "🇮🇳",
      address: "Maritime House, Mumbai 400001",
      phone: "+91 22 555 0125",
      email: "india@uos-nola.com",
      specialty: "Asian Maritime Hub",
    },
    {
      city: "Abu Dhabi, UAE",
      flag: "🇦🇪",
      address: "Maritime Tower, Abu Dhabi",
      phone: "+971 2 555 0126",
      email: "abudhabi@uos-nola.com",
      specialty: "Middle East Operations",
    },
  ];

  const services = [
    "VDR Data Analysis",
    "Port Captaincy and Loss Control",
    "Pollution and Safety Advisor",
    "Pre-Purchase Survey",
    "Ship & Shore Facility Damage Survey",
    "Underwater Hull Inspection with Sea Drone",
    "Vessel & Cargo Condition Assessment",
    "Accident/Incident Investigations",
    "PSC, Vetting & Compliance Audits",
    "Loading/Discharging Surveys",
    "On/Off Hire, Bunker & Draft Surveys",
    "Crew Training",
    "General Inquiry",
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
        
        .compass-bg {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0ea5e9 100%);
          position: relative;
        }
        
        .compass-animation {
          animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .floating-label {
          transition: all 0.3s ease;
        }
        
        .floating-label:focus-within label {
          transform: translateY(-20px) scale(0.8);
          color: #3b82f6;
        }
        
        .floating-label input:not(:placeholder-shown) + label,
        .floating-label textarea:not(:placeholder-shown) + label {
          transform: translateY(-20px) scale(0.8);
          color: #3b82f6;
        }
      `}</style>

      {/* Hero Section */}
      <section className="compass-bg min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-20 right-20 opacity-10">
          <Compass className="w-64 h-64 text-white compass-animation" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
          <div className="scroll-animate">
            <h1 className="text-4xl sm:text-7xl font-bold mb-6">
              Contact <span className="text-blue-300">UOS NOLA</span>
            </h1>
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-8">
              Ready to navigate new possibilities? Connect with our maritime
              experts worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-lg">
              <div className="flex items-center gap-2 text-blue-200">
                <Phone className="w-5 h-5" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Globe className="w-5 h-5" />
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Users className="w-5 h-5" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="scroll-animate">
              <Card className="shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Send className="w-6 h-6 text-blue-600" />
                    Get in Touch
                  </CardTitle>
                  <p className="text-gray-600">
                    Ready to discuss your maritime needs? Send us a message and
                    we'll respond within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="relative">
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          handleInputChange("service", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Select a service"
                            value={formData.service}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us about your project or requirements..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Info */}
            <div className="scroll-animate space-y-8">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Emergency Line
                      </p>
                      <p className="text-gray-600">+1 (504) 617-0298</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        General Inquiries
                      </p>
                      <p className="text-gray-600">operations@uosnola.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Headquarters</p>
                      <p className="text-gray-600">Houston, Texas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Response Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Emergency Response</span>
                    <span className="font-semibold text-red-600">
                      Immediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">VDR Audit Requests</span>
                    <span className="font-semibold text-blue-600">
                      24 Hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">General Inquiries</span>
                    <span className="font-semibold text-green-600">
                      48 Hours
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Quote Requests</span>
                    <span className="font-semibold text-purple-600">
                      72 Hours
                    </span>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Global Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our strategically located offices provide 24/7 support across
              major maritime hubs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="scroll-animate hover:shadow-xl transition-all duration-300"
              >
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{office.flag}</div>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    {office.city}
                  </CardTitle>
                  <p className="text-sm text-blue-600">{office.specialty}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{office.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    <p className="text-sm text-gray-600 truncate">
                      {office.email}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 scroll-animate">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              View our worldwide presence on the map
            </p>
          </div>
          <PortMap />
        </div>
      </section>
    </div>
  );
}
