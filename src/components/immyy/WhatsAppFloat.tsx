import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const link = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20from%20Jimmy%20Fooddzz!";

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-accent text-accent-foreground p-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="h-5 w-5 relative z-10" />
    </motion.a>
  );
};

export default WhatsAppFloat;
