import { useParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ImmyyHeader from "@/components/immyy/ImmyyHeader";
import ImmyyFooter from "@/components/immyy/ImmyyFooter";
import CartSidebar from "@/components/immyy/CartSidebar";
import WhatsAppFloat from "@/components/immyy/WhatsAppFloat";
import ProductCard from "@/components/immyy/ProductCard";
import { products, categories, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";

const ImmyyCategory = () => {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState<string>("default");
  const [priceRange, setPriceRange] = useState<string>("all");

  const currentCategory = categories.find((c) => c.id === category);
  const isAll = category === "all";

  const filteredProducts = useMemo(() => {
    let list = isAll ? products : getProductsByCategory(category || "");

    if (priceRange === "under100") list = list.filter((p) => p.price < 100);
    else if (priceRange === "100-200") list = list.filter((p) => p.price >= 100 && p.price <= 200);
    else if (priceRange === "200-400") list = list.filter((p) => p.price >= 200 && p.price <= 400);
    else if (priceRange === "above400") list = list.filter((p) => p.price > 400);

    if (sortBy === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") list = [...list].sort((a, b) => b.price - a.price);
    else if (sortBy === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [category, sortBy, priceRange, isAll]);

  return (
    <div className="min-h-screen bg-background">
      <ImmyyHeader />
      <CartSidebar />
      <WhatsAppFloat />

      <main className="max-w-7xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-2">
            {isAll ? "All Snacks" : currentCategory?.emoji + " " + (currentCategory?.name || "Products")}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} products found
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex gap-2 flex-wrap">
            {["all", ...categories.map((c) => c.id)].map((cat) => (
              <Button
                key={cat}
                variant={category === cat || (cat === "all" && isAll) ? "default" : "outline"}
                size="sm"
                className={`rounded-full font-heading ${
                  category === cat || (cat === "all" && isAll) ? "gradient-primary text-primary-foreground" : ""
                }`}
                asChild
              >
                <a href={`/category/${cat}`}>
                  {cat === "all" ? "All" : categories.find((c) => c.id === cat)?.name}
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-muted text-foreground rounded-full px-4 py-2 text-sm font-body border border-border"
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="bg-muted text-foreground rounded-full px-4 py-2 text-sm font-body border border-border"
          >
            <option value="all">All Prices</option>
            <option value="under100">Under ₹100</option>
            <option value="100-200">₹100 - ₹200</option>
            <option value="200-400">₹200 - ₹400</option>
            <option value="above400">Above ₹400</option>
          </select>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <span className="text-6xl block mb-4">🤷</span>
            <p className="text-muted-foreground text-lg">No products found. Try a different filter!</p>
          </div>
        )}
      </main>

      <ImmyyFooter />
    </div>
  );
};

export default ImmyyCategory;
