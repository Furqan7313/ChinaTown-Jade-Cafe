"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "03001785656";
  const message = "Hello! I'd like to make a reservation at ChinaTown & Jade Café.";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/^0/, "92")}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-white rounded-full"
      />
      <MessageCircle size={28} className="relative z-10" />
      
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 ease-in-out font-bold tracking-widest text-xs uppercase relative z-10">
        WhatsApp Us
      </span>
    </motion.a>
  );
}
