"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Star, 
  MapPin, 
  ArrowRight, 
  Phone
} from "lucide-react";
import ReviewForm from "@/components/ui/ReviewForm";
import Logo from "@/components/ui/Logo";

// Minimal inline SVG icons for socials
const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// --- CURATED DATA ASSETS ---
const signatureDishes = [
  { 
    id: 1,
    name: "Dynamite Shrimps", 
    category: "Signature Starter",
    desc: "Crispy battered shrimps tossed in our signature creamy spicy sauce, served over delicate glass noodles.", 
    price: "Rs. 2,450", 
    image: "/images/menu/dynamite_shrimps.png" 
  },
  { 
    id: 2,
    name: "Kung Pao Chicken", 
    category: "Wok Classics",
    desc: "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory-sweet, deeply caramelized glaze.", 
    price: "Rs. 1,460", 
    image: "/images/menu/kung_pao.png" 
  },
  { 
    id: 3,
    name: "Mutton Shinwari", 
    category: "Heritage",
    desc: "Traditional Peshawari style mutton cooked with fresh tomatoes and green chilies in a cast iron wok.", 
    price: "Rs. 3,995", 
    image: "/images/menu/mutton_shinwari.png" 
  },
  { 
    id: 4,
    name: "Premium Hi-Tea", 
    category: "Experience",
    desc: "An elegant, multi-tiered assortment of savory bites and delicate sweet treats for the perfect afternoon.", 
    price: "Rs. 2,595", 
    image: "/images/menu/hi_tea_platter.png" 
  }
];

const reviews = [
  { name: "Aisha Malik", text: "The ambiance is unmatched in Multan. Every dish feels like a meticulously crafted piece of art. A true Michelin-level experience.", rating: 5 },
  { name: "Farhan Ahmed", text: "Exceptional dining. The attention to detail in both service and flavor profile is remarkable. The interior design is breathtaking.", rating: 5 },
  { name: "Zainab Rashid", text: "Elegant, highly professional, and delicious. The definitive choice for elevated family dining and special occasions.", rating: 5 }
];

