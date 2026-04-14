import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20snacks%20from%20Immyy%20Fooddzz!";

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="glass rounded-3xl p-10 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          <div className="relative z-10">
            <motion.span
              className="text-6xl block mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🍿
            </motion.span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Ready to Snack?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Skip the complicated checkout. Just tap, order on WhatsApp, and get your favorite snacks delivered!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white font-heading font-semibold text-lg px-10 py-6 rounded-full hover:scale-105 transition-transform duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Order on WhatsApp Now
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
