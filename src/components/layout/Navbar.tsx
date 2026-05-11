"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled 
          ? "bg-luxury-black/95 backdrop-blur-md py-4 border-b border-gold/10 shadow-2xl" 
          : "bg-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group z-50">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Logo className="h-12 md:h-16 w-auto" />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link
                href={link.href}
                className="relative text-xs font-bold tracking-[0.2em] uppercase text-whitesmoke/80 hover:text-gold transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/reservations"
              className="bg-crimson text-white px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-luxury-black transition-all duration-300 shadow-lg shadow-crimson/20"
            >
              Reserve
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-whitesmoke group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="relative w-6 h-6">
            <span className={cn(
              "absolute h-[2px] w-full bg-gold transition-all duration-300",
              isMobileMenuOpen ? "top-3 rotate-45" : "top-1"
            )} />
            <span className={cn(
              "absolute h-[2px] w-full bg-gold top-3 transition-all duration-300",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )} />
            <span className={cn(
              "absolute h-[2px] w-full bg-gold transition-all duration-300",
              isMobileMenuOpen ? "top-3 -rotate-45" : "top-5"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-luxury-black flex flex-col items-center justify-center gap-8 lg:hidden z-40"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
               <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-heading font-bold tracking-widest text-whitesmoke hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/reservations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 bg-crimson text-white px-12 py-4 rounded-full text-sm font-bold tracking-widest uppercase"
            >
              Book A Table
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

