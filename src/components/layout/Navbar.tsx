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
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] transition-all duration-700 pointer-events-none",
        isScrolled ? "pt-4" : "pt-8 md:pt-12"
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex justify-center w-full px-6">
        <div className={cn(
          "flex items-center justify-between w-full px-8 md:px-12 rounded-full transition-all duration-1000 pointer-events-auto border backdrop-blur-3xl",
          isScrolled 
            ? "bg-luxury-black/90 border-gold/30 shadow-[0_40px_120px_rgba(0,0,0,0.8)] py-3 md:py-4 scale-[0.98]" 
            : "bg-transparent border-white/10 py-6 md:py-10 scale-100"
        )}>
          
          {/* Pillar 1: Brand */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="group">
              <motion.div
                animate={{ scale: isScrolled ? 0.9 : 1 }}
                className="flex items-center"
              >
                <Logo className={cn("transition-all duration-1000", isScrolled ? "h-8 md:h-10" : "h-11 md:h-16")} />
              </motion.div>
            </Link>
          </div>

          {/* Pillar 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 flex-[2]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-2 text-[11px] font-bold tracking-[0.35em] uppercase transition-all group"
              >
                <span className={cn(
                  "relative z-10 transition-colors duration-700",
                  pathname === link.href ? "text-gold" : "text-whitesmoke/40 group-hover:text-whitesmoke"
                )}>
                  {link.name}
                </span>
                {pathname === link.href && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute inset-0 bg-gold/[0.03] rounded-full -z-0"
                    transition={{ type: "spring", duration: 0.8 }}
                  />
                )}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-1/2 transition-all duration-700 opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Pillar 3: Actions */}
          <div className="flex-1 flex items-center justify-end gap-8">
            <Link
              href="/reservations"
              className="hidden lg:flex items-center gap-3 group relative"
            >
              <div className="absolute -inset-4 bg-gold/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "relative z-10 bg-gold text-luxury-black font-bold tracking-[0.25em] uppercase transition-all duration-700 flex items-center gap-3 shadow-2xl rounded-full",
                  isScrolled ? "px-8 py-3.5 text-[9px]" : "px-10 py-4 text-[10px]"
                )}
              >
                <span>Reserve A Table</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
              </motion.div>
            </Link>

            <button
              className="lg:hidden p-3 text-gold hover:bg-gold/10 rounded-full transition-colors border border-gold/20"
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

