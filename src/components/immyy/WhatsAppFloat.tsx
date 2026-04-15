import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const link = "https://wa.me/918605601801?text=Hi,%20I%20want%20to%20order%20from%20Jimmy%20Fooddzz.";

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-3.5 rounded-full shadow-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(35_25%_50%/0.4)] group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 relative z-10 group-hover:scale-110 transition-transform" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping pointer-events-none" />
    </motion.a>
  );
};

export default WhatsAppFloat;
