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
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 flex justify-center pointer-events-none pt-6"
    >
      <div className={cn(
        "flex items-center justify-between w-full max-w-7xl px-6 md:px-10 py-3 rounded-full transition-all duration-700 pointer-events-auto border backdrop-blur-md",
        isScrolled 
          ? "bg-luxury-black/80 border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2" 
          : "bg-luxury-black/20 border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.1)] py-4 md:py-5"
      )}>
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="flex items-center"
          >
            <Logo className={cn("transition-all duration-700", isScrolled ? "h-10" : "h-12 md:h-16")} />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-6 py-2 text-[10px] font-bold tracking-[0.25em] uppercase transition-all group"
            >
              <span className={cn(
                "relative z-10 transition-colors duration-500",
                pathname === link.href ? "text-gold" : "text-whitesmoke/50 group-hover:text-whitesmoke"
              )}>
                {link.name}
              </span>
              
              {/* Active Indicator */}
              {pathname === link.href && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute inset-0 bg-gold/5 rounded-full border border-gold/10 -z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {/* Hover Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold/50 group-hover:w-1/2 transition-all duration-500" />
            </Link>
          ))}
          
          <div className="ml-4 h-6 w-[1px] bg-white/10" />
          
          <Link
            href="/reservations"
            className="ml-6 relative overflow-hidden group rounded-full"
          >
            <div className="relative bg-crimson text-white px-9 py-3 rounded-full text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-500 group-hover:bg-gold group-hover:text-luxury-black shadow-lg shadow-crimson/20 group-hover:shadow-gold/20">
              <span className="relative z-10">Reserve</span>
            </div>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-whitesmoke group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-5 flex flex-col justify-between items-end">
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0, width: isMobileMenuOpen ? "100%" : "100%" }}
              className="h-[1.5px] w-full bg-gold block origin-left rounded-full" 
            />
            <motion.span 
              animate={{ opacity: isMobileMenuOpen ? 0 : 1, width: isMobileMenuOpen ? "0%" : "70%" }}
              className="h-[1.5px] bg-gold block rounded-full" 
            />
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0, width: isMobileMenuOpen ? "100%" : "100%" }}
              className="h-[1.5px] w-full bg-gold block origin-left rounded-full" 
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

