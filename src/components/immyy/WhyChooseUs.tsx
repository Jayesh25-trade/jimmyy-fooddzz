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
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-heading text-xs tracking-[0.3em] uppercase mb-3">Why Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            The Jimmy Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass rounded-lg p-6 group hover:border-accent/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <f.icon className="h-5 w-5 text-accent mb-4" />
              <h3 className="font-heading font-medium text-foreground text-sm mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
