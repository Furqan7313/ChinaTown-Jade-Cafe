"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop", // Restaurant interior
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=800&auto=format&fit=crop", // Fine dining plate
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop", // Moody dining setting
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop", // Ambient lighting
  "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop", // Detailed food shot
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop", // Mixology/Drinks replacement
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop", // Premium dessert
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop", // Elegant table setup
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop", // Kitchen action replacement
];

export default function GalleryPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="relative bg-[#050505] selection:bg-gold/30 min-h-screen overflow-x-hidden text-whitesmoke font-light pt-32 pb-32">
      <div className="cinematic-noise" />
      <div className="ambient-glow w-[50vw] h-[50vh] top-0 right-0 opacity-15" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6 opacity-80"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold font-medium tracking-[0.4em] text-[9px] uppercase">Visual Narrative</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-normal mb-8 tracking-tight text-white"
          >
            Culinary <span className="italic text-white/80">Aesthetics</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-[14px] md:text-base leading-relaxed font-light"
          >
            A cinematic glimpse into our culinary artistry, elegant ambiance, and the meticulously crafted moments that define the Jade experience.
          </motion.p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              className="relative rounded-sm overflow-hidden group break-inside-avoid border border-white/5 bg-luxury-glass premium-shadow"
            >
              <Image 
                src={src}
                alt={`Culinary experience ${index + 1}`}
                width={800}
                height={1000}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-[3s] brightness-[0.8] group-hover:brightness-[1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
              
              {/* Subtle hover detail */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 rounded-sm pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
