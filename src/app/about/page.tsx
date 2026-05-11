"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-luxury-black text-whitesmoke">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Discover Our Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl font-bold mb-8"
          >
            Our <span className="text-gradient-gold italic">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-whitesmoke/60 font-light leading-relaxed"
          >
            A journey of passion, flavors, and luxury heritage in the heart of Multan.
          </motion.p>
        </div>

        {/* Content 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8 text-lg text-whitesmoke/70 font-light leading-relaxed"
          >
            <p>
              ChinaTown & Jade Café began with a vision: to bring authentic, high-end Chinese cuisine to Multan while offering the comforting elegance of a modern luxury destination. Over the last 15 years, we have grown into more than just a restaurant—we are a cultural landmark.
            </p>
            <p>
              Our master chefs are dedicated to preserving traditional recipes while embracing contemporary culinary techniques. From our perfectly wok-tossed Chowmein to our signature Honey Mustard Chicken, every dish is prepared with the finest ingredients and artistic precision.
            </p>
            <div className="pt-8 border-t border-gold/10">
              <span className="text-gold font-bold uppercase tracking-widest text-[10px]">The Philosophy</span>
              <p className="text-2xl font-heading font-bold mt-4 text-whitesmoke">
                "We don't just serve food; we serve memories in a cinematic atmosphere."
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gold/5"
          >
            <Image 
              src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop" 
              alt="Restaurant Ambiance" 
              fill 
              className="object-cover hover:scale-110 transition-transform duration-1000"
            />
          </motion.div>
        </div>

        {/* Content 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gold/5 lg:order-1"
          >
            <Image 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
              alt="Chef Cooking" 
              fill 
              className="object-cover hover:scale-110 transition-transform duration-1000"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8 text-lg text-whitesmoke/70 font-light leading-relaxed lg:order-2"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-whitesmoke mb-6 leading-tight">More Than Just <br /> <span className="text-gradient-crimson italic">A Restaurant</span></h2>
            <p>
              We believe dining is an immersive experience. That's why we've carefully curated our space to be welcoming for family gatherings, intimate dinners, and lively celebrations. 
            </p>
            <p>
              Our famous Hi-Tea has become a staple for Multan—a perfect afternoon escape featuring an array of sweet and savory treats served in an elegant, cinematic setting. Every corner of ChinaTown is designed to inspire and delight.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
               <div>
                  <h4 className="text-gold font-bold text-3xl mb-2">50+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-whitesmoke/40">Master Chefs</p>
               </div>
               <div>
                  <h4 className="text-gold font-bold text-3xl mb-2">100%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-whitesmoke/40">Halal Ingredients</p>
               </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}

