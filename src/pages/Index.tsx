import ImmyyHeader from "@/components/immyy/ImmyyHeader";
import ImmyyFooter from "@/components/immyy/ImmyyFooter";
import CartSidebar from "@/components/immyy/CartSidebar";
import WhatsAppFloat from "@/components/immyy/WhatsAppFloat";
import HeroSection from "@/components/immyy/HeroSection";
import CategoryGrid from "@/components/immyy/CategoryGrid";
import FeaturedProducts from "@/components/immyy/FeaturedProducts";
import StatsSection from "@/components/immyy/StatsSection";
import WhyChooseUs from "@/components/immyy/WhyChooseUs";
import CTASection from "@/components/immyy/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ImmyyHeader />
      <CartSidebar />
      <WhatsAppFloat />

      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <StatsSection />
        <WhyChooseUs />
        <CTASection />
      </main>

      <ImmyyFooter />
    </div>
  );
};

export default Index;
