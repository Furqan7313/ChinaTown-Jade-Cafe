"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Send, CheckCircle2 } from "lucide-react";
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
    <div className="w-full max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-12 rounded-[2.5rem] border border-gold/10 relative overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-10">
                <span className="text-crimson font-bold uppercase tracking-[0.4em] text-[10px] mb-2 block">Share Your Experience</span>
                <h3 className="text-3xl font-heading font-bold uppercase tracking-widest">Write a Review</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center gap-4 mb-8">
                  <p className="text-xs uppercase tracking-widest text-whitesmoke/40">Overall Rating</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          size={32}
                          fill={(hoveredRating || rating) >= star ? "#D4AF37" : "transparent"}
                          className={(hoveredRating || rating) >= star ? "text-gold" : "text-whitesmoke/20"}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-whitesmoke/60">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-3 outline-none transition-colors text-whitesmoke" 
                      placeholder="Enter your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-whitesmoke/60">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-3 outline-none transition-colors text-whitesmoke" 
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-whitesmoke/60">Your Thoughts</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-whitesmoke/5 border-b border-whitesmoke/20 focus:border-gold py-3 outline-none transition-colors text-whitesmoke resize-none" 
                    placeholder="Tell us about your dining experience..." 
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                  />
                </div>

                <PremiumButton type="submit" className="w-full mt-8 group">
                  Submit Review <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </PremiumButton>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} className="text-gold" />
              </div>
              <h3 className="text-3xl font-heading font-bold mb-4">Thank You!</h3>
              <p className="text-whitesmoke/60 max-w-sm mx-auto">
                Your feedback helps us maintain our standards of excellence. Your review will be posted shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-gold font-bold uppercase tracking-widest text-xs underline underline-offset-8"
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
