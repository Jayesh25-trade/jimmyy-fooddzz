import { motion } from "framer-motion";
import { Truck, ShieldCheck, Leaf, Zap, Heart, Award } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "No artificial colors, no preservatives. Just real ingredients.", color: "text-green-400" },
  { icon: Truck, title: "Fast Delivery", desc: "Order via WhatsApp, delivered to your doorstep same day.", color: "text-blue-400" },
  { icon: ShieldCheck, title: "Quality Assured", desc: "FSSAI certified with rigorous quality checks.", color: "text-purple-400" },
  { icon: Zap, title: "Bold Flavors", desc: "Unique, exciting flavors you won't find anywhere else.", color: "text-yellow-400" },
  { icon: Heart, title: "Made with Love", desc: "Small-batch crafted with passion and dedication.", color: "text-red-400" },
  { icon: Award, title: "Award Winning", desc: "Recognized as one of the top snack brands of 2024.", color: "text-orange-400" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient-primary">Choose Us?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're not just a snack brand — we're a flavor revolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="glass rounded-2xl p-6 group hover:border-primary/30 transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className={`${f.color} mb-4`}>
                <f.icon className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
