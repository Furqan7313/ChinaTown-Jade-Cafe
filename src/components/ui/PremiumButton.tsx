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
      whileTap={{ scale: 0.95 }}
      type={type}
      className={cn(
        "relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden group",
        variant === "primary" 
          ? "bg-crimson text-white shadow-lg shadow-crimson/30" 
          : "bg-transparent border border-whitesmoke/50 text-whitesmoke hover:border-gold hover:text-gold",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === "primary" && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-gold to-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        />
      )}
    </motion.button>
  );
}
