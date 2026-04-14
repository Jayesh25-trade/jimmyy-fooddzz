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
    `Hi! I'd like to order:\n\n${product.name} — ₹${product.price}\n\nPlease confirm!`
  )}`;

  return (
    <motion.div
      className="group glass rounded-lg overflow-hidden hover:border-accent/20 transition-all duration-300"
      whileHover={{ y: -3 }}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="px-2 py-0.5 rounded text-[10px] font-heading font-medium bg-background/80 backdrop-blur-sm text-foreground border border-border/50"
              >
                {badge}
              </span>
            ))}
          </div>
          {product.originalPrice && (
            <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-heading font-medium bg-accent/90 text-accent-foreground">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>
      </Link>

      <div className="p-4 space-y-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-heading font-medium text-foreground text-sm group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-xs line-clamp-2 mt-1 leading-relaxed">{product.description}</p>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-base font-heading font-semibold text-foreground">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
            )}
          </div>
          <span className="text-[10px] text-muted-foreground">{product.weight}</span>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => addToCart(product)}
            size="sm"
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-medium text-xs"
          >
            <ShoppingCart className="mr-1.5 h-3.5 w-3.5" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 border-border text-muted-foreground hover:text-accent hover:border-accent/50"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
