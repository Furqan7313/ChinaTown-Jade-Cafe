"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight, Clock, Users, Play, ChevronRight, ChevronLeft, Phone, MapPin, Utensils, Calendar } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import PremiumButton from "@/components/ui/PremiumButton";
import ReviewForm from "@/components/ui/ReviewForm";
import GoogleMap from "@/components/ui/GoogleMap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const signatureDishes = [
  { 
    id: 1,
    name: "Dynamite Shrimps", 
    category: "Chinese",
    desc: "Crispy battered shrimps tossed in our signature creamy spicy sauce, a Jade Café classic.", 
    price: "Rs. 2,450", 
    image: "/images/menu/dynamite_shrimps.png" 
  },
  { 
    id: 2,
    name: "Kung Pao Chicken", 
    category: "Chinese",
    desc: "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory-sweet sauce.", 
    price: "Rs. 1,460", 
    image: "/images/menu/kung_pao.png" 
  },
  { 
    id: 3,
    name: "Mutton Shinwari Karahi", 
    category: "Pakistani",
    desc: "Traditional Peshawari style mutton cooked with tomatoes and green chilies in an iron wok.", 
    price: "Rs. 3,995", 
    image: "/images/menu/mutton_shinwari.png" 
  },
  { 
    id: 4,
    name: "Premium Hi-Tea Platter", 
    category: "Hi-Tea",
    desc: "An elegant assortment of savory bites, sandwiches, and delicate sweet treats for the perfect afternoon.", 
    price: "Rs. 2,595", 
    image: "/images/menu/hi_tea_platter.png" 
  }
];


