import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  const whatsappLink = "https://wa.me/918605601801?text=Hi,%20I%20want%20to%20order%20from%20Jimmy%20Fooddzz.";
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative py-28 px-4 overflow-hidden">
      {/* Parallax BG */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={ctaBg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
        <div className="absolute inset-0 bg-background/85" />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent font-heading text-[11px] tracking-[0.4em] uppercase mb-4">Ready to Order?</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5 text-foreground leading-tight">
            Skip the Checkout Queue
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed">
            Just tap, message us on WhatsApp, and get your favorite snacks delivered. It is that simple.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-medium text-sm px-12 py-6 tracking-wide group transition-all duration-300 hover:shadow-[0_0_40px_hsl(35_25%_50%/0.3)]"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Order on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
