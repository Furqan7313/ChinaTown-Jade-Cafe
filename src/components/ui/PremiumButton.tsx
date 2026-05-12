"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline";
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
        "relative px-10 py-4 rounded-md font-bold text-xs tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden group shadow-xl",
        variant === "primary" 
          ? "bg-gold text-luxury-black shadow-gold/20" 
          : "bg-transparent border border-gold/40 text-gold hover:bg-gold/5",
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
