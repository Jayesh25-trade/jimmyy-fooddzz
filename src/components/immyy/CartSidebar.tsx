import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag, MapPin, CreditCard, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const UPI_ID = "jayeshneo07@oksbi";

const CartSidebar = () => {
  const {
    items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart,
    totalPrice, totalItems, getWhatsAppLink,
    address, setAddress, paymentMethod, setPaymentMethod,
  } = useCart();

  const upiLink = `upi://pay?pa=${UPI_ID}&pn=Jimmy%20Fooddzz&am=${totalPrice}&cu=INR&tn=Order%20from%20Jimmy%20Fooddzz`;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
          />

          <motion.div
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-heading font-medium text-sm flex items-center gap-2 text-foreground">
                <ShoppingBag className="h-4 w-4" />
                Cart ({totalItems})
              </h2>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsCartOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">Your cart is empty</p>
                  <p className="text-muted-foreground text-xs mt-1">Add some premium snacks</p>
                </div>
              ) : (
                <>
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        className="glass rounded-lg p-3 flex gap-3"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-heading font-medium text-foreground text-xs truncate">{item.product.name}</h4>
                          <p className="text-muted-foreground text-[10px]">{item.product.weight}</p>
                          <p className="text-foreground font-heading font-semibold text-sm mt-1">Rs.{item.product.price * item.quantity}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Button variant="outline" size="icon" className="h-6 w-6 rounded" onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="font-heading font-medium text-xs w-5 text-center">{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-6 w-6 rounded" onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
                              <Plus className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto text-destructive hover:text-destructive" onClick={() => removeFromCart(item.product.id)}>
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Delivery Address */}
                  <div className="glass rounded-lg p-3 space-y-2 mt-4">
                    <label className="flex items-center gap-2 text-xs font-heading font-medium text-foreground">
                      <MapPin className="h-3.5 w-3.5 text-accent" />
                      Delivery Address
                    </label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Enter your full delivery address..."
                      className="w-full bg-muted/50 border border-border rounded px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/50 resize-none"
                      rows={3}
                    />
                  </div>

                  {/* Payment Method */}
                  <div className="glass rounded-lg p-3 space-y-3 mt-2">
                    <p className="text-xs font-heading font-medium text-foreground flex items-center gap-2">
                      <CreditCard className="h-3.5 w-3.5 text-accent" />
                      Payment Method
                    </p>
                    <div className="space-y-2">
                      <button
                        onClick={() => setPaymentMethod("upi")}
                        className={`w-full flex items-center gap-3 p-3 rounded border text-left transition-all ${
                          paymentMethod === "upi"
                            ? "border-accent/50 bg-accent/5"
                            : "border-border hover:border-border/80"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === "upi" ? "border-accent" : "border-muted-foreground"
                        }`}>
                          {paymentMethod === "upi" && <div className="w-2 h-2 rounded-full bg-accent" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-heading font-medium text-foreground">Pay via UPI</p>
                          <p className="text-[10px] text-muted-foreground">{UPI_ID}</p>
                        </div>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                      </button>

                      <button
                        onClick={() => setPaymentMethod("cod")}
                        className={`w-full flex items-center gap-3 p-3 rounded border text-left transition-all ${
                          paymentMethod === "cod"
                            ? "border-accent/50 bg-accent/5"
                            : "border-border hover:border-border/80"
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          paymentMethod === "cod" ? "border-accent" : "border-muted-foreground"
                        }`}>
                          {paymentMethod === "cod" && <div className="w-2 h-2 rounded-full bg-accent" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-heading font-medium text-foreground">Cash on Delivery</p>
                          <p className="text-[10px] text-muted-foreground">Pay when you receive</p>
                        </div>
                        <Banknote className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-border p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Total</span>
                  <span className="font-heading font-bold text-xl text-foreground">Rs.{totalPrice}</span>
                </div>

                {paymentMethod === "upi" && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-accent/30 text-accent hover:bg-accent/10 font-heading font-medium text-sm py-5"
                  >
                    <a href={upiLink}>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Pay Rs.{totalPrice} via UPI
                    </a>
                  </Button>
                )}

                <Button
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-medium text-sm py-5"
                >
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {paymentMethod === "upi" ? "Confirm Order on WhatsApp" : "Checkout via WhatsApp"}
                  </a>
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
