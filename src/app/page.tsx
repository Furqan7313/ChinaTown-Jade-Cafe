"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

// --- CURATED DATA ASSETS ---
const signatureDishes = [
  { 
    id: 1,
    name: "Dynamite Shrimps", 
    category: "Signature Starter",
    desc: "Crispy battered shrimps tossed in our signature creamy spicy sauce.", 
    price: "Rs. 2,450", 
    image: "/images/menu/dynamite_shrimps.png" 
  },
  { 
    id: 2,
    name: "Kung Pao Chicken", 
    category: "Wok Classics",
    desc: "Stir-fried chicken with peanuts, vegetables, and chili peppers in a savory-sweet glaze.", 
    price: "Rs. 1,460", 
    image: "/images/menu/kung_pao.png" 
  },
  { 
    id: 3,
    name: "Mutton Shinwari", 
    category: "Heritage",
    desc: "Traditional Peshawari style mutton cooked with fresh tomatoes and green chilies.", 
    price: "Rs. 3,995", 
    image: "/images/menu/mutton_shinwari.png" 
  },
  { 
    id: 4,
    name: "Premium Hi-Tea", 
    category: "Experience",
    desc: "An elegant assortment of savory bites and delicate sweet treats for the perfect afternoon.", 
    price: "Rs. 2,595", 
    image: "/images/menu/hi_tea_platter.png" 
  }
];

