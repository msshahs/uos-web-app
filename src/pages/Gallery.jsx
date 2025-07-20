import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function Gallery() {
  const introFade = useScrollFadeIn();

  // Placeholder: Replace with your image paths or API logic
  const images = [
    "/images/gallery/ship1.jpg",
    "/images/gallery/crew1.jpg",
    "/images/gallery/port1.jpg",
    "/images/gallery/ship2.jpg",
    "/images/gallery/crew2.jpg",
    "/images/gallery/cargo1.jpg",
    "/images/gallery/team.jpg",
    "/images/gallery/engine_room.jpg",
    // Add more images in /public/images/gallery/
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div
          ref={introFade.ref}
          style={introFade.style}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">Gallery</h1>
          <p className="text-2xl text-blue-200 max-w-2xl mx-auto">
            A glimpse into our ships, crew, and global operations
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
