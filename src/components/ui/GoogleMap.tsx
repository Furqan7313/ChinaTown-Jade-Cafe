"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function GoogleMap() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.5761097822547!2d71.4469833!3d30.192100499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b33b3c0704e31%3A0x2ad124547638332!2sChinatown%20%26%20Jade%20Caf%C3%A9!5e0!3m2!1sen!2s!4v1778496810264!5m2!1sen!2s";
  const directionsUrl = "https://www.google.com/maps/dir//Chinatown+%26+Jade+Caf%C3%A9,+Main+Abdali+Rd,+opposite+ZTBL+Bank%D8%8C+near+UBL+%26+Standard+Chartered+Bank%D8%8C+Adali+Colony,+Multan,+66000,+Pakistan%E2%80%AD/@30.1921005,71.4469833,17z/data=!4m16!1m7!3m6!1s0x393b33b3c0704e31:0x2ad124547638332!2sChinatown+%26+Jade+Caf%C3%A9!8m2!3d30.1921005!4d71.4469833!16s%2Fg%2F11h3bj2jj6!4m7!1m0!1m5!1m1!1s0x393b33b3c0704e31:0x2ad124547638332!2m2!1d71.4469833!2d30.1921005?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section className="relative py-24 px-6 bg-luxury-black overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <span className="text-gold font-bold uppercase tracking-[0.4em] text-xs mb-4 block">Visit Us</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mb-8">Locate the <span className="text-gradient-gold italic">Experience</span></h2>
            <p className="text-whitesmoke/60 mb-8 font-light leading-relaxed">
              Find us in the heart of Multan. Our premium location on Abdali Road offers easy access and ample parking for our valued guests.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <div>
                  <p className="font-bold text-whitesmoke">Main Abdali Rd</p>
                  <p className="text-sm text-whitesmoke/40">Opposite ZTBL Bank, Adali Colony, Multan</p>
                </div>
              </div>
            </div>

            <motion.a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gold text-luxury-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-colors hover:bg-white"
            >
              <Navigation size={18} /> Get Directions
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-[500px] rounded-[2.5rem] overflow-hidden border border-gold/10 relative shadow-2xl"
          >
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none border-[12px] border-luxury-black/50 rounded-[2.5rem]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
