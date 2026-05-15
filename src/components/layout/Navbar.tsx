"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";

const navLinksLeft = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
];

const navLinksRight = [
  { name: "Reservations", href: "/reservations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const allLinks = [...navLinksLeft, ...navLinksRight];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-gradient-to-b from-black/80 to-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-3">
            
            {/* Left Links */}
            <nav className="hidden lg:flex items-center justify-start gap-12">
              {navLinksLeft.map((link) => (
                <Link key={link.name} href={link.href} className="group relative">
                  <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-500 ${
                    pathname === link.href ? "text-gold" : "text-white/60 group-hover:text-white"
                  }`}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex items-center justify-start lg:justify-center">
              <Link href="/" className="group block">
                <Logo className="w-auto h-8 md:h-12 opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>

            {/* Right Links & Mobile Toggle */}
            <div className="flex items-center justify-end gap-12">
              <nav className="hidden lg:flex items-center gap-12">
                {navLinksRight.map((link) => (
                  <Link key={link.name} href={link.href} className="group relative">
                    <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-500 ${
                      pathname === link.href ? "text-gold" : "text-white/60 group-hover:text-white"
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                ))}
              </nav>

              <button 
                onClick={() => setIsOpen(true)}
                className="lg:hidden flex items-center gap-3 text-white/70 hover:text-gold transition-colors"
              >
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase hidden sm:block">Menu</span>
                <Menu size={22} strokeWidth={1} />
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ULTRA-LUXURY FULLSCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
            exit={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col"
          >
            <div className="cinematic-noise pointer-events-none" />
            
            {/* Overlay Header */}
            <div className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/5">
              <Logo className="h-8 md:h-10 w-auto" />
              <button 
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold/30 transition-all duration-300"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Links Pillar */}
            <div className="flex-grow flex flex-col justify-center px-6 md:px-20 lg:px-32 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center h-full py-12">
                <nav className="flex flex-col gap-6 md:gap-10">
                  {allLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="group flex flex-col gap-2"
                      >
                        <span className="text-[10px] font-medium text-gold/50 uppercase tracking-[0.3em]">0{i + 1}</span>
                        <span className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-normal group-hover:text-gold group-hover:translate-x-4 transition-all duration-500">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="hidden lg:flex flex-col justify-center h-full">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="aspect-[3/4] max-h-[60vh] rounded-sm overflow-hidden relative group"
                  >
                    <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="absolute bottom-10 left-10 right-10">
                      <span className="text-[9px] font-medium text-gold uppercase tracking-[0.3em] block mb-2">Signature Creation</span>
                      <h4 className="font-heading text-3xl text-white">The Jade Experience</h4>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Overlay Footer */}
            <div className="px-6 md:px-12 py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
              <div className="flex gap-12 text-center md:text-left">
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-medium text-gold uppercase tracking-[0.3em]">Address</span>
                  <p className="text-white/50 text-[13px] font-light">Main Abdali Rd, Multan</p>
                </div>
              </div>
              <Link href="/reservations" onClick={() => setIsOpen(false)} className="w-full md:w-auto">
                <motion.button 
                  whileHover={{ y: -2 }}
                  className="w-full bg-gold text-black px-10 py-4 rounded-sm font-medium text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300"
                >
                  Reserve Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
