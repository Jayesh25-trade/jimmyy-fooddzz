import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20snacks%20from%20Jimmy%20Fooddzz!";

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          className="glass rounded-lg p-10 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent font-heading text-xs tracking-[0.3em] uppercase mb-4">Ready to Order?</p>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4 text-foreground">
            Skip the Checkout Queue
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Just tap, message us on WhatsApp, and get your favorite snacks delivered. It's that simple.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-medium text-sm px-10 py-6 tracking-wide"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Order on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
