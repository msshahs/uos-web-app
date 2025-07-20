import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const vesselTypes = [
  {
    name: "LNG Ships",
    image: "/images/vessels/lng.png",
    description: "Liquefied Natural Gas carriers",
  },
  {
    name: "LPG Ships",
    image: "/images/vessels/lpg.png",
    description: "Liquefied Petroleum Gas vessels",
  },
  {
    name: "Oil Tankers",
    image: "/images/vessels/oil.png",
    description: "Crude oil and petroleum carriers",
  },
  {
    name: "Bulk Carriers",
    image: "/images/vessels/bulk.png",
    description: "Wheat, rice, and grain transport",
  },
  {
    name: "Coal Carriers",
    image: "/images/vessels/coal.png",
    description: "Coal and mineral transport",
  },
  {
    name: "Container Ships",
    image: "/images/vessels/container.png",
    description: "Containerized cargo vessels",
  },
];

export default function VesselSlider() {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Vessel Types We Serve
        </h2>
        <p className="text-xl text-blue-200 mb-12 max-w-3xl mx-auto">
          Comprehensive services across all major maritime vessel categories
        </p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {vesselTypes.map((vessel, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 rounded-xl overflow-hidden shadow-lg backdrop-blur-md">
                <img
                  src={vessel.image}
                  alt={vessel.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {vessel.name}
                  </h3>
                  <p className="text-sm text-blue-200">{vessel.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
