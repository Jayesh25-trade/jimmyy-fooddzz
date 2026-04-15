import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/918605601801?text=Hi,%20I%20want%20to%20order%20from%20Jimmy%20Fooddzz.";
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY, scale }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <motion.div className="relative z-10 text-center px-4 max-w-3xl mx-auto" style={{ y: textY, opacity }}>
        <motion.p
          className="text-accent font-heading font-medium text-[11px] md:text-xs tracking-[0.4em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Premium Snacks, Delivered
        </motion.p>

        <motion.h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 text-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Jimmy
          <span className="block text-accent/80">Fooddzz</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-12 font-body leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Curated premium snacks with bold flavors and wholesome ingredients.
          Order directly via WhatsApp — simple, fast, personal.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-medium text-sm px-10 py-6 tracking-wide group transition-all duration-300 hover:shadow-[0_0_30px_hsl(35_25%_50%/0.3)]"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Order on WhatsApp
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-border/60 text-foreground font-heading font-medium text-sm px-10 py-6 tracking-wide hover:bg-accent/5 hover:border-accent/30 transition-all duration-300"
            asChild
          >
            <a href="#products">Browse Collection</a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-muted-foreground/60 font-heading tracking-widest uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
