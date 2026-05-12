"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reservations", href: "/reservations" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] pt-6 md:pt-10 px-4 md:px-8 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto flex justify-center w-full">
          <div className={cn(
            "flex items-center justify-between w-full px-6 md:px-10 py-4 md:py-5 rounded-full transition-all duration-700 pointer-events-auto border backdrop-blur-2xl",
            isScrolled 
              ? "bg-luxury-black/95 border-gold/30 shadow-[0_30px_100px_rgba(0,0,0,0.7)]" 
              : "bg-luxury-black/40 border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
          )}>
            
            {/* Pillar 1: Logo */}
            <div className="flex-1 flex items-center justify-start">
              <Link href="/" className="group">
                <Logo className={cn("transition-all duration-700", isScrolled ? "h-8 md:h-10" : "h-10 md:h-14")} />
              </Link>
            </div>

            {/* Pillar 2: Centered Links (Desktop) */}
            <nav className="hidden lg:flex items-center justify-center gap-1 flex-[2]">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-[11px] font-bold tracking-[0.25em] uppercase transition-all group"
                >
                  <span className={cn(
                    "relative z-10 transition-colors duration-500",
                    pathname === link.href ? "text-gold" : "text-whitesmoke/50 group-hover:text-whitesmoke"
                  )}>
                    {link.name}
                  </span>
                  {pathname === link.href && (
                    <motion.div 
                      layoutId="active-nav"
                      className="absolute inset-x-4 bottom-1 h-px bg-gold"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Pillar 3: Actions */}
            <div className="flex-1 flex items-center justify-end gap-4 md:gap-6">
              <Link
                href="/reservations"
                className="hidden lg:flex items-center gap-2 bg-gold text-luxury-black px-8 py-3.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gold/10"
              >
                <span>Book Now</span>
                <ArrowRight size={14} />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden p-2 text-gold hover:bg-gold/10 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-black flex flex-col p-8 md:p-12 overflow-hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <Logo className="h-10" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 text-gold bg-white/5 rounded-full border border-white/10"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col gap-8 md:gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-5xl md:text-7xl font-heading font-medium tracking-tighter transition-all hover:italic hover:pl-4",
                      pathname === link.href ? "text-gold italic pl-4" : "text-whitesmoke/20 hover:text-gold"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-auto"
            >
              <Link
                href="/reservations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-between bg-gold text-luxury-black p-8 rounded-2xl group"
              >
                <span className="text-2xl font-bold tracking-tighter uppercase">Reserve A Table</span>
                <ArrowRight size={32} className="group-hover:translate-x-4 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

