"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import PremiumButton from "./PremiumButton";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) return alert("Please select a rating.");
    // Simulate submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-dark p-10 md:p-20 rounded-[3.5rem] border border-white/5 relative overflow-hidden shadow-2xl"
      >
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-jade/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-jade/5 rounded-full blur-3xl -ml-32 -mb-32" />

        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative z-10"
            >
              <div className="text-center mb-16">
                <div className="inline-flex flex-col items-center">
                  <span className="text-jade font-bold uppercase tracking-[0.6em] text-[10px] mb-4 block">Share Your Experience</span>
                  <h3 className="text-4xl md:text-5xl font-heading italic text-whitesmoke mb-4">Write a Review</h3>
                  <div className="h-0.5 w-16 bg-jade/30 rounded-full" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="flex flex-col items-center gap-6 mb-12">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium">Overall Rating</p>
                  <div className="flex gap-4">
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
                          size={36}
                          fill={(hoveredRating || rating) >= star ? "currentColor" : "none"}
                          className={cn(
                            "transition-all duration-500",
                            (hoveredRating || rating) >= star 
                              ? "text-gold drop-shadow-[0_0_15px_rgba(200,169,107,0.4)]" 
                              : "text-white/10 group-hover:text-white/30"
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold ml-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 focus:border-jade/50 focus:bg-white/[0.05] outline-none transition-all text-whitesmoke text-sm backdrop-blur-sm" 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold ml-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 focus:border-jade/50 focus:bg-white/[0.05] outline-none transition-all text-whitesmoke text-sm backdrop-blur-sm" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold ml-2">Your Thoughts</label>
                  <textarea 
                    required
                    rows={5}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-3xl px-6 py-5 focus:border-jade/50 focus:bg-white/[0.05] outline-none transition-all text-whitesmoke text-sm resize-none backdrop-blur-sm" 
                    placeholder="Tell us about your dining experience..." 
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  />
                </div>

                <div className="pt-6">
                  <PremiumButton type="submit" variant="jade" className="w-full py-6 rounded-full group shadow-2xl">
                    Submit Review <Send size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </PremiumButton>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 relative z-10"
            >
              <div className="w-24 h-24 bg-jade/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-jade/20 shadow-[0_0_30px_rgba(15,107,91,0.1)]">
                <CheckCircle2 size={48} className="text-jade" />
              </div>
              <h3 className="text-4xl font-heading italic mb-6">Thank You!</h3>
              <p className="text-whitesmoke/50 max-w-md mx-auto leading-relaxed">
                Your feedback helps us maintain our standards of excellence. Your review will be shared with our team and published shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-12 text-jade font-bold uppercase tracking-[0.4em] text-[10px] hover:text-white transition-colors underline underline-offset-[12px] decoration-jade/30"
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