const reviews = [
  { name: "Aisha Malik", text: "The ambiance is unmatched in Multan. Every dish feels like a meticulously crafted piece of art.", rating: 5 },
  { name: "Farhan Ahmed", text: "Exceptional dining experience. The attention to detail in both service and flavor profile is remarkable.", rating: 5 },
  { name: "Zainab Rashid", text: "Elegant, highly professional, and delicious. The definitive choice for elevated family dining.", rating: 5 }
];

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-luxury-black" />;

  return (
    <div className="relative bg-[#0a0a0a] selection:bg-gold/30 min-h-screen pt-32 pb-12 overflow-x-hidden">
      <div className="cinematic-noise pointer-events-none" />
      
      {/* --- STICKY MOBILE CTA --- */}
      <div className="fixed bottom-0 left-0 w-full z-[100] md:hidden glass-dark border-t border-gold/20 p-4 flex gap-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
        <Link href="/reservations" className="flex-grow">
          <button className="w-full bg-gold text-black py-4 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase shadow-lg shadow-gold/20">
            Reserve
          </button>
        </Link>
        <Link href="/menu" className="flex-grow">
          <button className="w-full bg-white/10 text-white py-4 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase border border-white/10 backdrop-blur-md">
            Menu
          </button>
        </Link>
      </div>

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="relative min-h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero/luxury_hero.png" 
            alt="Fine Dining Luxury" 
            fill 
            className="object-cover brightness-[0.5] contrast-[1.1] scale-105"
            priority 
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0a0a0a]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-30 px-6 md:px-12 flex flex-col items-center justify-center mt-20">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-6 mb-8 opacity-90">
              <span className="h-px w-12 bg-white/40" />
              <span className="text-white/80 font-light tracking-[0.4em] text-[10px] uppercase block">The Premier Sanctuary</span>
              <span className="h-px w-12 bg-white/40" />
            </div>

            <h1 className="font-heading text-7xl md:text-8xl lg:text-[9rem] font-normal leading-[0.9] tracking-tighter mb-16 text-white uppercase drop-shadow-2xl">
              JADE CAFÉ
            </h1>

            <Link href="/reservations">
              <motion.button 
                whileHover={{ backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
                className="border border-white/40 text-white px-14 py-5 font-light text-[10px] tracking-[0.4em] uppercase transition-colors duration-500 backdrop-blur-sm"
              >
                Reserve A Table
              </motion.button>
            </Link>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30 opacity-60">
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
          <span className="text-[9px] font-light text-white uppercase tracking-[0.4em] vertical-text">Scroll</span>
        </div>
      </section>

      {/* --- CONTENT FLOW --- */}
      <div className="relative z-10 bg-[#0a0a0a]">
        
        {/* Features Row */}
        <section className="py-24 md:py-32 px-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-3 gap-16 md:gap-24">
              {[
                { title: "Michelin Standard", desc: "Curated by world-class chefs specializing in authentic Asian Fusion.", icon: <Star size={20} strokeWidth={1.5} /> },
                { title: "Premium Sourcing", desc: "We source only the finest ingredients to ensure an uncompromising culinary profile.", icon: <MapPin size={20} strokeWidth={1.5} /> },
                { title: "Elite Sanctuary", desc: "A sophisticated dining environment designed for absolute professional excellence.", icon: <Star size={20} strokeWidth={1.5} /> }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="w-8 h-px bg-gold/30 mb-6 transition-all duration-500 group-hover:w-full group-hover:bg-gold" />
                  <div className="text-gold mb-6 opacity-80">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-medium tracking-[0.2em] text-[11px] uppercase mb-4">{feature.title}</h4>
                  <p className="text-white/50 text-[14px] font-light leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Selection */}
        <section className="py-32 md:py-40 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <span className="text-gold font-medium tracking-[0.3em] text-[10px] uppercase mb-4 block">The Culinary Collection</span>
                <h2 className="font-heading text-5xl md:text-6xl text-white font-normal tracking-tight">Chef's Legacy</h2>
              </motion.div>
              <Link href="/menu" className="group flex items-center gap-4 text-gold/80 hover:text-gold transition-colors duration-300 mb-2">
                 <span className="text-[11px] font-medium uppercase tracking-[0.2em]">Full Menu</span>
                 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {signatureDishes.map((dish, i) => (
                <motion.div 
                  key={dish.id} 
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-white/5 rounded-sm">
                    <Image src={dish.image} alt={dish.name} fill className="object-cover transition-transform duration-[2s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <span className="text-gold/80 font-medium tracking-[0.2em] text-[9px] uppercase mb-2">{dish.category}</span>
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <h3 className="text-xl font-heading text-white leading-tight">{dish.name}</h3>
                      <span className="text-gold font-medium text-sm whitespace-nowrap mt-1">{dish.price}</span>
                    </div>
                    <p className="text-white/50 text-[13px] leading-relaxed font-light mt-auto">{dish.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Storytelling */}
        <section className="py-32 md:py-40 bg-[#0f0f0f] border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="lg:w-1/2 relative w-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200" alt="Fine Dining" fill className="object-cover contrast-[1.05] brightness-[0.85]" />
                </div>
                <div className="absolute -bottom-6 -right-6 md:-right-12 bg-[#141414] border border-white/10 p-8 md:p-12 z-20 shadow-2xl">
                  <span className="block text-5xl md:text-6xl font-heading text-gold mb-2 leading-none text-center">15</span>
                  <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/60 text-center block">Years of<br/>Excellence</span>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 space-y-12">
                <div>
                  <span className="text-gold font-medium tracking-[0.3em] text-[10px] uppercase mb-4 block">The Jade Narrative</span>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight tracking-tight">
                    Authenticity <br />
                    <span className="text-gold">Redefined</span>
                  </h2>
                  <div className="w-16 h-px bg-gold/30 mb-8" />
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  At China Town & Jade Café, we believe true hospitality is a silent dialogue between artisan and guest. Every texture, aroma, and interaction is choreographed for perfection, honoring deeply rooted traditions while embracing modern culinary sophistication.
                </p>
                <div className="grid grid-cols-2 gap-12 pt-8">
                   <div>
                      <span className="text-gold font-medium uppercase tracking-[0.2em] text-[10px] block mb-3">Ancestral Wisdom</span>
                      <p className="text-white/50 text-[13px] font-light leading-relaxed">Techniques passed through generations, refined for the modern palate.</p>
                   </div>
                   <div>
                      <span className="text-gold font-medium uppercase tracking-[0.2em] text-[10px] block mb-3">Intimate Luxury</span>
                      <p className="text-white/50 text-[13px] font-light leading-relaxed">Spaces designed to inspire meaningful conversation and milestones.</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Guest Journal */}
        <section className="py-32 md:py-40 relative">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col items-center text-center mb-20">
               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                 <span className="text-gold font-medium tracking-[0.3em] text-[10px] uppercase mb-4 block">Guest Journal</span>
                 <h2 className="font-heading text-4xl md:text-5xl text-white tracking-tight">World Class Affirmations</h2>
                 <div className="w-16 h-px bg-gold/30 mt-8 mx-auto" />
               </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col p-10 bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-colors duration-500 rounded-sm"
                >
                  <div className="flex gap-1 mb-8">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} size={12} fill="currentColor" className="text-gold" />)}
                  </div>
                  <p className="text-[15px] font-light text-white/70 leading-relaxed mb-12 flex-grow">"{review.text}"</p>
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                     <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center font-medium text-gold text-sm">{review.name.charAt(0)}</div>
                     <div className="flex flex-col text-left">
                       <span className="font-medium tracking-[0.1em] text-[11px] uppercase text-white">{review.name}</span>
                       <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] mt-1">Verified Patron</span>
                     </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reservations */}
        <section className="py-32 md:py-40 bg-[#0f0f0f] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              <div>
                <span className="text-gold font-medium tracking-[0.3em] text-[10px] uppercase mb-4 block">Reservations</span>
                <h2 className="font-heading text-5xl md:text-6xl text-white tracking-tight mb-8">Book Your <br />Sanctuary</h2>
                <div className="w-16 h-px bg-gold/30 mb-8" />
                <p className="text-white/60 text-lg font-light max-w-md leading-relaxed">
                  Secure your place in Multan's most exclusive dining environment. Experience the pinnacle of Jade hospitality.
                </p>
              </div>

              <div className="bg-[#141414] p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl">
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">Date</label>
                      <input type="date" className="w-full bg-black/50 border border-white/10 py-4 px-5 focus:border-gold/50 outline-none transition-colors text-white/80 text-sm font-light rounded-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">Time</label>
                      <select className="w-full bg-black/50 border border-white/10 py-4 px-5 focus:border-gold/50 outline-none transition-colors text-white/80 text-sm font-light rounded-sm appearance-none">
                        <option className="bg-[#111]">7:00 PM - Dinner</option>
                        <option className="bg-[#111]">8:30 PM - Late Night</option>
                        <option className="bg-[#111]">1:00 PM - Lunch</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-6 pt-4">
                    <motion.button 
                      whileHover={{ y: -2 }}
                      className="w-full bg-gold text-black py-5 rounded-sm font-medium text-[11px] tracking-[0.3em] uppercase hover:bg-white transition-colors duration-300"
                    >
                      Confirm Booking
                    </motion.button>
                    <div className="flex items-center justify-center gap-6 text-[9px] font-medium uppercase tracking-[0.3em] text-white/30">
                       <span className="h-px flex-grow bg-white/5" />
                       <span>OR</span>
                       <span className="h-px flex-grow bg-white/5" />
                    </div>
                    <button className="w-full border border-white/10 py-5 rounded-sm font-medium text-[10px] tracking-[0.2em] uppercase hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-4 text-white/80">
                      <Phone size={16} className="text-gold" />
                      <span>WhatsApp Reservation</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
              <div className="max-w-sm space-y-10">
                <Logo className="h-16 w-auto" />
                <p className="text-white/50 text-[14px] leading-relaxed font-light">
                  China Town & Jade Café represents Multan's premier culinary sanctuary, where deep heritage meets the subtle luxury of modern fine dining.
                </p>
                <div className="flex items-center gap-6">
                   <Link href="#" className="text-white/40 hover:text-gold transition-colors"><InstagramIcon size={20} /></Link>
                   <Link href="#" className="text-white/40 hover:text-gold transition-colors"><FacebookIcon size={20} /></Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-20">
                <div className="space-y-8">
                  <h4 className="text-[10px] font-medium text-gold uppercase tracking-[0.3em]">Curation</h4>
                  <ul className="space-y-4">
                    {['Menu', 'Gallery', 'Story', 'Bookings'].map(l => (
                      <li key={l}><Link href="#" className="text-white/50 text-[13px] font-light hover:text-gold transition-colors">{l}</Link></li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-8">
                  <h4 className="text-[10px] font-medium text-gold uppercase tracking-[0.3em]">Location</h4>
                  <ul className="space-y-6">
                    <li className="flex flex-col gap-2">
                       <span className="text-white/30 text-[9px] font-medium uppercase tracking-[0.2em]">Main Sanctuary</span>
                       <span className="text-white/60 text-[13px] font-light">Abdali Road, Multan</span>
                    </li>
                    <li className="flex flex-col gap-2">
                       <span className="text-white/30 text-[9px] font-medium uppercase tracking-[0.2em]">Inquiries</span>
                       <span className="text-white/60 text-[13px] font-light">+92 61 458 1234</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30">
              <span className="text-[10px] tracking-[0.1em] uppercase">© 2024 Jade Culinary Group. All Rights Reserved.</span>
              <span className="text-[10px] tracking-[0.1em] uppercase">Premium Digital Flagship</span>
            </div>
          </div>
        </footer>

        <ReviewForm />
      </div>
    </div>
  );
}