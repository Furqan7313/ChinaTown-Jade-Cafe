"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="py-24 border-t border-gold/5 bg-luxury-black relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="space-y-8">
            <Logo className="h-16 md:h-20 w-auto" />
            <p className="text-sm text-whitesmoke/40 leading-relaxed">
              Elevating the dining landscape of Multan with premium flavors and cinematic ambiance. Experience luxury in every bite.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-whitesmoke/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-whitesmoke/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-gold">Quick Links</h4>
            <ul className="space-y-4 text-sm text-whitesmoke/60">
              <li><Link href="/menu" className="hover:text-gold transition-colors">The Menu</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/reservations" className="hover:text-gold transition-colors">Book a Table</Link></li>
              <li><Link href="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-gold">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-whitesmoke/60">
              <li className="flex justify-between border-b border-whitesmoke/5 pb-2">
                <span>Mon - Fri</span>
                <span className="text-whitesmoke">12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-whitesmoke/5 pb-2">
                <span>Sat - Sun</span>
                <span className="text-whitesmoke">12:00 PM - 12:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-whitesmoke/5 pb-2">
                <span>Hi-Tea</span>
                <span className="text-whitesmoke">04:00 PM - 07:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-10 text-gold">Newsletter</h4>
            <p className="text-sm text-whitesmoke/40 mb-6">Join our elite circle for exclusive event invites.</p>
            <div className="relative">
              <input type="email" placeholder="Email Address" className="w-full bg-whitesmoke/5 border border-whitesmoke/10 rounded-full py-3 px-6 outline-none focus:border-gold transition-colors text-sm" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gold text-luxury-black p-2 rounded-full hover:scale-110 transition-transform">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-whitesmoke/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-whitesmoke/30">
            © 2026 ChinaTown & Jade Café Multan. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-whitesmoke/30">
            <a href="#" className="hover:text-whitesmoke">Privacy Policy</a>
            <a href="#" className="hover:text-whitesmoke">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
