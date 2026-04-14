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
          <span className="text-6xl block mb-4">😢</span>
          <h1 className="font-heading text-2xl font-bold mb-2 text-foreground">Product Not Found</h1>
          <Link to="/category/all" className="text-primary hover:underline">Browse all snacks</Link>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const whatsappLink = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi! I'd like to order:\n\n▪ ${product.name} x${quantity} — ₹${product.price * quantity}\n\nPlease confirm!`
  )}`;

  return (
    <div className="min-h-screen bg-background">
      <ImmyyHeader />
      <CartSidebar />
      <WhatsAppFloat />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to={`/category/${product.category}`} className="inline-flex items-center text-muted-foreground hover:text-foreground text-sm transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to {category?.name || "Products"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-full text-xs font-heading font-semibold bg-primary/90 text-primary-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-wider mb-1">
                {category?.emoji} {category?.name}
              </p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{product.name}</h1>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-heading font-bold text-foreground">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                  <span className="text-sm font-heading font-semibold text-green-400">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-muted-foreground text-base leading-relaxed">{product.description}</p>

            <div className="glass rounded-xl p-4 space-y-3">
              <p className="text-sm text-muted-foreground"><span className="text-foreground font-semibold">Weight:</span> {product.weight}</p>
              {product.ingredients && (
                <p className="text-sm text-muted-foreground"><span className="text-foreground font-semibold">Ingredients:</span> {product.ingredients}</p>
              )}
              {product.nutrition && (
                <div className="grid grid-cols-4 gap-3 pt-2 border-t border-border">
                  {Object.entries(product.nutrition).map(([key, val]) => (
                    <div key={key} className="text-center">
                      <p className="text-foreground font-heading font-bold text-sm">{val}</p>
                      <p className="text-muted-foreground text-xs capitalize">{key}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-foreground font-semibold">Quantity</span>
                <div className="flex items-center border border-border rounded-full">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 font-heading font-semibold">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  className="flex-1 gradient-primary text-primary-foreground font-heading font-semibold text-lg py-6 rounded-full hover:scale-[1.02] transition-transform"
                  onClick={() => addToCart(product, quantity)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart — ₹{product.price * quantity}
                </Button>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-full border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500 font-heading font-semibold py-6 rounded-full"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order Directly on WhatsApp
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
