"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, Utensils, Star, ChevronRight } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { name: "THE MENU", href: "/menu" },
  { name: "OUR STORY", href: "/about" },
  { name: "GALLERY", href: "/gallery" },
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
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`relative flex items-center justify-between rounded-full transition-all duration-700 ${
          scrolled 
            ? "glass-dark px-8 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-gold/20" 
            : "bg-transparent px-4 py-2 border-transparent"
        }`}>
          
          <div className="flex-1 flex items-center">
            <Link href="/" className="group relative">
              <div className="absolute -inset-8 bg-gold/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-50 group-hover:scale-110" />
              <Logo className={`relative z-10 transition-all duration-700 ${scrolled ? "scale-90" : "scale-100"} group-hover:scale-105 group-hover:brightness-110`} />
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-14">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="group relative"
              >
                <span className={`text-[9px] font-bold tracking-[0.5em] uppercase transition-all duration-500 ${
                  pathname === link.href ? "text-gold" : "text-whitesmoke/40 group-hover:text-whitesmoke"
                }`}>
                  {link.name}
                </span>
                <motion.div 
                  className="absolute -bottom-3 left-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                {pathname === link.href && (
                  <motion.div 
                    layoutId="navUnderline"
                    className="absolute -bottom-3 left-0 w-full h-[1.5px] bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right: Action Pillar */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <div className="hidden xl:flex flex-col items-end mr-4">
              <span className="text-[8px] font-bold tracking-widest text-gold/60 uppercase">The Reserve</span>
              <span className="text-[10px] font-bold text-whitesmoke tracking-wider">+92 (061) 4504100</span>
            </div>

            <Link href="/reservations" className="hidden sm:block">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gold text-luxury-black px-8 py-3 rounded-full font-bold text-[10px] tracking-[0.2em] uppercase transition-all overflow-hidden group"
              >
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 opacity-20" />
                <span className="relative z-10">Secure a Table</span>
              </motion.button>
            </Link>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-3 text-gold hover:bg-gold/10 rounded-full transition-colors"
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
                className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/10 transition-all"
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
                        <span className="font-heading text-6xl md:text-8xl text-whitesmoke/20 group-hover:text-gold transition-colors duration-500 italic">0{i + 1}</span>
                        <span className="font-heading text-5xl md:text-7xl font-bold text-whitesmoke group-hover:translate-x-4 transition-transform duration-500 uppercase tracking-tighter">
                          {link.name.split(' ')[link.name.split(' ').length - 1]}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="hidden lg:block space-y-12">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-gold/20 relative group">
                    <img src="/images/hero/luxury_dish.png" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-luxury-black/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay Footer */}
            <div className="p-12 md:p-24 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">Address</span>
                  <p className="text-whitesmoke/40 text-sm">Main Abdali Rd, Multan</p>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-[0.3em]">Follow</span>
                  <p className="text-whitesmoke/40 text-sm">Instagram / Facebook</p>
                </div>
              </div>
              <Link href="/reservations" onClick={() => setIsOpen(false)}>
                <motion.button className="bg-gold text-luxury-black px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[0.3em]">
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
