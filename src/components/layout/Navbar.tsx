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
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        backgroundColor: isScrolled ? "rgba(13, 13, 13, 0.95)" : "rgba(13, 13, 13, 0)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        paddingTop: isScrolled ? "1rem" : "2rem",
        paddingBottom: isScrolled ? "1rem" : "2rem",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 w-full z-50 transition-colors duration-500",
        isScrolled && "border-b border-gold/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group z-50">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Logo className={cn("transition-all duration-500", isScrolled ? "h-10 md:h-12" : "h-12 md:h-20")} />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-5 py-2 text-[10px] font-bold tracking-[0.25em] uppercase transition-colors group overflow-hidden"
            >
              <span className={cn(
                "relative z-10 transition-colors duration-300",
                pathname === link.href ? "text-gold" : "text-whitesmoke/60 group-hover:text-whitesmoke"
              )}>
                {link.name}
              </span>
              
              {/* Animated Hover Background */}
              <motion.div 
                className="absolute inset-0 bg-gold/5 rounded-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="nav-hover"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />

              {/* Active Underline */}
              {pathname === link.href && (
                <motion.div 
                  layoutId="active-nav"
                  className="absolute bottom-0 left-5 right-5 h-[2px] bg-gold rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="ml-6"
          >
            <Link
              href="/reservations"
              className="relative bg-crimson text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase overflow-hidden group shadow-lg shadow-crimson/20"
            >
              <span className="relative z-10">Reserve</span>
              <motion.div 
                className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
              <style jsx>{`
                span { transition: color 0.3s; }
                .group:hover span { color: #0d0d0d; }
              `}</style>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-whitesmoke group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-6 flex flex-col justify-center gap-1.5">
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
              className="h-[1.5px] w-full bg-gold block" 
            />
            <motion.span 
              animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? 20 : 0 }}
              className="h-[1.5px] w-full bg-gold block" 
            />
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
              className="h-[1.5px] w-full bg-gold block" 
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

