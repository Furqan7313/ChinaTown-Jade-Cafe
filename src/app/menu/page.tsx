"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Utensils } from "lucide-react";

const categories = ["All", "Signature", "Wok Classics", "Heritage", "Desserts", "Café"];

const menuItems = [
  { id: 1, name: "Szechuan Soup", desc: "A spicy and tangy Chinese classic with tofu, wood ear mushrooms, and bamboo shoots.", price: "Rs. 900", category: "Wok Classics", image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Dynamite Shrimps", desc: "Crispy battered shrimps tossed in our signature creamy spicy sauce, served over delicate glass noodles.", price: "Rs. 2,450", category: "Signature", image: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Kung Pao Chicken", desc: "Stir-fried chicken with peanuts, seasonal vegetables, and chili peppers in a savory-sweet caramelized glaze.", price: "Rs. 1,460", category: "Wok Classics", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Beef Chilli Dry", desc: "Thinly sliced crispy beef stir-fried with green chilies, ginger, and dark soy.", price: "Rs. 1,550", category: "Wok Classics", image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Mutton Shinwari", desc: "Traditional Peshawari style mutton cooked with fresh tomatoes, green chilies, and black pepper in a cast iron wok.", price: "Rs. 3,995", category: "Heritage", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Mutton Kabli Pulao", desc: "Authentic Afghan style rice with tender mutton, caramelized sweet raisins, and carrots.", price: "Rs. 1,595", category: "Heritage", image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Molten Lava Cake", desc: "Rich dark chocolate cake with a warm gooey center, served with vanilla bean ice cream.", price: "Rs. 1,590", category: "Desserts", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "Bread Pudding", desc: "Classic warm artisanal bread pudding served with a rich salted caramel sauce.", price: "Rs. 845", category: "Desserts", image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?q=80&w=600&auto=format&fit=crop" },
  { id: 9, name: "Jade Special Tea", desc: "Our signature blend of premium tea leaves, brewed to absolute perfection.", price: "Rs. 295", category: "Café", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop" },
  { id: 10, name: "Mint Margarita", desc: "Refreshing blend of fresh mint, crushed ice, lime, and sparkling soda.", price: "Rs. 495", category: "Café", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop" },
  { id: 11, name: "Premium Hi-Tea", desc: "An elegant, multi-tiered assortment of savory bites and delicate sweet treats.", price: "Rs. 2,595", category: "Signature", image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=600&auto=format&fit=crop" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!isMounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <div className="relative bg-[#050505] selection:bg-gold/30 min-h-screen overflow-x-hidden text-whitesmoke font-light pt-32 pb-32">
      <div className="cinematic-noise" />
      <div className="ambient-glow w-[60vw] h-[60vh] top-0 left-1/2 -translate-x-1/2 opacity-20" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold font-medium tracking-[0.4em] text-[9px] uppercase">The Collection</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-normal mb-8 tracking-tight text-white">
            Culinary <span className="italic text-white/80">Mastery</span>
          </h1>
          <p className="text-white/50 text-[14px] md:text-base leading-relaxed font-light">
            Discover a world of flavor. From authentic Chinese woks to contemporary café delights, every dish is prepared with profound passion and precision.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 border-y border-white/5 py-8">
          
          {/* Categories */}
          <div className="flex overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 hide-scrollbar gap-3 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-sm whitespace-nowrap text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${
                  activeCategory === cat 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={16} />
            <input 
              type="text" 
              placeholder="Search our menu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 pl-12 pr-4 focus:outline-none focus:border-gold transition-colors text-white/90 text-sm font-light placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={item.id}
                className="group flex flex-col h-full cursor-pointer bg-luxury-glass rounded-sm border border-white/5 overflow-hidden premium-shadow hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    className="object-cover opacity-90 transition-transform duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/10 to-transparent opacity-90" />
                  
                  {/* Subtle Top Gradient for Text Legibility if needed */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="flex flex-col flex-grow p-6 relative z-10 bg-[#050505]">
                  <span className="text-gold font-medium tracking-[0.3em] text-[8px] uppercase mb-2">{item.category}</span>
                  <h3 className="text-xl font-heading text-white leading-tight mb-3 group-hover:text-gold transition-colors duration-500">{item.name}</h3>
                  <p className="text-white/50 text-[12px] leading-relaxed font-light mt-auto mb-6">{item.desc}</p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-white/90 font-medium text-[13px] tracking-widest">{item.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 text-white/50"
          >
            <Utensils className="mx-auto h-12 w-12 mb-6 opacity-20" strokeWidth={1} />
            <p className="text-[13px] tracking-wide font-light">No culinary selections found matching your search.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
}
