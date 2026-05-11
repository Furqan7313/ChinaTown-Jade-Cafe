"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, MessageSquare, Phone, MapPin, Mail } from "lucide-react";
import PremiumButton from "@/components/ui/PremiumButton";

export default function ReservationsPage() {
  return (
    <div className="pt-40 pb-24 min-h-screen bg-luxury-black text-whitesmoke relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Exclusive Experience
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-6xl md:text-8xl font-bold mb-8"
          >
            Book a <span className="text-gradient-gold italic">Private Table</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-whitesmoke/60 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Secure your spot for an unforgettable dining experience. For private events or parties larger than 12, please call us directly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 glass p-10 md:p-14 rounded-[3rem] border border-gold/10"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-whitesmoke/40 font-bold">Full Name</label>
                  <input type="text" className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-4 outline-none transition-colors text-whitesmoke" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-whitesmoke/40 font-bold">Phone Number</label>
                  <input type="tel" className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-4 outline-none transition-colors text-whitesmoke" placeholder="+92 300 0000000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-whitesmoke/40 font-bold flex items-center gap-2"><CalendarDays size={14} className="text-gold"/> Date</label>
                  <input type="date" className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-4 outline-none transition-colors text-whitesmoke invert dark:invert-0" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-whitesmoke/40 font-bold flex items-center gap-2"><Clock size={14} className="text-gold"/> Time</label>
                  <input type="time" className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-4 outline-none transition-colors text-whitesmoke" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-whitesmoke/40 font-bold flex items-center gap-2"><Users size={14} className="text-gold"/> Guests</label>
                  <select className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-4 outline-none transition-colors text-whitesmoke appearance-none">
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <option key={n} value={n} className="bg-luxury-black">{n} {n === 1 ? 'Person' : 'People'}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-widest text-whitesmoke/40 font-bold flex items-center gap-2"><MessageSquare size={14} className="text-gold"/> Special Requests</label>
                <textarea rows={3} className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-4 outline-none transition-colors text-whitesmoke resize-none" placeholder="Anniversary dinner, window seat, dietary requirements..."></textarea>
              </div>

              <PremiumButton className="w-full mt-10">Confirm Reservation</PremiumButton>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="space-y-10">
              <div className="border-l border-gold pl-8">
                <h3 className="text-xs uppercase tracking-[0.4em] text-gold font-bold mb-6">Contact Details</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-crimson mt-1" size={20} />
                    <div>
                      <p className="text-sm font-bold text-whitesmoke mb-2">Location</p>
                      <p className="text-sm text-whitesmoke/50 leading-relaxed">Main Abdali Rd, opposite ZTBL Bank,<br/>Adali Colony, Multan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-crimson mt-1" size={20} />
                    <div>
                      <p className="text-sm font-bold text-whitesmoke mb-2">Phone</p>
                      <p className="text-sm text-whitesmoke/50 leading-relaxed">+92 (061) 4504100<br/>+92 300 0000000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-crimson mt-1" size={20} />
                    <div>
                      <p className="text-sm font-bold text-whitesmoke mb-2">Email</p>
                      <p className="text-sm text-whitesmoke/50 leading-relaxed">luxury@chinatownjade.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l border-crimson pl-8">
                <h3 className="text-xs uppercase tracking-[0.4em] text-crimson font-bold mb-6">Opening Hours</h3>
                <div className="space-y-4 text-sm text-whitesmoke/60">
                   <div className="flex justify-between border-b border-whitesmoke/5 pb-2">
                      <span>Mon - Fri</span>
                      <span className="text-whitesmoke font-bold">12:00 PM - 11:30 PM</span>
                   </div>
                   <div className="flex justify-between border-b border-whitesmoke/5 pb-2">
                      <span>Sat - Sun</span>
                      <span className="text-whitesmoke font-bold">12:00 PM - 12:30 AM</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Hi-Tea</span>
                      <span className="text-whitesmoke font-bold">04:00 PM - 07:00 PM</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

