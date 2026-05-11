"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 20 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 flex justify-center pointer-events-none"
    >
      <div className={cn(
        "flex items-center justify-between w-full max-w-7xl px-8 py-3 rounded-full transition-all duration-500 pointer-events-auto",
        isScrolled 
          ? "glass shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-gold/20 py-2" 
          : "bg-transparent border-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Logo className={cn("transition-all duration-500", isScrolled ? "h-10" : "h-12 md:h-16")} />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors group"
            >
              <span className={cn(
                "relative z-10 transition-colors duration-300",
                pathname === link.href ? "text-gold" : "text-whitesmoke/50 group-hover:text-whitesmoke"
              )}>
                {link.name}
              </span>
              
              {/* Active Dot */}
              {pathname === link.href && (
                <motion.div 
                  layoutId="active-dot"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full"
                />
              )}
              
              {/* Hover Glow */}
              <motion.div 
                className="absolute inset-0 bg-gold/5 blur-sm rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
          
          <div className="ml-4 h-6 w-[1px] bg-whitesmoke/10" />
          
          <Link
            href="/reservations"
            className="ml-6 relative bg-crimson text-white px-8 py-2.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden group shadow-lg shadow-crimson/20 transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Reserve</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-whitesmoke group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0 }}
              className="h-[1.5px] w-full bg-gold block origin-left" 
            />
            <motion.span 
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="h-[1.5px] w-full bg-gold block" 
            />
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0 }}
              className="h-[1.5px] w-full bg-gold block origin-left" 
            />
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            transition={{ type: "spring", damping: 30, stiffness: 100 }}
            className="fixed inset-0 w-full h-screen bg-luxury-black flex flex-col items-center justify-center gap-8 lg:hidden z-40"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(179,0,27,0.1)_0%,transparent_70%)]" />
            
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-4xl font-heading font-bold tracking-widest transition-colors",
                    pathname === link.href ? "text-gold" : "text-whitesmoke/40 hover:text-gold"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                href="/reservations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 bg-crimson text-white px-12 py-5 rounded-full text-xs font-bold tracking-widest uppercase shadow-2xl shadow-crimson/30"
              >
                Book A Table
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

