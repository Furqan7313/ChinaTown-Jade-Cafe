"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline" | "jade";
}

export default function PremiumButton({ 
  children, 
  variant = "primary", 
  className,
  type = "button",
  ...props
}: PremiumButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      className={cn(
        "relative px-12 py-5 rounded-full font-bold text-[10px] tracking-[0.3em] uppercase transition-all duration-700 overflow-hidden group",
        variant === "jade" 
          ? "bg-jade text-white shadow-2xl shadow-jade/20" 
          : variant === "primary"
          ? "bg-gold text-luxury-black shadow-2xl shadow-gold/20"
          : "bg-transparent border border-white/10 text-whitesmoke hover:border-jade/50 hover:bg-jade/5",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-3">
        {children}
      </span>
      {variant === "primary" && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-0"
        />
      )}
    </motion.button>
  );
}
