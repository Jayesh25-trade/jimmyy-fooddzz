import { motion } from "framer-motion";
import { Truck, ShieldCheck, Leaf, Zap, Heart, Award } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "No artificial colors, no preservatives. Just real, honest ingredients." },
  { icon: Truck, title: "Fast Delivery", desc: "Order via WhatsApp, delivered to your doorstep the same day." },
  { icon: ShieldCheck, title: "Quality Assured", desc: "FSSAI certified with rigorous quality checks at every step." },
  { icon: Zap, title: "Bold Flavors", desc: "Unique, exciting flavors crafted by expert food artisans." },
  { icon: Heart, title: "Made with Care", desc: "Small-batch crafted with passion and meticulous attention." },
  { icon: Award, title: "Award Winning", desc: "Recognized as one of the top artisan snack brands of 2024." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-heading text-[11px] tracking-[0.4em] uppercase mb-3">Why Us</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            The Jimmy Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="group glass rounded-lg p-7 hover:border-accent/30 transition-all duration-500 cursor-default relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/0 group-hover:bg-accent/5 blur-3xl transition-all duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_hsl(35_25%_50%/0.1)] transition-all duration-500">
                  <f.icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm mb-2 group-hover:text-accent transition-colors duration-300">{f.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
