import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  address: string;
  setAddress: (address: string) => void;
  paymentMethod: "cod" | "upi";
  setPaymentMethod: (method: "cod" | "upi") => void;
  getWhatsAppMessage: () => string;
  getWhatsAppLink: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const WHATSAPP_NUMBER = "918605601801";
const UPI_ID = "jayeshneo07@oksbi";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "upi">("cod");

  const addToCart = (product: Product, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity } : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const getWhatsAppMessage = () => {
    if (items.length === 0) return "";
    let msg = "*Order from Jimmy Fooddzz*\n\n";
    items.forEach((item) => {
      msg += `${item.product.name} x${item.quantity} -- Rs.${item.product.price * item.quantity}\n`;
    });
    msg += `\n*Total: Rs.${totalPrice}*\n`;
    msg += `\n*Payment: ${paymentMethod === "upi" ? `UPI (${UPI_ID})` : "Cash on Delivery"}*\n`;
    if (address.trim()) {
      msg += `\n*Delivery Address:*\n${address.trim()}\n`;
    }
    msg += `\nPlease confirm my order.`;
    return msg;
  };

  const getWhatsAppLink = () => {
    const msg = encodeURIComponent(getWhatsAppMessage());
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  return (
    <CartContext.Provider
      value={{
        items, addToCart, removeFromCart, updateQuantity, clearCart,
        totalItems, totalPrice, isCartOpen, setIsCartOpen,
        address, setAddress, paymentMethod, setPaymentMethod,
        getWhatsAppMessage, getWhatsAppLink,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
