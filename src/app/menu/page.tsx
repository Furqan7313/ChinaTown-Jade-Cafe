"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, Leaf, Flame, Utensils } from "lucide-react";

const categories = ["All", "Chinese", "Pakistani", "Desserts", "Café", "Hi-Tea"];

const menuItems = [
  { id: 1, name: "Szechuan Soup", desc: "A spicy and tangy Chinese classic with tofu, mushrooms, and bamboo shoots.", price: "Rs. 900", category: "Chinese", spicy: true, veg: false, image: "/images/menu/szechuan_soup.png" },
  { id: 2, name: "Dynamite Shrimps", desc: "Crispy battered shrimps tossed in our signature creamy spicy sauce.", price: "Rs. 2,450", category: "Chinese", spicy: true, veg: false, image: "/images/menu/dynamite_shrimps.png" },
  { id: 3, name: "Kung Pao Chicken", desc: "Stir-fried chicken with peanuts, vegetables, and chili peppers.", price: "Rs. 1,460", category: "Chinese", spicy: true, veg: false, image: "/images/menu/kung_pao.png" },
  { id: 4, name: "Beef Chilli Dry", desc: "Thinly sliced crispy beef stir-fried with green chilies and ginger.", price: "Rs. 1,550", category: "Chinese", spicy: true, veg: false, image: "/images/menu/beef_chilli.png" },
  { id: 5, name: "Mutton Shinwari Karahi", desc: "Traditional Peshawari style mutton cooked with tomatoes and green chilies.", price: "Rs. 3,995", category: "Pakistani", spicy: false, veg: false, image: "/images/menu/mutton_shinwari.png" },
  { id: 6, name: "Mutton Kabli Pulao", desc: "Authentic Afghan style rice with tender mutton, raisins, and carrots.", price: "Rs. 1,595", category: "Pakistani", spicy: false, veg: false, image: "/images/menu/kabli_pulao.png" },
  { id: 7, name: "Molten Lava Cake", desc: "Rich chocolate cake with a warm gooey center, served with ice cream.", price: "Rs. 1,590", category: "Desserts", spicy: false, veg: true, image: "/images/menu/molten_lava.png" },
  { id: 8, name: "Bread Pudding", desc: "Classic warm bread pudding served with a rich caramel sauce.", price: "Rs. 845", category: "Desserts", spicy: false, veg: true, image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?q=80&w=400&auto=format&fit=crop" },
  { id: 9, name: "Jade Special Tea", desc: "Our signature blend of premium tea leaves, brewed to perfection.", price: "Rs. 295", category: "Café", spicy: false, veg: true, image: "/images/menu/special_tea.png" },
  { id: 10, name: "Mint Margarita", desc: "Refreshing blend of fresh mint, lime, and soda.", price: "Rs. 495", category: "Café", spicy: false, veg: true, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop" },
  { id: 11, name: "Hi-Tea Platter", desc: "An exquisite selection of savory and sweet treats, perfect for sharing.", price: "Rs. 2,595", category: "Hi-Tea", spicy: false, veg: false, image: "/images/menu/hi_tea_platter.png" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Our <span className="text-crimson dark:text-gold">Menu</span></h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover a world of flavor. From authentic Chinese woks to contemporary café delights, every dish is prepared with passion.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Categories */}
          <div className="flex overflow-x-auto w-full md:w-auto pb-4 md:pb-0 hide-scrollbar gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-crimson text-white dark:bg-gold dark:text-luxury-black shadow-lg shadow-crimson/20 dark:shadow-gold/20" 
                    : "bg-white dark:bg-charcoal text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search dishes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-800 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-crimson dark:focus:ring-gold transition-all"
            />
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-white dark:bg-charcoal rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-gray-100 dark:border-gray-800"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.spicy && (
                      <span className="bg-crimson text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Flame size={12} /> Spicy
                      </span>
                    )}
                    {item.veg && (
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Leaf size={12} /> Veg
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl font-bold pr-4 group-hover:text-crimson dark:group-hover:text-gold transition-colors">{item.name}</h3>
                    <span className="text-crimson dark:text-gold font-bold">{item.price}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <Utensils className="mx-auto h-12 w-12 mb-4 opacity-20" />
            <p className="text-lg">No dishes found matching your search.</p>
          </div>
        )}

      </div>
    </div>
  );
}
