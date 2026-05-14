"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, Utensils, Star, ChevronRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "MENU", href: "/menu" },
  { name: "GALLERY", href: "/gallery" },
  { name: "RESERVATIONS", href: "/reservations" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`relative flex items-center justify-between transition-all duration-700 ${
          scrolled 
            ? "glass-dark px-8 py-3 rounded-full border-jade/20" 
            : "bg-transparent px-4 py-2 border-transparent"
        }`}>
          
          {/* Left: Branding */}
          <div className="flex-shrink-0">
            <Link href="/" className="group block">
              <Logo className={`transition-transform duration-500 w-auto h-12 md:h-16 ${scrolled ? "scale-90" : "scale-100"}`} />
            </Link>
          </div>

          {/* Center: Curated Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group relative"
              >
                <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                  pathname === link.href ? "text-jade" : "text-white/60 group-hover:text-white"
                }`}>
                  {link.name}
                </span>
                {pathname === link.href && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-2 left-0 w-full h-[2px] bg-jade"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Action Pillar */}
          <div className="flex items-center">
            <Link href="/reservations" className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-jade text-white px-8 py-3 rounded-full font-bold text-[10px] tracking-[0.15em] uppercase transition-all flex items-center gap-2 group"
              >
                <span>Reserve a Table</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-3 text-jade hover:bg-jade/10 rounded-full transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* ULTRA-LUXURY FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed inset-0 z-[200] bg-luxury-black flex flex-col"
          >
            <div className="cinematic-grain" />
            
            {/* Overlay Header */}
            <div className="flex items-center justify-between p-8 md:p-12">
              <Logo />
              <button 
                onClick={() => setIsOpen(false)}
                className="w-16 h-16 rounded-full border border-jade/20 flex items-center justify-center text-jade hover:bg-jade/10 transition-all"
              >
                <X size={32} />
              </button>
            </div>

            {/* Links Pillar */}
            <div className="flex-grow flex flex-col justify-center px-12 md:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <nav className="flex flex-col gap-8 md:gap-12">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <Link 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-end gap-6"
                      >
                        <span className="font-heading text-6xl md:text-8xl text-whitesmoke/20 group-hover:text-jade transition-colors duration-500 italic">0{i + 1}</span>
                        <span className="font-heading text-5xl md:text-7xl font-bold text-whitesmoke group-hover:translate-x-4 transition-transform duration-500 uppercase tracking-tighter">
                          {link.name.split(' ')[link.name.split(' ').length - 1]}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="hidden lg:block space-y-12">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden border border-jade/30 relative group shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
                    <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105" />
                    <div className="absolute inset-0 bg-luxury-black/30 group-hover:bg-transparent transition-all duration-1000" />
                    {/* Interior Decorative Frame */}
                    <div className="absolute inset-4 border border-jade/10 pointer-events-none rounded-lg" />
                  </div>
                  <div className="flex justify-between items-end border-b border-jade/10 pb-4">
                    <span className="text-[10px] font-bold text-jade uppercase tracking-[0.5em]">Signature Creation</span>
                    <span className="text-[10px] text-whitesmoke/20 uppercase tracking-[0.3em]">Hand-crafted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay Footer */}
            <div className="p-12 md:p-24 border-t border-jade/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-jade uppercase tracking-[0.3em]">Address</span>
                  <p className="text-whitesmoke/40 text-sm">Main Abdali Rd, Multan</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-jade uppercase tracking-[0.3em]">Follow</span>
                  <p className="text-whitesmoke/40 text-sm">Instagram / Facebook</p>
                </div>
              </div>
              <Link href="/reservations" onClick={() => setIsOpen(false)}>
                <motion.button className="bg-jade text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-xl shadow-jade/20">
                  Reserve Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
