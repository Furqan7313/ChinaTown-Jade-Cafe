"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight, Clock, Users, Play, ChevronRight, ChevronLeft, Phone, MapPin, Utensils, Calendar } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
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
    <div className="relative bg-luxury-black selection:bg-jade/30">
      <div className="cinematic-noise" />
      
      {/* --- STICKY MOBILE CTA --- */}
      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden glass-dark border-t border-jade/20 p-4 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <Link href="/reservations" className="flex-grow">
          <button className="w-full bg-jade text-white py-4 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-jade/20">
            Reserve Table
          </button>
        </Link>
        <Link href="/menu" className="flex-grow">
          <button className="w-full bg-white/10 text-white py-4 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase border border-white/10 backdrop-blur-md">
            View Menu
          </button>
        </Link>
      </div>

      {/* --- HERO SECTION: CINEMATIC AMBIANCE --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,107,91,0.15),transparent_70%)]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.5, 0.4]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-[0.4]" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/40 to-luxury-black" />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center gap-4 mb-10">
              <div className="h-px w-12 bg-jade/50" />
              <span className="text-jade-light font-bold tracking-[0.8em] text-[10px] md:text-[12px] uppercase block">
                Since 2009 • Multan
              </span>
              <div className="h-px w-12 bg-jade/50" />
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[11rem] font-medium leading-[0.85] tracking-tighter mb-12">
              <span className="text-whitesmoke block overflow-hidden">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.2 }}
                  className="block"
                >
                  Authentic Chinese
                </motion.span>
              </span>
              <span className="text-gradient-jade italic block overflow-hidden pb-4">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.4 }}
                  className="block"
                >
                  & Contemporary Café
                </motion.span>
              </span>
            </h1>

            <p className="text-text-dim text-base md:text-2xl max-w-3xl mx-auto leading-relaxed mb-20 font-light tracking-wide">
              Experience handcrafted flavors, elegant ambience, and premium café culture in the heart of the city.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/reservations">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(15,107,91,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-jade text-white px-16 py-6 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase transition-all shadow-2xl shadow-jade/20"
                >
                  Reserve Table
                </motion.button>
              </Link>

              <Link href="/menu">
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-16 py-6 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase text-whitesmoke border border-white/10 transition-all backdrop-blur-md"
                >
                  View Menu
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-px h-20 bg-gradient-to-b from-jade/50 to-transparent" />
        </motion.div>
      </section>

      {/* --- FEATURED DISHES: PREMIUM GALLERY --- */}
      <section className="py-48 bg-luxury-matte relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-jade font-bold tracking-[0.8em] text-[11px] uppercase mb-6 block">Curated Menu</span>
              <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke mb-8 italic">Signature Specials</h2>
              <div className="h-px w-32 bg-jade/30 mx-auto" />
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
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-10 border border-white/5 shadow-2xl group-hover:border-jade/30 transition-all duration-1000">
                  <Image 
                    src={dish.image} 
                    alt={dish.name} 
                    fill 
                    className="object-cover transition-transform duration-[2.5s] group-hover:scale-115 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-8 left-8">
                    <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-jade py-2 px-4 rounded-full glass-dark border-white/10">
                      {dish.category}
                    </span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-8 right-8">
                    <div className="text-whitesmoke glass-dark px-6 py-3 rounded-full border border-white/10">
                      <span className="font-heading text-xl italic">{dish.price}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 text-center">
                  <h3 className="text-3xl font-heading text-whitesmoke mb-4 italic tracking-tight group-hover:text-jade transition-colors duration-500">
                    {dish.name}
                  </h3>
                  <p className="text-text-dim text-[13px] leading-relaxed font-light line-clamp-2 px-4 group-hover:text-whitesmoke/70 transition-colors duration-500">
                    {dish.desc}
                  </p>
                  <div className="mt-8 flex justify-center">
                    <Link href="/menu" className="w-12 h-12 rounded-full border border-jade/20 flex items-center justify-center text-jade hover:bg-jade hover:text-white transition-all duration-500">
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION: ELEGANT STORYTELLING --- */}
      <section className="py-60 relative overflow-hidden bg-luxury-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-40 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/5">
                <Image 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Fine Dining Heritage" 
                  fill 
                  className="object-cover contrast-[1.1] brightness-[0.7]"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -top-10 -left-10 w-full h-full border border-jade/10 rounded-[3rem] -z-10" />
              <div className="absolute -bottom-10 -right-10 glass-jade p-16 rounded-[3rem] text-center backdrop-blur-3xl border-jade/20 shadow-2xl">
                <span className="block text-7xl font-heading font-bold text-jade mb-2">15</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-whitesmoke/60">Years of <br />Excellence</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-12"
            >
              <div>
                <span className="text-jade font-bold tracking-[0.8em] text-[11px] uppercase mb-8 block">Our Narrative</span>
                <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke mb-12 leading-[1.1]">
                  Authenticity In <br />
                  <span className="text-gradient-jade italic">Every Senses</span>
                </h2>
              </div>
              <p className="text-text-dim text-xl leading-relaxed font-light">
                China Town & Jade Café represents a fusion of ancestral wisdom and modern luxury. We believe that true hospitality is an art form—one that requires patience, precision, and a deep respect for heritage.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-jade uppercase tracking-[0.3em]">Handcrafted</h4>
                  <p className="text-xs text-text-dim font-light">Every meal is prepared with fresh, premium ingredients and traditional techniques.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-jade uppercase tracking-[0.3em]">Modern Ambiance</h4>
                  <p className="text-xs text-text-dim font-light">A carefully curated space designed for intimacy, comfort, and professional elegance.</p>
                </div>
              </div>
              <div className="pt-12">
                <Link href="/about">
                  <motion.button 
                    whileHover={{ scale: 1.05, borderColor: "#0F6B5B" }}
                    className="px-16 py-6 border border-white/10 rounded-full font-bold text-[10px] tracking-[0.4em] uppercase text-whitesmoke transition-all"
                  >
                    Explore Our Story
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION: MASONRY CINEMATIC --- */}
      <section className="py-48 bg-luxury-matte relative border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-jade font-bold tracking-[0.8em] text-[11px] uppercase mb-6 block">Atmosphere</span>
            <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke italic">Visual Journey</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px]">
             {[
               { src: "https://images.unsplash.com/photo-1550966841-3ec7ad85d0d4?q=80&w=800", span: "md:col-span-2 md:row-span-2" },
               { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800", span: "" },
               { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800", span: "" },
               { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800", span: "md:row-span-2" },
               { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800", span: "md:col-span-2" },
               { src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800", span: "" }
             ].map((img, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className={cn("relative overflow-hidden rounded-3xl border border-white/5 group", img.span)}
               >
                 <Image src={img.src} alt="Gallery image" fill className="object-cover transition-all duration-[2s] group-hover:scale-110 grayscale-[0.4] group-hover:grayscale-0" />
                 <div className="absolute inset-0 bg-jade/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS: THE GUEST JOURNAL --- */}
      <section className="py-48 bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-jade font-bold tracking-[0.8em] text-[11px] uppercase mb-6 block">Voices</span>
            <h2 className="font-heading text-5xl md:text-8xl text-whitesmoke italic mb-4">The Guest Journal</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-12 rounded-[3.5rem] border border-white/5 flex flex-col justify-between hover:bg-jade/[0.02] transition-all duration-700 shadow-xl group"
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
                  <p className="text-xl italic font-light text-text-dim leading-relaxed mb-16">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                   <div className="w-14 h-14 rounded-2xl bg-jade/10 border border-jade/20 flex items-center justify-center font-bold text-sm text-jade group-hover:scale-110 transition-all duration-500">
                      {review.name.charAt(0)}
                   </div>
                   <div className="flex flex-col">
                    <span className="font-bold tracking-[0.2em] text-[11px] uppercase text-whitesmoke">{review.name}</span>
                    <span className="text-[9px] tracking-[0.3em] text-jade uppercase mt-1">Verified Guest</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESERVATIONS: PREMIUM PORTAL --- */}
      <section className="py-60 relative overflow-hidden bg-luxury-matte border-y border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,107,91,0.08),transparent_70%)]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-jade font-bold tracking-[1em] text-[11px] uppercase mb-10 block">Reservations</span>
            <h2 className="font-heading text-6xl md:text-[10rem] text-whitesmoke leading-tight italic tracking-tighter mb-16">
              Book Your <br />
              <span className="text-gradient-jade">Experience</span>
            </h2>
            <div className="glass-dark p-12 md:p-20 rounded-[4rem] border border-white/5 shadow-3xl text-left">
              <form className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-jade ml-2">Date Selection</label>
                  <input type="date" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 focus:border-jade/50 focus:bg-white/[0.05] outline-none transition-all text-whitesmoke text-sm" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-jade ml-2">Preferred Time</label>
                  <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 focus:border-jade/50 focus:bg-white/[0.05] outline-none transition-all text-whitesmoke text-sm">
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-jade ml-2">Guest Count</label>
                  <input type="number" placeholder="Number of guests" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 focus:border-jade/50 focus:bg-white/[0.05] outline-none transition-all text-whitesmoke text-sm" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.4em] text-jade ml-2">Full Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-5 focus:border-jade/50 focus:bg-white/[0.05] outline-none transition-all text-whitesmoke text-sm" />
                </div>
                <div className="md:col-span-2 pt-6">
                  <button className="w-full bg-jade text-white py-6 rounded-full font-bold text-[11px] tracking-[0.5em] uppercase hover:bg-jade-light transition-all duration-500 shadow-2xl shadow-jade/20">
                    Confirm Booking
                  </button>
                  <div className="mt-8 flex items-center justify-center gap-4">
                    <div className="h-px flex-grow bg-white/5" />
                    <span className="text-[9px] tracking-[0.3em] text-text-dim uppercase">Or WhatsApp Us</span>
                    <div className="h-px flex-grow bg-white/5" />
                  </div>
                  <button className="w-full mt-8 border border-white/10 py-6 rounded-full font-bold text-[11px] tracking-[0.5em] uppercase hover:border-jade transition-all duration-500 flex items-center justify-center gap-3">
                    <Phone size={16} className="text-jade" />
                    <span>WhatsApp Booking</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- LOCATION & CONTACT --- */}
      <section className="py-48 bg-luxury-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-jade font-bold tracking-[0.8em] text-[11px] uppercase mb-8 block">Find Us</span>
                <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke mb-12 italic">Visit Our <br />Sanctuary</h2>
              </motion.div>
              <div className="grid gap-12">
                <div className="flex gap-8">
                   <div className="w-16 h-16 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center text-jade shrink-0">
                      <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="text-[10px] font-bold text-jade uppercase tracking-[0.4em] mb-4">Location</h4>
                     <p className="text-whitesmoke/60 text-lg font-light leading-relaxed">Main Abdali Road, Multan, Pakistan</p>
                   </div>
                </div>
                <div className="flex gap-8">
                   <div className="w-16 h-16 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center text-jade shrink-0">
                      <Clock size={24} />
                   </div>
                   <div>
                     <h4 className="text-[10px] font-bold text-jade uppercase tracking-[0.4em] mb-4">Opening Hours</h4>
                     <p className="text-whitesmoke/60 text-lg font-light leading-relaxed">Lunch: 12:00 PM - 3:30 PM <br /> Dinner: 7:00 PM - 12:00 AM</p>
                   </div>
                </div>
                <div className="flex gap-8">
                   <div className="w-16 h-16 rounded-full bg-jade/10 border border-jade/20 flex items-center justify-center text-jade shrink-0">
                      <Phone size={24} />
                   </div>
                   <div>
                     <h4 className="text-[10px] font-bold text-jade uppercase tracking-[0.4em] mb-4">Contact</h4>
                     <p className="text-whitesmoke/60 text-lg font-light leading-relaxed">+92 61 123 4567 <br /> info@chinatownjade.com</p>
                   </div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square rounded-[4rem] overflow-hidden border border-white/5 shadow-3xl"
            >
              <GoogleMap />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER: ELEGANT DARK --- */}
      <footer className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="max-w-sm space-y-8">
               <Logo className="h-16 w-auto" />
               <p className="text-text-dim text-sm leading-relaxed font-light">
                 China Town & Jade Café: A culinary sanctuary where the richness of Asian tradition meets contemporary luxury.
               </p>
               <div className="flex gap-6">
                 {['FB', 'IG', 'TW'].map(s => (
                   <span key={s} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold text-jade hover:border-jade hover:bg-jade/5 transition-all cursor-pointer">{s}</span>
                 ))}
               </div>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">Quick Links</h4>
                <ul className="space-y-4">
                  {['Home', 'Menu', 'Gallery', 'About', 'Contact'].map(l => (
                    <li key={l}><Link href="#" className="text-text-dim text-xs hover:text-jade transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.4em]">Reservations</h4>
                <ul className="space-y-4">
                  {['Online Booking', 'Private Dining', 'Catering', 'Careers'].map(l => (
                    <li key={l}><Link href="#" className="text-text-dim text-xs hover:text-jade transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
             <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase">© 2024 China Town & Jade Café. All Rights Reserved.</span>
             <span className="text-[10px] tracking-[0.3em] text-white/20 uppercase">Crafted for Excellence</span>
          </div>
        </div>
      </footer>

      <ReviewForm />
    </div>
  );
}

