"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a rating.");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-20 md:py-32 px-6 md:px-12 border-t border-white/5 bg-[#050505] relative">
      <div className="ambient-glow w-[40vw] h-[40vw] top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-10" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
                <div className="lg:max-w-md w-full">
                  <div className="flex items-center gap-4 mb-6 opacity-80">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-gold font-medium tracking-[0.3em] text-[9px] uppercase">Guest Experience</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading text-white mb-8 leading-[1.1] tracking-tight">
                    Share Your <br /><span className="italic text-white/80">Narrative</span>
                  </h3>
                  <p className="text-white/50 text-[14px] md:text-base font-light leading-relaxed">
                    Every guest's journey is unique. We invite you to share your moments of delight and help us refine our art of hospitality.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex-grow w-full max-w-3xl space-y-12 bg-luxury-glass p-8 md:p-12 rounded-sm border border-white/5 premium-shadow">
                  <div className="flex flex-col items-center sm:items-start gap-6">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Overall Rating</p>
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => setRating(star)}
                          className="transition-all duration-300 hover:scale-110 focus:outline-none"
                        >
                          <Star
                            size={32}
                            fill={(hoveredRating || rating) >= star ? "currentColor" : "none"}
                            strokeWidth={1}
                            className={cn(
                              "transition-colors duration-300",
                              (hoveredRating || rating) >= star 
                                ? "text-gold" 
                                : "text-white/20 hover:text-white/50"
                            )}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm px-4 py-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light placeholder:text-white/20 focus:bg-white/5" 
                        placeholder="Patron Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm px-4 py-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light placeholder:text-white/20 focus:bg-white/5" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-medium">Your Thoughts</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm px-4 py-4 focus:border-gold outline-none transition-colors text-white/90 text-sm font-light resize-none placeholder:text-white/20 focus:bg-white/5" 
                      placeholder="Describe your dining experience..." 
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    />
                  </div>

                  <div className="pt-4">
                    <motion.button 
                      whileHover={{ backgroundColor: "rgba(212,175,55,1)", color: "#000", scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="w-full bg-gold/90 text-black py-5 rounded-sm font-medium text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center gap-3"
                    >
                      Submit Review 
                      <Send size={14} className="opacity-70" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 md:py-32"
            >
              <div className="w-20 h-20 bg-gold/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/20">
                <CheckCircle2 size={32} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-4xl md:text-5xl font-heading mb-6 text-white">Gratitude</h3>
              <p className="text-white/50 max-w-md mx-auto leading-relaxed text-[14px] md:text-base font-light italic">
                "Your narrative helps us refine our art. Every word is profoundly valued in our sanctuary."
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-12 text-gold font-medium uppercase tracking-[0.3em] text-[9px] hover:text-white transition-colors border-b border-gold/30 hover:border-white pb-2"
              >
                Share Another Moment
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
