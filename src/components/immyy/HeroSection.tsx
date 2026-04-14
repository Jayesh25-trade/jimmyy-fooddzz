import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingSnacks = [
  { emoji: "🍟", size: "text-6xl md:text-8xl", x: -120, y: -80, delay: 0 },
  { emoji: "🍪", size: "text-5xl md:text-7xl", x: 140, y: -60, delay: 0.2 },
  { emoji: "🥜", size: "text-4xl md:text-6xl", x: -180, y: 60, delay: 0.4 },
  { emoji: "🌶️", size: "text-5xl md:text-7xl", x: 160, y: 80, delay: 0.6 },
  { emoji: "💪", size: "text-4xl md:text-5xl", x: -60, y: 120, delay: 0.3 },
  { emoji: "🍎", size: "text-4xl md:text-6xl", x: 80, y: -120, delay: 0.5 },
];

const HeroSection = () => {
  const whatsappLink = "https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20snacks%20from%20Immyy%20Fooddzz!";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Floating snack emojis */}
      {floatingSnacks.map((snack, i) => (
        <motion.div
          key={i}
          className={`absolute ${snack.size} select-none pointer-events-none`}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0.4],
            scale: [0, 1.2, 1],
            x: snack.x,
            y: snack.y,
            rotate: [0, 15, -10, 5],
          }}
          transition={{
            duration: 1.5,
            delay: snack.delay,
            ease: "easeOut",
          }}
          style={{ top: "50%", left: "50%" }}
        >
          <motion.span
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="block"
          >
            {snack.emoji}
          </motion.span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-secondary font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Snack Smarter. Snack Bolder.
          </motion.p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="text-foreground">Welcome to</span>
            <br />
            <span className="text-gradient-primary">Immyy Fooddzz</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 font-body">
            Premium snacks, bold flavors, and healthy bites — delivered to your door via WhatsApp. No app needed!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="gradient-primary text-primary-foreground font-heading font-semibold text-lg px-8 py-6 rounded-full glow-purple hover:scale-105 transition-transform duration-300"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Order on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground font-heading font-semibold text-lg px-8 py-6 rounded-full hover:bg-muted transition-all duration-300"
              asChild
            >
              <a href="#products">Explore Snacks</a>
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
