import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { categories } from "@/data/products";

const ImmyyFooter = () => {
  return (
    <footer className="border-t border-border pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-base text-foreground mb-4">Jimmy Fooddzz</h3>
            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
              Premium snacks with bold flavors. Order via WhatsApp for a personal, hassle-free experience.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-medium text-foreground text-xs tracking-wide uppercase mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link to={`/category/${cat.id}`} className="text-muted-foreground hover:text-foreground text-xs transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-foreground text-xs tracking-wide uppercase mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground text-xs transition-colors">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-xs transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-foreground text-xs tracking-wide uppercase mb-4">Order Now</h4>
            <a
              href="https://wa.me/918605601801?text=Hi,%20I%20want%20to%20order%20from%20Jimmy%20Fooddzz."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded text-xs font-heading font-medium transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Chat on WhatsApp
            </a>
            <p className="text-muted-foreground text-xs mt-4 leading-relaxed">
              hello@jimmyfooddzz.com<br />
              +91 99999 99999
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Jimmy Fooddzz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ImmyyFooter;
