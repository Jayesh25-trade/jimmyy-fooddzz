import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import { categories } from "@/data/products";

const ImmyyFooter = () => {
  return (
    <footer className="border-t border-border pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-2xl text-gradient-primary mb-4">Immyy Fooddzz</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Premium snacks with bold flavors. Order easily via WhatsApp — no app needed!
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    {cat.emoji} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Order Now</h4>
            <a
              href="https://wa.me/919999999999?text=Hi!%20I%20want%20to%20order%20from%20Immyy%20Fooddzz!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-heading font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              📧 hello@immyyfooddzz.com<br />
              📞 +91 99999 99999
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Immyy Fooddzz. All rights reserved. Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ImmyyFooter;
