import { motion } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/products/masala-chips.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20snacks%20from%20Jimmy%20Fooddzz!";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20 blur-sm scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-accent font-heading font-medium text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Premium Snacks, Delivered
          </motion.p>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
            Jimmy Fooddzz
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 font-body leading-relaxed">
            Curated premium snacks with bold flavors and wholesome ingredients. Order directly via WhatsApp — simple, fast, personal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-medium text-sm px-8 py-6 tracking-wide"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Order on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground font-heading font-medium text-sm px-8 py-6 tracking-wide hover:bg-muted transition-all"
              asChild
            >
              <a href="#products">Browse Collection</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
