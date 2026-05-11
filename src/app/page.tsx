"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Star, ArrowRight, Clock, Users, Play, ChevronRight, ChevronLeft, Phone, MapPin } from "lucide-react";
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMounted, setIsMounted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (isMounted) {
      gsap.from(".page-reveal", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        ease: "power4.out"
      });
    }
  }, [isMounted]);

  if (!isMounted) return <div className="min-h-screen bg-luxury-black" />;

  return (
    <div className="relative w-full overflow-hidden bg-luxury-black text-whitesmoke page-reveal">
      
      {/* MOUSE FOLLOW LIGHT EFFECT */}
      <div 
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(179, 0, 27, 0.05), transparent 80%)`
        }}
      />
      {/* HERO SECTION */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <motion.div 
          style={{ y: y1 }} 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&auto=format&fit=crop" 
            alt="Chinatown & Jade Café Luxury Dining" 
            fill 
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/80 via-luxury-black/40 to-luxury-black"></div>
          <div className="absolute inset-0 bg-luxury-black/20"></div>
        </motion.div>

        {/* Subtle Atmospheric Effects */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
        </div>

        {/* Floating Dish (Interactive Visual) */}
        <motion.div 
          style={{ 
            x: useTransform(scrollY, [0, 500], [0, 100]),
            y: useTransform(scrollY, [0, 500], [0, -100]),
            rotate: useTransform(scrollY, [0, 500], [0, 15]),
          }}
          className="absolute right-[-10%] top-[10%] w-[500px] h-[500px] pointer-events-none z-10 opacity-30 mix-blend-screen hidden lg:block"
        >
          <Image 
            src="/images/menu/dynamite_shrimps.png" 
            alt="Floating Special" 
            fill 
            className="object-contain animate-float"
          />
        </motion.div>

        <div className="container relative z-20 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="h-[1px] w-8 bg-gold/50" />
                <span className="text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.8em]">
                  The Culinary Landmark
                </span>
                <div className="h-[1px] w-8 bg-gold/50" />
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-heading text-6xl md:text-8xl lg:text-[11rem] font-bold mb-10 leading-[0.8] tracking-tighter"
            >
              CHINATOWN <br />
              <span className="text-gradient-gold italic font-playfair font-light">& JADE CAFÉ</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="text-[10px] md:text-xs text-whitesmoke/40 mb-16 max-w-xl mx-auto font-bold uppercase tracking-[0.6em] leading-loose"
            >
              Experience the fusion of authentic Asian heritage <br /> and modern luxury in the heart of Multan.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <PremiumButton onClick={() => window.location.href='/menu'} className="min-w-[220px]">
                Explore Menu
              </PremiumButton>
              <PremiumButton variant="outline" onClick={() => window.location.href='/reservations'} className="min-w-[220px]">
                Reserve Table
              </PremiumButton>
            </div>
          </motion.div>
        </div></div>

        {/* Refined Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] uppercase tracking-[0.4em] text-gold/50 font-bold">Discovery</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION - THE LEGACY */}
      <section className="relative py-32 lg:py-48 px-6 lg:px-12 overflow-hidden border-t border-gold/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="inline-block px-4 py-1 border border-gold/30 rounded-full mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">The Heritage</span>
              </div>
              <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
                A Legacy of <br />
                <span className="text-gradient-gold italic">Taste & Tradition</span>
              </h2>
              <p className="text-xl text-whitesmoke/60 mb-12 leading-relaxed font-light">
                Nestled in Multan, ChinaTown & Jade Café blends authentic Chinese bold flavors with the sophisticated comfort of a modern luxury café. We pride ourselves on creating an immersive dining experience that satisfies both the palate and the soul.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="border-l border-crimson pl-6">
                  <h4 className="text-2xl font-bold mb-2">Authentic</h4>
                  <p className="text-sm text-whitesmoke/40">Original recipes from master chefs.</p>
                </div>
                <div className="border-l border-gold pl-6">
                  <h4 className="text-2xl font-bold mb-2">Luxury</h4>
                  <p className="text-sm text-whitesmoke/40">Cinematic ambiance and service.</p>
                </div>
              </div>

              <Link href="/about" className="group flex items-center gap-4 text-gold font-bold tracking-widest uppercase text-xs">
                Learn More <div className="w-10 h-[1px] bg-gold group-hover:w-16 transition-all" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] md:aspect-square"
            >
              <div className="absolute -inset-4 border border-gold/10 rounded-[2rem] -rotate-3"></div>
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl shadow-gold/5">
                <Image 
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop" 
                  alt="Restaurant Interior" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 bg-crimson p-10 rounded-full shadow-2xl z-20 flex flex-col items-center justify-center text-center border-4 border-luxury-black"
              >
                <span className="text-4xl font-bold">15+</span>
                <span className="text-[8px] uppercase tracking-tighter">Years of Excellence</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 border-y border-gold/5 bg-luxury-black/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-heading font-bold text-gold mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-whitesmoke/40 font-bold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNATURE DISHES - MENU SECTION */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 bg-[#0a0a0a] relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-crimson/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-12 bg-gold"></div>
                <span className="text-gold font-bold uppercase tracking-[0.4em] text-[10px]">Chef's Choice</span>
              </div>
              <h2 className="font-heading text-5xl md:text-8xl font-bold">Signature <br /><span className="text-gradient-gold italic font-playfair font-light">Creations</span></h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <PremiumButton onClick={() => window.location.href='/menu'} variant="outline">
                View Full Menu
              </PremiumButton>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {signatureDishes.map((dish, i) => (
              <motion.div 
                key={dish.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-charcoal border border-gold/10 group-hover:border-gold/30 transition-all duration-700 shadow-2xl">
                  <Image 
                    src={dish.image} 
                    alt={dish.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700"></div>
                  
                  {/* Premium Badge */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center border border-gold/20 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <Star className="text-gold" size={16} />
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <div className="overflow-hidden">
                      <motion.span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-3 block transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        {dish.category}
                      </motion.span>
                    </div>
                    <h3 className="text-3xl font-heading font-bold mb-4 leading-tight">{dish.name}</h3>
                    <div className="h-[1px] w-0 group-hover:w-full bg-gold/30 transition-all duration-700 mb-6"></div>
                    <p className="text-sm text-whitesmoke/50 mb-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 line-clamp-2 font-light tracking-wide">
                      {dish.desc}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-[8px] uppercase tracking-widest text-whitesmoke/40">Starting from</span>
                        <span className="text-2xl font-bold text-whitesmoke font-heading">{dish.price}</span>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 rounded-full bg-crimson flex items-center justify-center text-white transition-all duration-500 shadow-[0_0_20px_rgba(179,0,27,0.4)] hover:shadow-[0_0_30px_rgba(179,0,27,0.6)]"
                      >
                        <ArrowRight size={24} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION SECTION - LUXURY FORM */}
      <section className="relative py-32 lg:py-48 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop" 
            alt="Luxury Table" 
            fill 
            sizes="100vw"
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-5xl md:text-7xl font-bold mb-8">
                Secure Your <br />
                <span className="text-gradient-crimson italic">Private Table</span>
              </h2>
              <p className="text-xl text-whitesmoke/60 mb-12 font-light leading-relaxed">
                Experience the height of hospitality. Whether it's a corporate event, a romantic dinner, or a family celebration, we ensure every detail is perfection.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-whitesmoke/40">Call Us</p>
                    <p className="text-xl font-bold">+92 (061) 4504100</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-whitesmoke/40">Find Us</p>
                    <p className="text-xl font-bold">Main Abdali Rd, Multan</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-[2rem] border border-gold/10"
            >
              <h3 className="text-3xl font-heading font-bold mb-8 text-center uppercase tracking-widest">Reservation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-whitesmoke/60">Full Name</label>
                    <input type="text" className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-3 outline-none transition-colors text-whitesmoke" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-whitesmoke/60">Phone Number</label>
                    <input type="tel" className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-3 outline-none transition-colors text-whitesmoke" placeholder="+92 300 1234567" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-whitesmoke/60">Guests</label>
                    <select className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-3 outline-none transition-colors text-whitesmoke appearance-none">
                      <option className="bg-luxury-black">2 People</option>
                      <option className="bg-luxury-black">4 People</option>
                      <option className="bg-luxury-black">6+ People</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-whitesmoke/60">Date</label>
                    <input type="date" className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-3 outline-none transition-colors text-whitesmoke" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-whitesmoke/60">Time</label>
                    <input type="time" className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-3 outline-none transition-colors text-whitesmoke" />
                  </div>
                </div>
                <PremiumButton className="w-full mt-8">Confirm Booking</PremiumButton>
              </form>
              <p className="mt-6 text-center text-xs text-whitesmoke/40">You'll receive a confirmation via WhatsApp within 10 minutes.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* REVIEWS SECTION - CINEMATIC CAROUSEL */}
      <section className="py-32 lg:py-48 px-6 bg-luxury-black relative overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-24">
             <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Kind Words</span>
             <h2 className="font-heading text-5xl md:text-7xl font-bold">The Guest <span className="text-gradient-gold italic">Experience</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#121212] p-10 rounded-[2.5rem] border border-gold/5 hover:border-gold/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-gold mb-8">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-lg italic font-light text-whitesmoke/80 leading-relaxed mb-12">
                    "{review.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-crimson flex items-center justify-center font-bold text-xs uppercase">
                      {review.name.charAt(0)}
                   </div>
                   <span className="font-bold tracking-widest text-[10px] uppercase text-gold">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBMIT REVIEW SECTION */}
      <section className="py-24 px-6 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto">
          <ReviewForm />
        </div>
      </section>

      {/* MAP SECTION */}
      <GoogleMap />

    </div>
  );
}

