import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const whatsappLink = `https://wa.me/919999999999?text=${encodeURIComponent(
    `Hi! I'd like to order:\n\n▪ ${product.name} — ₹${product.price}\n\nPlease confirm!`
  )}`;

  return (
    <motion.div
      className="group glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-primary/90 text-primary-foreground"
              >
                {badge}
              </span>
            ))}
          </div>
          {product.originalPrice && (
            <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-heading font-semibold bg-accent text-accent-foreground">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-heading font-bold text-foreground">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">₹{product.originalPrice}</span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">{product.weight}</span>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => addToCart(product)}
            className="flex-1 gradient-primary text-primary-foreground font-heading font-semibold rounded-full hover:scale-[1.02] transition-transform"
          >
            <ShoppingCart className="mr-1.5 h-4 w-4" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-500"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