// Reusable Reveal Component for smooth scroll animations
const Reveal = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="relative bg-[#050505] selection:bg-gold/30 min-h-screen overflow-x-hidden text-whitesmoke font-light">
      {/* Global Ambient Noise Overlay */}
      <div className="cinematic-noise" />
      
      {/* --- STICKY MOBILE CTA --- */}
      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden glass-dark border-t border-white/5 p-4 flex gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
        <Link href="/reservations" className="flex-grow">
          <button className="w-full bg-gold/90 text-black py-4 rounded-sm font-medium text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-gold/20 backdrop-blur-md">
            Reserve
          </button>
        </Link>
        <Link href="/menu" className="flex-grow">
          <button className="w-full bg-transparent text-white py-4 rounded-sm font-medium text-[10px] tracking-[0.2em] uppercase border border-white/20">
            Menu
          </button>
        </Link>
      </div>

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
          <Image 
            src="/images/hero/luxury_hero.png" 
            alt="Fine Dining Luxury" 
            fill 
            className="object-cover brightness-[0.5] contrast-[1.1]"
            priority 
          />
          {/* Layered Cinematic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-black/70" />
        </motion.div>

        {/* Ambient Glow behind text */}
        <div className="ambient-glow w-[80vw] md:w-[60vw] h-[60vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto w-full relative z-30 px-6 md:px-12 flex flex-col items-center justify-center pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center w-full"
          >
            <div className="flex items-center gap-4 md:gap-6 mb-8 opacity-90">
              <span className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-white/50" />
              <span className="text-white/90 font-medium tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[9px] uppercase block">Multan's Premier Sanctuary</span>
              <span className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-white/50" />
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-normal leading-[0.9] tracking-tight mb-12 text-white drop-shadow-2xl">
              <span className="block italic text-4xl sm:text-5xl md:text-7xl font-light opacity-90 mb-2 md:mb-4 tracking-normal">The Art of</span>
              JADE <span className="text-gold/90">DINING</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
              <Link href="/reservations" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000", borderColor: "rgba(255,255,255,1)", scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border border-white/30 bg-white/5 backdrop-blur-md text-white px-8 md:px-12 py-4 md:py-5 font-medium text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all duration-300 rounded-sm"
                >
                  Reserve Table
                </motion.button>
              </Link>
              <Link href="/menu" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ backgroundColor: "rgba(212,175,55,1)", color: "#000", borderColor: "rgba(212,175,55,1)", scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border border-gold/40 bg-transparent backdrop-blur-md text-gold px-8 md:px-12 py-4 md:py-5 font-medium text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all duration-300 rounded-sm"
                >
                  Explore Menu
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>


      </section>

      {/* --- CONTENT FLOW --- */}
      <div className="relative z-10 bg-[#050505]">
        
        {/* Features Row - Eye-Catching Typography Layout */}
        <section className="pt-20 pb-10 px-6 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="grid md:grid-cols-3 gap-12 lg:gap-16 border-t border-white/10 pt-16">
              {[
                { title: "Michelin Standard", desc: "Curated by world-class chefs specializing in authentic, elevated Asian Fusion.", icon: <Star size={24} strokeWidth={1} /> },
                { title: "Premium Sourcing", desc: "We meticulously source only the finest global ingredients for an uncompromising profile.", icon: <MapPin size={24} strokeWidth={1} /> },
                { title: "Elite Sanctuary", desc: "A sophisticated, immersive environment designed for absolute professional excellence.", icon: <Star size={24} strokeWidth={1} /> }
              ].map((feature, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group flex flex-col items-start h-full cursor-default">
                    <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h4 className="text-white font-heading text-xl md:text-2xl mb-4 group-hover:text-gold transition-colors duration-500">{feature.title}</h4>
                    <p className="text-white/50 text-[14px] leading-relaxed font-light">{feature.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Storytelling & Hospitality Feel */}
        <section className="py-20 relative overflow-hidden">
          <div className="ambient-glow w-[50vw] h-[50vw] top-1/2 right-0 translate-x-1/3 -translate-y-1/2 opacity-15" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              
              <div className="lg:w-1/2 space-y-12 order-2 lg:order-1">
                <Reveal>
                  <div className="flex items-center gap-4 mb-4 md:mb-6 opacity-80">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-gold font-medium tracking-[0.3em] text-[9px] uppercase">The Jade Narrative</span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-6xl text-white mb-8 leading-[1.1] tracking-tight">
                    Authenticity <br />
                    <span className="italic text-white/80">Redefined.</span>
                  </h2>
                </Reveal>
                
                <Reveal delay={0.2}>
                  <div className="space-y-6 pl-4 md:pl-6 border-l-2 border-gold/20">
                    <p className="text-white/70 text-base md:text-lg leading-relaxed font-light">
                      At China Town & Jade Café, we believe true hospitality is a silent, profound dialogue between artisan and guest. Every texture, aroma, and interaction is choreographed for perfection.
                    </p>
                    <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">
                      We honor deeply rooted traditions while embracing modern culinary sophistication, creating an environment where culinary artistry meets unmatched exclusivity.
                    </p>
                  </div>
                </Reveal>
                
                <Reveal delay={0.4}>
                  <Link href="/about" className="group inline-flex items-center gap-4 md:gap-6 mt-4">
                    <span className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 group-hover:text-gold transition-colors duration-500">Discover Our Story</span>
                    <span className="w-8 md:w-12 h-px bg-white/30 group-hover:w-16 group-hover:bg-gold transition-all duration-500 relative">
                      <ArrowRight size={14} className="absolute -right-1 top-1/2 -translate-y-1/2 text-white/0 group-hover:text-gold transition-colors duration-500" />
                    </span>
                  </Link>
                </Reveal>
              </div>

              <div className="lg:w-1/2 w-full relative order-1 lg:order-2">
                <Reveal delay={0.3}>
                  <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-sm premium-shadow group border border-white/5">
                    <Image src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200" alt="Fine Dining Experience" fill className="object-cover contrast-[1.1] brightness-[0.75] transition-transform duration-[4s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Glass Element */}
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-luxury-glass p-6 md:p-8 backdrop-blur-xl flex justify-between items-end border-t border-white/10">
                      <div>
                        <span className="block text-4xl md:text-5xl font-heading text-white mb-2 leading-none drop-shadow-md">15</span>
                        <span className="text-[8px] md:text-[9px] font-medium uppercase tracking-[0.3em] text-white/70">Years of Excellence</span>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/40 flex items-center justify-center bg-black/20">
                        <Star size={14} className="text-gold" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </section>

        {/* Signature Selection */}
        <section className="py-20 relative z-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <Reveal>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-8 border-b border-white/10 pb-12">
                <div>
                  <div className="flex items-center gap-4 mb-4 md:mb-6 opacity-80">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-gold font-medium tracking-[0.3em] text-[9px] uppercase">The Collection</span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-6xl text-white font-normal tracking-tight">
                    Chef's <span className="italic text-white/80">Legacy</span>
                  </h2>
                </div>
                <Link href="/menu" className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-500 mb-2">
                   <span className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.3em]">View Full Menu</span>
                   <div className="w-8 h-px bg-white/30 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
                </Link>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {signatureDishes.map((dish, i) => (
                <Reveal key={dish.id} delay={i * 0.1}>
                  <div className="group flex flex-col h-full cursor-pointer bg-luxury-glass rounded-sm border border-white/5 overflow-hidden premium-shadow hover:-translate-y-1 transition-all duration-500">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#0a0a0a]">
                      <Image src={dish.image} alt={dish.name} fill className="object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent opacity-90" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white border border-white/40 px-6 py-3 rounded-sm bg-black/20">Discover</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-grow p-6">
                      <span className="text-gold font-medium tracking-[0.3em] text-[8px] uppercase mb-2">{dish.category}</span>
                      <h3 className="text-xl md:text-2xl font-heading text-white leading-tight mb-3 group-hover:text-gold transition-colors duration-500">{dish.name}</h3>
                      <p className="text-white/50 text-[12px] md:text-[13px] leading-relaxed font-light mt-auto mb-6">{dish.desc}</p>
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-white/90 font-medium text-sm tracking-widest">{dish.price}</span>
                        <ArrowRight size={14} className="text-white/30 group-hover:text-gold group-hover:translate-x-2 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Guest Journal */}
        <section className="py-20 relative border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
            <Reveal>
              <div className="flex flex-col items-center text-center mb-16 md:mb-20">
                 <div className="flex items-center gap-4 mb-4 md:mb-6 opacity-80">
                   <span className="h-px w-8 bg-gold" />
                   <span className="text-gold font-medium tracking-[0.3em] text-[9px] uppercase">Guest Journal</span>
                   <span className="h-px w-8 bg-gold" />
                 </div>
                 <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">World Class Affirmations</h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {reviews.map((review, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col h-full p-8 md:p-10 bg-luxury-glass rounded-sm border border-white/5 group hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden premium-shadow">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="flex gap-1 mb-8">
                      {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" className="text-gold" strokeWidth={0} />)}
                    </div>
                    <p className="text-[14px] md:text-[15px] font-light text-white/80 leading-relaxed mb-12 flex-grow italic">"{review.text}"</p>
                    
                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                       <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center font-medium text-gold text-xs bg-gold/5">{review.name.charAt(0)}</div>
                       <div className="flex flex-col">
                         <span className="font-medium tracking-[0.2em] text-[9px] md:text-[10px] uppercase text-white/90">{review.name}</span>
                         <span className="text-[8px] text-white/40 uppercase tracking-[0.3em] mt-1">Verified Patron</span>
                       </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reservations - Eye Catchy Contrast */}
        <section className="py-20 md:py-32 bg-[#080808] relative border-y border-white/10 shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="ambient-glow w-[60vw] h-[60vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <Reveal>
                <div>
                  <div className="flex items-center gap-4 mb-6 md:mb-8 opacity-80">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-gold font-medium tracking-[0.3em] text-[9px] uppercase">Reservations</span>
                  </div>
                  <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-8 leading-[1.1]">
                    Book Your <br /><span className="italic text-white/80">Sanctuary</span>
                  </h2>
                  <p className="text-white/60 text-base md:text-lg font-light max-w-md leading-relaxed mb-10">
                    Secure your place in Multan's most exclusive dining environment. Experience the absolute pinnacle of Jade hospitality.
                  </p>
                  
                  <div className="flex items-center gap-5 p-6 bg-luxury-glass border border-white/10 rounded-sm w-fit">
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center bg-black/40">
                      <Phone size={16} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="block text-[8px] text-white/50 uppercase tracking-[0.3em] mb-1">Direct Line</span>
                      <span className="text-white font-medium tracking-widest text-sm">+92 61 458 1234</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-[#050505] p-8 md:p-12 rounded-sm premium-shadow relative overflow-hidden border border-white/10 min-h-[400px] flex items-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
                  
                  {!isBookingSubmitted ? (
                    <form 
                      className="space-y-8 relative z-10 w-full"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsBookingSubmitted(true);
                      }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Full Name</label>
                          <input required type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light placeholder:text-white/20 focus:bg-white/5" placeholder="John Doe" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Phone Number</label>
                          <input required type="tel" className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light placeholder:text-white/20 focus:bg-white/5" placeholder="+92 300 0000000" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Date</label>
                          <input required type="date" className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light appearance-none focus:bg-white/5" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Time</label>
                          <input required type="time" className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light appearance-none focus:bg-white/5" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Guests</label>
                          <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light appearance-none focus:bg-white/5">
                            {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <option key={n} value={n} className="bg-[#050505]">{n} {n === 1 ? 'Person' : 'People'}</option>)}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Special Requests</label>
                        <textarea rows={3} className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light resize-none placeholder:text-white/20 focus:bg-white/5" placeholder="Anniversary dinner, window seat, dietary requirements..."></textarea>
                      </div>

                      <div className="pt-6">
                        <motion.button 
                          whileHover={{ backgroundColor: "rgba(212,175,55,1)", color: "#000", scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          className="w-full bg-gold/90 text-black py-5 rounded-sm font-medium text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)]"
                        >
                          Confirm Booking
                        </motion.button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center relative z-10 w-full py-20"
                    >
                      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
                        <Star size={32} className="text-gold" strokeWidth={1} />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-heading text-white mb-4">Request Received</h3>
                      <p className="text-white/50 text-[13px] leading-relaxed max-w-sm mx-auto mb-10">
                        Your sanctuary awaits. Our concierge will contact you shortly on your provided phone number to confirm your table.
                      </p>
                      <button 
                        onClick={() => setIsBookingSubmitted(false)}
                        className="text-gold font-medium uppercase tracking-[0.3em] text-[9px] hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-2"
                      >
                        Make another booking
                      </button>
                    </motion.div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 md:py-32 relative bg-[#050505]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-16 md:gap-24 mb-20 md:mb-32">
              
              <div className="max-w-md space-y-8 md:space-y-12">
                <Logo className="h-10 md:h-12 w-auto opacity-90" />
                <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed font-light md:pr-12">
                  China Town & Jade Café represents Multan's premier culinary sanctuary. Where deep architectural heritage meets the subtle luxury of modern fine dining.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
                <div className="space-y-8">
                  <h4 className="text-[9px] font-medium text-gold uppercase tracking-[0.4em]">Explore</h4>
                  <ul className="space-y-4">
                    {['Menu', 'Gallery', 'Story', 'Reservations'].map(l => (
                      <li key={l}><Link href="#" className="text-white/60 text-[13px] font-light hover:text-white hover:translate-x-1 inline-block transition-all tracking-wide">{l}</Link></li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-8">
                  <h4 className="text-[9px] font-medium text-gold uppercase tracking-[0.4em]">Connect</h4>
                  <ul className="space-y-4">
                    <li><Link href="#" className="text-white/60 text-[13px] font-light hover:text-white hover:translate-x-1 transition-all flex items-center gap-3"><InstagramIcon size={14} /> Instagram</Link></li>
                    <li><Link href="#" className="text-white/60 text-[13px] font-light hover:text-white hover:translate-x-1 transition-all flex items-center gap-3"><FacebookIcon size={14} /> Facebook</Link></li>
                  </ul>
                </div>

                <div className="space-y-8 col-span-2 md:col-span-1">
                  <h4 className="text-[9px] font-medium text-gold uppercase tracking-[0.4em]">Location</h4>
                  <ul className="space-y-6">
                    <li className="flex flex-col gap-2">
                       <span className="text-white/40 text-[8px] md:text-[9px] font-medium uppercase tracking-[0.2em]">Main Sanctuary</span>
                       <span className="text-white/80 text-[13px] font-light leading-relaxed">Main Abdali Road,<br/>Multan, Pakistan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="pt-8 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40">
              <span className="text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-center md:text-left">© 2024 Jade Culinary Group. All Rights Reserved.</span>
              <span className="text-[8px] md:text-[9px] tracking-[0.2em] uppercase">Premium Digital Flagship</span>
            </div>
          </div>
        </footer>

        <div id="reviews">
          <ReviewForm />
        </div>
      </div>
    </div>
  );
}