const reviews = [
  { name: "Aisha Malik", text: "The ambiance is unmatched in Multan. Every dish feels like a piece of art.", rating: 5 },
  { name: "Farhan Ahmed", text: "Best Chinese food I've had in years. The Honey Mustard Chicken is a must-try!", rating: 5 },
  { name: "Zainab Rashid", text: "Elegant, professional, and delicious. Perfect for family dinners.", rating: 5 },
  { name: "Usman Tariq", text: "The Hi-Tea experience is premium. Great value for such a luxury setting.", rating: 4 }
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-luxury-black" />;

  return (
    <div className="relative bg-luxury-black selection:bg-gold/30">
      {/* --- HERO SECTION: THE JADE SOVEREIGN --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-black">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.4, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534422298391-e4f8c170db06?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 grayscale contrast-125" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black via-luxury-black/60 to-luxury-black" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-8 md:w-16 bg-gold/50" />
              <span className="text-gold font-bold tracking-[0.8em] text-[10px] md:text-[12px] uppercase block">
                Multan's Premier Dining Landmark
              </span>
              <div className="h-px w-8 md:w-16 bg-gold/50" />
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-medium leading-[0.9] tracking-tighter mb-12">
              <span className="text-white block overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block"
                >
                  CHINATOWN
                </motion.span>
              </span>
              <span className="text-gradient-gold italic block overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block"
                >
                  & JADE CAFÉ
                </motion.span>
              </span>
            </h1>

            <p className="text-white/60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-16 font-light tracking-wide">
              Where the ancestral wisdom of Asian flavors meets the pinnacle of modern luxury hospitality. A sanctuary for the senses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/menu">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,175,55,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold text-black px-12 py-5 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase transition-all shadow-2xl shadow-gold/20"
                >
                  Explore Menu
                </motion.button>
              </Link>

              <Link href="/reservations">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase text-white border border-white/20 transition-all backdrop-blur-md"
                >
                  Reservations
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-luxury-black to-transparent z-10" />
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
        >
          <span className="text-[9px] text-gold/40 tracking-[0.4em] uppercase">Scroll to Discover</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </motion.div>
      </section>

      {/* --- THE FOUR PILLARS: REFINED --- */}
      <section className="relative z-30 py-32 bg-luxury-black border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
            {[
              { 
                title: "Authentic Asian", 
                desc: "Centuries-old recipes brought to life with premium local and imported ingredients.",
                icon: <Utensils className="text-gold" size={24} strokeWidth={1} />
              },
              { 
                title: "Immersive Ambiance", 
                desc: "A carefully curated space where every shadow and light is designed for intimacy.",
                icon: <Star className="text-gold" size={24} strokeWidth={1} />
              },
              { 
                title: "Exquisite Service", 
                desc: "Hospitality that anticipates your needs, providing a seamless and refined experience.",
                icon: <Users className="text-gold" size={24} strokeWidth={1} />
              },
              { 
                title: "Multan's Legacy", 
                desc: "A destination that has defined the fine dining landscape of the city for over 15 years.",
                icon: <MapPin className="text-gold" size={24} strokeWidth={1} />
              },
            ].map((pillar, i) => (
              <motion.div 
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-6 group"
              >
                <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-700">
                  {pillar.icon}
                </div>
                <div className="space-y-4">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-gold">{pillar.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light px-4">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE SIGNATURE GALLERY: HIGH-FASHION MENU CARDS --- */}
      <section className="py-48 bg-luxury-matte relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-bold tracking-[0.8em] text-[11px] uppercase mb-6 block">Culinary Artistry</span>
              <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke mb-8 italic">Signature Creations</h2>
              <div className="h-px w-32 bg-gold/30 mx-auto" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {signatureDishes.map((dish, i) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group flex flex-col"
              >
                {/* Modern Framed Image */}
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 shadow-2xl group-hover:border-gold/20 transition-all duration-1000">
                  <Image 
                    src={dish.image} 
                    alt={dish.name} 
                    fill 
                    className="object-cover transition-transform duration-[2.5s] group-hover:scale-115 grayscale-[0.2] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* Category Overlay */}
                  <div className="absolute top-8 left-8">
                    <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-gold py-2 px-4 rounded-full glass-dark border-white/10">
                      {dish.category}
                    </span>
                  </div>

                  {/* Price Tag (Modern) */}
                  <div className="absolute bottom-8 right-8">
                    <div className="text-whitesmoke bg-luxury-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                      <span className="font-heading text-xl italic">{dish.price}</span>
                    </div>
                  </div>
                </div>

                {/* Minimal Content */}
                <div className="px-4 text-center">
                  <h3 className="text-3xl font-heading text-whitesmoke mb-3 italic tracking-tight group-hover:text-gold transition-colors duration-500">
                    {dish.name}
                  </h3>
                  <p className="text-whitesmoke/30 text-[13px] leading-relaxed font-light line-clamp-2 px-4 group-hover:text-whitesmoke/50 transition-colors duration-500">
                    {dish.desc}
                  </p>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-8 overflow-hidden h-10"
                  >
                    <Link href="/menu" className="inline-flex items-center gap-3 text-gold text-[10px] font-bold tracking-[0.4em] uppercase group/link">
                      <span>Order Now</span>
                      <div className="w-8 h-px bg-gold/30 group-hover/link:w-16 transition-all duration-500" />
                      <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Link href="/menu">
              <PremiumButton variant="outline" className="px-16 py-6 rounded-full border-white/10 hover:border-gold/50">
                View Full Menu <ChevronRight size={18} className="ml-2" />
              </PremiumButton>
            </Link>
          </div>
        </div>
      </section>

      {/* --- THE LEGACY: STAGGERED EDITORIAL LAYOUT --- */}
      <section className="py-60 relative overflow-hidden bg-luxury-black">
        {/* Large Decorative Text */}
        <div className="absolute top-1/4 -left-24 text-[20rem] font-heading font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
          HERITAGE
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5">
                <Image 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Fine Dining Heritage" 
                  fill 
                  className="object-cover contrast-[1.1] brightness-[0.8]"
                />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                whileInView={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-16 -right-16 z-20 glass-dark p-12 rounded-[3.5rem] border border-gold/20 shadow-3xl backdrop-blur-3xl text-center min-w-[200px]"
              >
                <span className="block text-7xl font-heading font-bold text-gold mb-2">15</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/60 leading-tight">Years of <br />Culinary Mastery</span>
              </motion.div>

              {/* Decorative Frame Behind */}
              <div className="absolute -top-12 -left-12 w-full h-full border border-gold/10 rounded-[4rem] -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-12"
            >
              <div>
                <span className="text-gold font-bold tracking-[0.8em] text-[11px] uppercase mb-8 block">Our Narrative</span>
                <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke mb-12 leading-[1.1]">
                  Excellence in <br />
                  <span className="text-gradient-gold italic">Every Detail</span>
                </h2>
              </div>
              
              <div className="space-y-10">
                <p className="text-whitesmoke/50 text-xl leading-relaxed font-light">
                  From our beginnings as a passionate kitchen experiment to becoming Multan's most revered dining institution, our journey has been guided by one principle: uncompromising quality.
                </p>
                
                <div className="p-12 border-l-2 border-gold/20 bg-white/[0.01] rounded-r-[3rem] relative">
                  <p className="text-whitesmoke/40 text-lg italic leading-relaxed font-light">
                    "Luxury is not about excess, it's about the precision of experience. We curate every flavor, every texture, and every interaction to create moments that linger."
                  </p>
                  <span className="absolute top-6 right-8 text-gold/20 font-heading text-6xl italic">"</span>
                </div>
              </div>

              <div className="pt-12 flex items-center gap-16">
                <div className="flex flex-col">
                  <span className="text-4xl font-heading text-whitesmoke italic">World-Class</span>
                  <span className="text-[9px] font-bold tracking-[0.4em] text-gold uppercase">Standard</span>
                </div>
                <div className="w-px h-16 bg-white/10" />
                <Link href="/about">
                  <motion.button 
                    whileHover={{ scale: 1.05, borderColor: "#D4AF37" }}
                    className="px-16 py-6 border border-white/20 rounded-full font-bold text-[10px] tracking-[0.4em] uppercase text-whitesmoke transition-all"
                  >
                    Our Story
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GUEST VOICES: THE JOURNAL --- */}
      <section className="py-48 bg-luxury-matte relative border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-bold tracking-[0.8em] text-[11px] uppercase mb-6 block">Testimonials</span>
              <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke italic">The Guest Journal</h2>
            </motion.div>
            <div className="flex gap-4">
              <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/50 hover:text-gold transition-all duration-500">
                <ChevronLeft size={24} />
              </button>
              <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:border-gold/50 hover:text-gold transition-all duration-500">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-12 rounded-[3.5rem] border border-white/5 flex flex-col justify-between hover:bg-white/[0.02] transition-all duration-700 shadow-xl group"
              >
                <div>
                  <div className="flex gap-1.5 text-gold mb-10">
                    {[...Array(5)].map((_, j) => (
                      <Star 
                        key={j} 
                        size={12} 
                        fill={j < review.rating ? "currentColor" : "none"} 
                        className={cn(j < review.rating ? "text-gold" : "text-white/10")} 
                      />
                    ))}
                  </div>
                  <p className="text-xl italic font-light text-whitesmoke/70 leading-relaxed mb-16">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/10 flex items-center justify-center font-bold text-sm text-gold group-hover:scale-110 transition-all duration-500">
                      {review.name.charAt(0)}
                   </div>
                   <div className="flex flex-col">
                    <span className="font-bold tracking-[0.2em] text-[11px] uppercase text-whitesmoke">{review.name}</span>
                    <span className="text-[9px] tracking-[0.3em] text-gold uppercase mt-1">Verified Guest</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CALL: THE INNER CIRCLE --- */}
      <section className="py-60 relative overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-gold font-bold tracking-[1em] text-[11px] uppercase mb-10 block">Invitations Only</span>
            <h2 className="font-heading text-6xl md:text-[10rem] text-whitesmoke leading-tight italic tracking-tighter mb-16">
              Join the <br />
              <span className="text-gradient-gold">Inner Circle</span>
            </h2>
            <p className="text-white/40 text-[11px] md:text-[13px] mb-20 tracking-[0.4em] uppercase leading-loose max-w-2xl mx-auto font-light">
              Experience the privilege of early access to private tastings and curated menu reveals.
            </p>
            
            <form className="flex flex-col md:flex-row gap-0 justify-center max-w-4xl mx-auto rounded-full overflow-hidden border border-white/10 group focus-within:border-gold/30 transition-all duration-700">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-white/[0.03] px-12 py-8 text-whitesmoke text-[11px] tracking-[0.4em] focus:outline-none flex-grow uppercase font-medium"
                required
              />
              <button className="bg-gold text-luxury-black px-16 py-8 font-bold text-[11px] tracking-[0.5em] uppercase hover:bg-whitesmoke transition-all duration-500">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <ReviewForm />
      <GoogleMap />
    </div>
  );
}

