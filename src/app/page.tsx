"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight, Clock, Users, Play, ChevronRight, ChevronLeft, Phone, MapPin, Utensils } from "lucide-react";
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

const stats = [
  { label: "Happy Customers", value: 25000, suffix: "+" },
  { label: "Signature Dishes", value: 45, suffix: "" },
  { label: "Years of Heritage", value: 15, suffix: "+" },
  { label: "5-Star Reviews", value: 5000, suffix: "+" }
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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-luxury-black" />;

  return (
    <div className="relative bg-luxury-black selection:bg-gold/30">
      <div className="cinematic-grain" />
      
      {/* --- HERO SECTION: THE CULINARY MANIFESTO --- */}
      <section className="relative min-h-[110vh] flex items-center pt-20 overflow-hidden">
        {/* Monumental Background Text */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-luxury-black via-transparent to-luxury-black z-10" />
          
          {/* Monumental Background Text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
            <h2 className="text-[30vw] font-bold font-heading whitespace-nowrap tracking-tighter select-none">
              TASTE HERITAGE
            </h2>
          </div>

          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.1),transparent_50%)]" 
          />
        </div>

        {/* Floating Circular Signature */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-12 z-30">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-32 h-32 flex items-center justify-center"
          >
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
              </defs>
              <text className="text-[10px] font-bold fill-gold/40 uppercase tracking-[0.2em]">
                <textPath xlinkHref="#circlePath">
                  THE ORIGINAL CHINATOWN — AUTHENTIC TASTE — 
                </textPath>
              </text>
            </svg>
            <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold/60">
              <Star size={14} fill="currentColor" />
            </div>
          </motion.div>
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Pillar: Editorial Narrative */}
            <div className="lg:col-span-7 xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ opacity: heroOpacity }}
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="h-px w-12 bg-gold/50" />
                  <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase">
                    Since 2009 — The Original Heritage
                  </span>
                </motion.div>
                
                <h1 className="font-heading text-6xl md:text-8xl lg:text-[11.5rem] font-bold leading-[0.85] tracking-tighter mb-12">
                  <span className="text-whitesmoke block overflow-hidden">
                    <motion.span 
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="block"
                    >
                      CHINATOWN
                    </motion.span>
                  </span>
                  <span className="text-gradient-gold italic font-light block overflow-hidden">
                    <motion.span 
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="block text-glow-gold"
                    >
                      & JADE CAFÉ
                    </motion.span>
                  </span>
                </h1>

                {/* Vertical Signature for Connoisseurs */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-32 hidden xl:block pointer-events-none">
                  <p className="vertical-text text-[10px] font-bold tracking-[1em] text-gold/30 uppercase">
                    ESTABLISHED 2009 — MULTAN
                  </p>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="text-whitesmoke/40 text-lg md:text-xl max-w-2xl leading-relaxed mb-16 font-light tracking-wide italic"
                >
                  "A dialogue between tradition and modernity. Discover an immersive sanctuary of Asian fusion excellence in the heart of Multan."
                </motion.p>

                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <Link href="/menu" className="w-full sm:w-auto">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative bg-gold text-luxury-black px-12 py-6 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase transition-all overflow-hidden w-full"
                    >
                      <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Experience Menu <ArrowRight size={14} />
                      </span>
                    </motion.button>
                  </Link>

                  <Link href="/reservations" className="w-full sm:w-auto">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-12 py-6 rounded-full font-bold text-[11px] tracking-[0.3em] uppercase text-whitesmoke border border-white/10 hover:border-gold hover:text-gold transition-all w-full backdrop-blur-sm"
                    >
                      Private Dining
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Right Pillar: Cinematic Composition */}
            <div className="lg:col-span-5 xl:col-span-4 relative hidden lg:block">
              <motion.div 
                style={{ y: y1 }}
                className="relative z-10 aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] glass-dark"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent z-10 opacity-60" />
                <Image 
                  src="/images/hero/luxury_dish.png"
                  alt="Michelin Star Presentation"
                  fill
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-[3s]"
                  priority
                />
              </motion.div>

              {/* Float Panel: The Story */}
              <motion.div 
                style={{ y: y2 }}
                className="absolute -bottom-20 -left-20 z-20 glass-dark p-12 rounded-[2.5rem] border-gold/20 max-w-[320px] shadow-3xl"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-gold fill-gold" />)}
                </div>
                <h3 className="text-whitesmoke font-heading text-3xl mb-6 italic">Culinary Artistry</h3>
                <p className="text-whitesmoke/40 text-[10px] uppercase tracking-[0.25em] leading-loose">
                  Our signature hand-pulled noodles and aged ribeye redefine the boundaries of fusion cuisine.
                </p>
                <div className="mt-8 flex items-center gap-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-luxury-black transition-all">
                    <Play size={14} fill="currentColor" />
                  </div>
                  <span className="text-[9px] font-bold tracking-widest text-whitesmoke/60 group-hover:text-gold">THE FILM</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
          <span className="text-[8px] font-bold tracking-[0.5em] text-gold/50 uppercase">Explore</span>
        </motion.div>
      </section>

      {/* --- SIGNATURE EXPERIENCE: THE THREE PILLARS --- */}
      <section className="py-40 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Artisanal Cuisine", 
                desc: "Every dish is a carefully choreographed dance of rare ingredients and centuries-old techniques.",
                icon: <Utensils className="text-gold" size={40} />
              },
              { 
                title: "Luxe Atmosphere", 
                desc: "A sensory journey designed with custom lighting and bespoke textures to evoke pure tranquility.",
                icon: <MapPin className="text-gold" size={40} />
              },
              { 
                title: "Bespoke Service", 
                desc: "A commitment to hospitality that anticipates your every need before it arises.",
                icon: <Users className="text-gold" size={40} />
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="glass-dark p-16 rounded-[3rem] border-white/5 hover:border-gold/30 transition-all duration-1000 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-[60px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-gold/10 transition-colors" />
                <div className="mb-12 transition-transform duration-700 group-hover:scale-110">{feature.icon}</div>
                <h3 className="text-3xl font-heading text-whitesmoke mb-8 italic">{feature.title}</h3>
                <div className="w-12 h-px bg-gold/30 mb-8 group-hover:w-full transition-all duration-1000" />
                <p className="text-whitesmoke/40 text-lg leading-relaxed font-light tracking-wide">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE MASTERPIECES: MENU HIGHLIGHTS --- */}
      <section className="py-40 bg-luxury-matte relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase mb-6 block">Curated Selection</span>
              <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke leading-tight italic">Signature <br /><span className="text-gradient-gold">Creations</span></h2>
            </motion.div>
            <Link href="/menu" className="group">
              <PremiumButton variant="outline" className="px-12 py-6">View Complete Menu</PremiumButton>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {signatureDishes.map((dish, i) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group relative h-[650px] rounded-[3rem] overflow-hidden border border-white/10"
              >
                <Image 
                  src={dish.image} 
                  alt={dish.name} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent opacity-95 group-hover:opacity-100 transition-all" />
                
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    {dish.category}
                  </span>
                  <h3 className="text-4xl font-heading text-whitesmoke mb-6 italic leading-tight">{dish.name}</h3>
                  <div className="h-px w-0 group-hover:w-full bg-gold/40 transition-all duration-1000 mb-8" />
                  <p className="text-whitesmoke/40 text-sm leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 line-clamp-2">
                    {dish.desc}
                  </p>
                  <div className="flex justify-between items-center transform translate-y-8 group-hover:translate-y-0 transition-all duration-700">
                    <span className="text-3xl font-heading text-whitesmoke italic">{dish.price}</span>
                    <motion.div 
                      whileHover={{ scale: 1.1, backgroundColor: "#D4AF37", color: "#080808" }}
                      className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-gold transition-all"
                    >
                      <ArrowRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE LEGACY: STORYTELLING --- */}
      <section className="py-48 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-4xl">
                <Image 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Fine Dining Heritage" 
                  fill 
                  className="object-cover"
                />
              </div>
              <motion.div 
                whileInView={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -top-12 -left-12 glass-gold p-16 rounded-[4rem] text-center shadow-2xl border-gold/30"
              >
                <span className="block text-6xl font-heading font-bold text-gold mb-2">15</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-whitesmoke">Years of Legacy</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-8 block">The Narrative</span>
              <h2 className="font-heading text-6xl md:text-8xl text-whitesmoke mb-12 leading-[1.1]">
                Heritage In <br />
                <span className="text-gradient-gold italic">Every Detail</span>
              </h2>
              <div className="space-y-10">
                <p className="text-whitesmoke/50 text-xl leading-relaxed font-light">
                  Born from a passion for authentic Asian culinary arts, ChinaTown & Jade Café has evolved into Multan's most prestigious dining destination.
                </p>
                <p className="text-whitesmoke/40 text-lg leading-relaxed font-light italic border-l-2 border-gold/30 pl-8">
                  "We don't just serve dishes; we curate moments that transcend the ordinary. Our kitchen is a laboratory of tradition, and our floor is a stage for hospitality."
                </p>
              </div>
              <div className="mt-16 flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-heading text-whitesmoke mb-1 italic">Michelin</span>
                  <span className="text-[8px] font-bold tracking-[0.4em] text-gold uppercase">Standard</span>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <Link href="/about">
                  <PremiumButton variant="outline" className="px-12 py-5">Our Journey</PremiumButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- GUEST VOICES: THE INNER CIRCLE --- */}
      <section className="py-48 bg-luxury-matte relative border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-gold font-bold tracking-[0.6em] text-[10px] uppercase mb-8 block">Kind Words</span>
            <h2 className="font-heading text-5xl md:text-8xl text-whitesmoke italic">The Guest Journal</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-dark p-12 rounded-[3rem] border-gold/5 flex flex-col justify-between hover:border-gold/20 transition-all duration-700"
              >
                <div>
                  <div className="flex gap-1.5 text-gold mb-10">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" className="shadow-gold/20" />)}
                  </div>
                  <p className="text-xl italic font-light text-whitesmoke/70 leading-relaxed mb-16">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center font-bold text-sm text-gold">
                      {review.name.charAt(0)}
                   </div>
                   <div className="flex flex-col">
                    <span className="font-bold tracking-[0.2em] text-[10px] uppercase text-whitesmoke">{review.name}</span>
                    <span className="text-[8px] tracking-[0.3em] text-gold uppercase mt-1">Verified Guest</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA: THE INNER CIRCLE --- */}
      <section className="py-48 relative overflow-hidden">
        <div className="absolute inset-0 radial-glow" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="font-heading text-6xl md:text-9xl text-whitesmoke mb-16 italic">Join the Inner Circle</h2>
            <p className="text-whitesmoke/40 text-lg mb-20 tracking-[0.4em] uppercase text-[11px] leading-loose max-w-2xl mx-auto">
              Subscribe to receive exclusive invitations to our private tastings and seasonal menu unveils.
            </p>
            
            <form className="flex flex-col md:flex-row gap-6 justify-center max-w-3xl mx-auto">
              <input 
                type="email" 
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent border-b border-white/20 px-4 py-8 rounded-none text-whitesmoke text-xs tracking-[0.4em] focus:outline-none focus:border-gold transition-all w-full uppercase"
              />
              <button className="bg-gold text-luxury-black px-16 py-8 rounded-full font-bold text-[11px] tracking-[0.4em] uppercase hover:bg-whitesmoke transition-all shadow-2xl">
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

