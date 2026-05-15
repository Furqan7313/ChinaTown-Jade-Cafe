"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="relative bg-[#050505] selection:bg-gold/30 min-h-screen overflow-x-hidden text-whitesmoke font-light pt-32 pb-32">
      
      {/* Background Decor */}
      <div className="cinematic-noise" />
      <div className="ambient-glow w-[50vw] h-[50vh] top-0 right-0 opacity-15" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6 opacity-80"
          >
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold font-medium tracking-[0.4em] text-[9px] uppercase">Reach Out</span>
            <span className="h-px w-8 bg-gold" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl font-normal mb-8 tracking-tight text-white"
          >
            Get In <span className="italic text-white/80">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-[14px] md:text-base leading-relaxed font-light max-w-2xl mx-auto"
          >
            Whether you have a general inquiry, require private event coordination, or simply wish to speak with our concierge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-16"
          >
            <div className="space-y-12">
              <div className="border-l border-gold/30 pl-6 md:pl-8">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium mb-8">Contact Concierge</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mt-1 shrink-0">
                      <MapPin className="text-gold" size={14} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 mb-2">Location</p>
                      <p className="text-sm text-white/50 leading-relaxed font-light">Main Abdali Rd, opposite ZTBL Bank,<br/>Abdali Colony, Multan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mt-1 shrink-0">
                      <Phone className="text-gold" size={14} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 mb-2">Phone</p>
                      <p className="text-sm text-white/50 leading-relaxed font-light">+92 (061) 4504100<br/>+92 300 0000000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mt-1 shrink-0">
                      <Mail className="text-gold" size={14} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/80 mb-2">Email</p>
                      <p className="text-sm text-white/50 leading-relaxed font-light">luxury@chinatownjade.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-l border-white/20 pl-6 md:pl-8">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/80 font-medium mb-8">Service Hours</h3>
                <div className="space-y-5 text-sm text-white/50 font-light max-w-sm">
                   <div className="flex justify-between border-b border-white/5 pb-3">
                      <span>Mon - Fri</span>
                      <span className="text-white/90">12:00 PM - 11:30 PM</span>
                   </div>
                   <div className="flex justify-between border-b border-white/5 pb-3">
                      <span>Sat - Sun</span>
                      <span className="text-white/90">12:00 PM - 12:30 AM</span>
                   </div>
                   <div className="flex justify-between">
                      <span>Hi-Tea</span>
                      <span className="text-gold">04:00 PM - 07:00 PM</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-luxury-glass p-8 md:p-12 rounded-sm border border-white/5 premium-shadow relative overflow-hidden min-h-[500px] flex items-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 w-full relative z-10" 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                >
                  <div className="space-y-3">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Full Name</label>
                    <input required type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light placeholder:text-white/20 focus:bg-white/5" placeholder="Your Name" />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Email Address</label>
                    <input required type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light placeholder:text-white/20 focus:bg-white/5" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Message</label>
                    <textarea required rows={4} className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light resize-none placeholder:text-white/20 focus:bg-white/5" placeholder="How can we assist you?"></textarea>
                  </div>

                  <div className="pt-4">
                    <motion.button 
                      whileHover={{ backgroundColor: "rgba(212,175,55,1)", color: "#000", scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gold/90 text-black py-5 rounded-sm font-medium text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3"
                    >
                      Send Message
                      <Send size={14} className="opacity-70" />
                    </motion.button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center relative z-10 w-full py-20"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
                    <CheckCircle2 size={32} className="text-gold" strokeWidth={1} />
                  </div>
                  <h3 className="text-4xl font-heading text-white mb-6">Message Sent</h3>
                  <p className="text-white/50 text-[14px] leading-relaxed max-w-xs mx-auto mb-10">
                    Thank you for reaching out. Our concierge will review your message and respond shortly.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-gold font-medium uppercase tracking-[0.3em] text-[9px] hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-2"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
