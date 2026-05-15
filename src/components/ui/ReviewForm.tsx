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
    <div className="w-full max-w-7xl mx-auto py-40 px-6 md:px-12 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-32">
                <div className="lg:max-w-md">
                  <span className="text-gold font-bold uppercase tracking-[1em] text-[10px] mb-8 block opacity-40">Guest Experience</span>
                  <h3 className="text-6xl md:text-8xl font-heading italic text-whitesmoke mb-10 leading-[0.85] tracking-tighter">Share Your <br /><span className="text-gradient-gold">Narrative</span></h3>
                  <p className="text-text-dim text-lg font-light italic leading-relaxed opacity-60">
                    "Every guest's journey is unique. We invite you to share your moments of delight and help us refine our art of hospitality."
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex-grow max-w-3xl space-y-16">
                  <div className="flex flex-col items-start gap-10">
                    <p className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Overall Rating</p>
                    <div className="flex gap-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          onClick={() => setRating(star)}
                          className="transition-all duration-300 hover:scale-125 focus:outline-none group"
                        >
                          <Star
                            size={40}
                            fill={(hoveredRating || rating) >= star ? "currentColor" : "none"}
                            className={cn(
                              "transition-all duration-500",
                              (hoveredRating || rating) >= star 
                                ? "text-gold shadow-gold" 
                                : "text-white/5 group-hover:text-white/20"
                            )}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gold/40 font-bold">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-transparent border-b border-white/5 px-0 py-6 focus:border-gold outline-none transition-all text-whitesmoke text-xl font-light rounded-none" 
                        placeholder="Patron Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-6">
                      <label className="text-[10px] uppercase tracking-[0.4em] text-gold/40 font-bold">Email Address</label>
                      <input 
                        required
                        type="email" 
                        className="w-full bg-transparent border-b border-white/5 px-0 py-6 focus:border-gold outline-none transition-all text-whitesmoke text-xl font-light rounded-none" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <label className="text-[10px] uppercase tracking-[0.4em] text-gold/40 font-bold">Your Thoughts</label>
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b border-white/5 px-0 py-6 focus:border-gold outline-none transition-all text-whitesmoke text-xl font-light resize-none rounded-none" 
                      placeholder="Describe your dining experience..." 
                      value={formData.comment}
                      onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    />
                  </div>

                  <div className="pt-10">
                    <motion.button 
                      whileHover={{ y: -5 }}
                      type="submit" 
                      className="w-full bg-gold-gradient text-black py-8 rounded-none font-bold text-[12px] tracking-[0.6em] uppercase transition-all shadow-2xl shadow-gold/10 flex items-center justify-center gap-4 group"
                    >
                      Submit Review 
                      <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform opacity-60" />
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
              className="text-center py-40 relative z-10"
            >
              <div className="w-24 h-24 bg-gold/5 rounded-none flex items-center justify-center mx-auto mb-12 border border-gold/10">
                <CheckCircle2 size={48} className="text-gold" />
              </div>
              <h3 className="text-6xl font-heading italic mb-8 text-whitesmoke">Gratitude</h3>
              <p className="text-text-dim max-w-lg mx-auto leading-relaxed text-xl italic opacity-60">
                "Your narrative helps us refine our art. Every word is valued in our sanctuary."
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-20 text-gold font-bold uppercase tracking-[0.5em] text-[10px] hover:text-white transition-colors border-b border-gold/20 pb-4"
              >
                Write another review
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
