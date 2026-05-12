"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative py-32 bg-luxury-black border-t border-gold/10 overflow-hidden">
      <div className="cinematic-grain" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Upper Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
          
          {/* Brand Pillar */}
          <div className="lg:col-span-4 space-y-12">
            <Logo className="scale-110 origin-left" />
            <p className="text-xl text-whitesmoke/40 font-light leading-relaxed max-w-sm italic">
              "Redefining the dialogue between traditional Asian heritage and modern luxury hospitality."
            </p>
            <div className="flex gap-8">
              <motion.a whileHover={{ y: -5, color: "#D4AF37" }} href="#" className="text-whitesmoke/30 transition-colors">
                <InstagramIcon size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: "#D4AF37" }} href="#" className="text-whitesmoke/30 transition-colors">
                <FacebookIcon size={20} />
              </motion.a>
              <motion.a whileHover={{ y: -5, color: "#D4AF37" }} href="#" className="text-whitesmoke/30 transition-colors">
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Navigation Pillar */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
              <div className="space-y-10">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold/60">Navigation</h4>
                <ul className="space-y-6">
                  {['The Menu', 'Our Story', 'Reservations', 'Gallery'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-sm text-whitesmoke/60 hover:text-gold transition-all duration-500 font-medium">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-10">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold/60">Contact</h4>
                <ul className="space-y-6 text-sm text-whitesmoke/60">
                  <li className="flex items-start gap-4">
                    <MapPin size={14} className="mt-1 text-gold/40" />
                    <span>Main Abdali Rd, Multan</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone size={14} className="mt-1 text-gold/40" />
                    <span>+92 (061) 4504100</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail size={14} className="mt-1 text-gold/40" />
                    <span>info@jadecafe.com</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-10 col-span-2 md:col-span-1">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold/60">Opening</h4>
                <div className="space-y-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-whitesmoke">Mon - Thu</span>
                    <span className="text-[10px] text-whitesmoke/40 tracking-widest">12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm text-whitesmoke">Fri - Sun</span>
                    <span className="text-[10px] text-whitesmoke/40 tracking-widest">12:00 PM - 12:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/10">
            © 2026 THE JADE GROUP — ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20">
            <Link href="#" className="hover:text-gold transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
