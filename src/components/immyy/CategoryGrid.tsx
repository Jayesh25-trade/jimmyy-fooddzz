import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/products";

import catChips from "@/assets/categories/cat-chips.jpg";
import catNuts from "@/assets/categories/cat-nuts.jpg";
import catCookies from "@/assets/categories/cat-cookies.jpg";
import catProtein from "@/assets/categories/cat-protein.jpg";
import catDried from "@/assets/categories/cat-dried.jpg";
import catNamkeen from "@/assets/categories/cat-namkeen.jpg";

const categoryImages: Record<string, string> = {
  chips: catChips,
  nuts: catNuts,
  cookies: catCookies,
  protein: catProtein,
  dried: catDried,
  namkeen: catNamkeen,
};

const CategoryGrid = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-heading text-[11px] tracking-[0.4em] uppercase mb-3">Our Range</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Explore Categories
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={`/category/${cat.id}`}
                className="group relative block rounded-lg overflow-hidden aspect-[4/3] cursor-pointer"
              >
                {/* Image */}
                <motion.img
                  src={categoryImages[cat.id]}
                  alt={cat.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground text-base md:text-lg group-hover:text-accent transition-colors duration-300">
                        {cat.name}
                      </h3>
                      <div className="h-0.5 w-0 group-hover:w-full bg-accent/60 transition-all duration-500 mt-1" />
                    </div>
                    <motion.div
                      className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-accent/40 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
