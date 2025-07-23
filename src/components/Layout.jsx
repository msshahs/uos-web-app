import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Anchor, Phone, Mail, MapPin, Waves, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: createPageUrl("") },
    { name: "About", path: createPageUrl("About") },
    { name: "Services", path: createPageUrl("Services") },
    { name: "Clients", path: createPageUrl("Clients") },
    // { name: "Gallery", path: createPageUrl("Gallery") },
    { name: "Contact Us", path: createPageUrl("Contact") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --navy-primary: #1e3a8a;
          --navy-secondary: #3b82f6;
          --ocean-blue: #0ea5e9;
          --deep-blue: #0f172a;
          --wave-gradient: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%);
        }
        
        .wave-animation {
          animation: wave 6s ease-in-out infinite;
        }
        
        @keyframes wave {
          0%, 100% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(10px) translateY(-5px); }
        }
        
        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .floating-animation {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link
              to={createPageUrl("Home")}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <img
                  src="/images/logo_.png"
                  style={{ width: "160px" }}
                  className="transparent"
                ></img>
                {/* <Anchor className="h-8 w-8 text-blue-600 wave-animation" /> */}
                {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div> */}
              </div>
              {/* <div>
                <h1 className="text-xl font-bold gradient-text">UOS NOLA</h1>
                <p className="text-xs text-gray-600">United Ocean Shipping</p>
              </div> */}
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-600 shadow-lg"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg text-gray-700 hover:bg-blue-50"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-white md:hidden"
          >
            <div className="flex justify-between items-center h-20 px-4 sm:px-6 border-b">
              <Link
                to={createPageUrl("")}
                className="flex items-center space-x-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="relative">
                  <Anchor className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold gradient-text">UOS NOLA</h1>
                </div>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-blue-100 text-blue-600 shadow-md"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/images/logo_.png"
                  style={{ width: "140px" }}
                  className="transparent"
                ></img>
                <div>
                  <h3 className="text-xl font-bold">
                    United Ocean Shipping NOLA, Inc.
                  </h3>
                  <p className="text-blue-300">Open to New Possibilities</p>
                </div>
              </div>
              <p className="text-gray-300 max-w-md">
                Providing comprehensive maritime services with expertise in VDR
                navigational audits, port captaincy, and technical consultancy
                worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-300 hover:text-blue-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-blue-300">
                Global Presence
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-lg">🇺🇸</span>
                  <span>North America</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-lg">🇮🇳</span>
                  <span>India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-lg">🇦🇪</span>
                  <span>Abu Dhabi, UAE</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 United Ocean Shipping NOLA, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
