import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, MessageCircle, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImmyyHeader from "@/components/immyy/ImmyyHeader";
import ImmyyFooter from "@/components/immyy/ImmyyFooter";
import CartSidebar from "@/components/immyy/CartSidebar";
import WhatsAppFloat from "@/components/immyy/WhatsAppFloat";
import { getProductById, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";

const ImmyyProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || "");
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-xl font-bold mb-2 text-foreground">Product Not Found</h1>
          <Link to="/category/all" className="text-accent hover:underline text-sm">Browse all products</Link>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const whatsappLink = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi! I'd like to order:\n\n${product.name} x${quantity} — ₹${product.price * quantity}\n\nPlease confirm!`
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <ImmyyHeader />
      <CartSidebar />
      <WhatsAppFloat />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to={`/category/${product.category}`} className="inline-flex items-center text-muted-foreground hover:text-foreground text-xs transition-colors">
            <ChevronLeft className="h-3.5 w-3.5 mr-1" />
            Back to {category?.name || "Products"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass rounded-lg overflow-hidden aspect-square">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {product.badges.map((badge) => (
                <span key={badge} className="px-2 py-0.5 rounded text-[10px] font-heading font-medium bg-muted text-muted-foreground border border-border/50">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-accent font-heading font-medium text-xs uppercase tracking-wider mb-1">
                {category?.name}
              </p>
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{product.name}</h1>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-heading font-bold text-foreground">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
                  <span className="text-xs font-heading font-medium text-accent">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>

            <div className="glass rounded-lg p-4 space-y-3">
              <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Weight:</span> {product.weight}</p>
              {product.ingredients && (
                <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Ingredients:</span> {product.ingredients}</p>
              )}
              {product.nutrition && (
                <div className="grid grid-cols-4 gap-3 pt-2 border-t border-border">
                  {Object.entries(product.nutrition).map(([key, val]) => (
                    <div key={key} className="text-center">
                      <p className="text-foreground font-heading font-semibold text-xs">{val}</p>
                      <p className="text-muted-foreground text-[10px] capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs text-foreground font-medium">Quantity</span>
                <div className="flex items-center border border-border rounded">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="px-3 font-heading font-medium text-sm">{quantity}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-medium text-sm py-5"
                onClick={() => addToCart(product, quantity)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart — ₹{product.price * quantity}
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-border text-muted-foreground hover:text-accent hover:border-accent/50 font-heading font-medium text-sm py-5"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Order via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <ImmyyFooter />
    </div>
  );
};

export default ImmyyProductDetail;
