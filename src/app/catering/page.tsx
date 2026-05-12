"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GlassWater, Cake, Users, HandPlatter } from "lucide-react";
import Link from "next/link";

const events = [
  { icon: <Cake className="text-gold w-8 h-8" />, title: "Birthday Events", desc: "Celebrate your special day with our curated birthday packages and elegant decorations." },
  { icon: <Users className="text-gold w-8 h-8" />, title: "Corporate Dinners", desc: "Professional and sophisticated dining experiences for your team or clients." },
  { icon: <GlassWater className="text-gold w-8 h-8" />, title: "Family Gatherings", desc: "Spacious seating and family-style sharing platters for unforgettable reunions." },
  { icon: <HandPlatter className="text-gold w-8 h-8" />, title: "Private Bookings", desc: "Exclusive access to our private dining areas for intimate gatherings." },
];

export default function CateringPage() {
  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Catering & <span className="text-jade dark:text-gold">Events</span></h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Let us make your next event extraordinary with our premium catering services and private event spaces.
          </p>
        </div>

        <div className="relative h-80 md:h-[400px] rounded-3xl overflow-hidden mb-20 shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920&auto=format&fit=crop" 
            alt="Event Catering" 
            fill 
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-8 md:p-12">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">Memorable Moments, Exceptional Food</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-charcoal p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 text-center"
            >
              <div className="w-16 h-16 mx-auto bg-beige dark:bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6">
                {event.icon}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{event.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="bg-beige dark:bg-[#111] rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-xl border border-gray-100 dark:border-gray-800">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to plan your event?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact our events team to discuss custom menus, seating arrangements, and how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/reservations" 
              className="bg-jade text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase hover:bg-emerald transition-colors"
            >
              Inquire Now
            </Link>
            <a 
              href="https://wa.me/923001234567" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold tracking-wider uppercase hover:opacity-90 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
