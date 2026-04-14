import masalaChips from "@/assets/products/masala-chips.jpg";
import tomatoChips from "@/assets/products/tomato-chips.jpg";
import creamOnionChips from "@/assets/products/cream-onion-chips.jpg";
import saltPepperChips from "@/assets/products/salt-pepper-chips.jpg";
import bbqChips from "@/assets/products/bbq-chips.jpg";
import wasabiChips from "@/assets/products/wasabi-chips.jpg";
import cheeseCrackers from "@/assets/products/cheese-crackers.jpg";
import mixedNuts from "@/assets/products/mixed-nuts.jpg";
import honeyCashews from "@/assets/products/honey-cashews.jpg";
import roastedAlmonds from "@/assets/products/roasted-almonds.jpg";
import pistachios from "@/assets/products/pistachios.jpg";
import trailMix from "@/assets/products/trail-mix.jpg";
import macadamia from "@/assets/products/macadamia.jpg";
import chocoCookies from "@/assets/products/choco-cookies.jpg";
import oatmealCookies from "@/assets/products/oatmeal-cookies.jpg";
import brownieCookies from "@/assets/products/brownie-cookies.jpg";
import butterCookies from "@/assets/products/butter-cookies.jpg";
import coconutCookies from "@/assets/products/coconut-cookies.jpg";
import proteinBar from "@/assets/products/protein-bar.jpg";
import proteinBites from "@/assets/products/protein-bites.jpg";
import granolaBar from "@/assets/products/granola-bar.jpg";
import driedMango from "@/assets/products/dried-mango.jpg";
import driedCranberries from "@/assets/products/dried-cranberries.jpg";
import driedFigs from "@/assets/products/dried-figs.jpg";
import driedApricots from "@/assets/products/dried-apricots.jpg";
import bhujia from "@/assets/products/bhujia.jpg";
import spicyPeanuts from "@/assets/products/spicy-peanuts.jpg";
import sevNamkeen from "@/assets/products/sev-namkeen.jpg";
import chivda from "@/assets/products/chivda.jpg";
import makhana from "@/assets/products/makhana.jpg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badges: string[];
  weight: string;
  ingredients?: string;
  nutrition?: { calories: string; protein: string; fat: string; carbs: string };
  featured?: boolean;
  bestseller?: boolean;
}

export const categories = [
  { id: "chips", name: "Chips & Crisps", icon: "chips" },
  { id: "nuts", name: "Nuts & Trail Mix", icon: "nuts" },
  { id: "cookies", name: "Cookies & Biscuits", icon: "cookies" },
  { id: "protein", name: "Protein & Energy", icon: "protein" },
  { id: "dried", name: "Dried Fruits", icon: "dried" },
  { id: "namkeen", name: "Namkeen & Savoury", icon: "namkeen" },
];

export const products: Product[] = [
  // CHIPS (10)
  { id: "1", name: "Spicy Masala Chips", description: "Bold and fiery masala-flavored potato chips crafted with a proprietary blend of Indian spices. Crispy, crunchy, and irresistibly addictive.", price: 149, originalPrice: 199, image: masalaChips, category: "chips", badges: ["Bestseller"], weight: "150g", ingredients: "Potatoes, Sunflower Oil, Masala Seasoning", nutrition: { calories: "520 kcal", protein: "6g", fat: "32g", carbs: "54g" }, featured: true, bestseller: true },
  { id: "2", name: "Tangy Tomato Crunch", description: "A tangy twist on classic chips with sun-dried tomato flavor. Light, crispy, and packed with authentic taste.", price: 129, image: tomatoChips, category: "chips", badges: ["New"], weight: "120g", nutrition: { calories: "480 kcal", protein: "5g", fat: "28g", carbs: "56g" }, featured: true },
  { id: "10", name: "Cream & Onion Chips", description: "Smooth cream and onion flavored chips with a satisfying crunch. A timeless classic that never disappoints.", price: 119, image: creamOnionChips, category: "chips", badges: ["Classic"], weight: "130g", nutrition: { calories: "500 kcal", protein: "5g", fat: "30g", carbs: "55g" } },
  { id: "13", name: "Salt & Pepper Kettle", description: "Hand-cooked kettle chips with cracked black pepper and Himalayan pink salt. Artisan quality in every bite.", price: 169, image: saltPepperChips, category: "chips", badges: ["Artisan"], weight: "140g", nutrition: { calories: "490 kcal", protein: "5g", fat: "29g", carbs: "53g" } },
  { id: "14", name: "Smoky BBQ Chips", description: "Slow-smoked barbecue flavored chips with a hint of sweetness. Perfect for those who crave that chargrilled taste.", price: 159, originalPrice: 199, image: bbqChips, category: "chips", badges: ["Smoky"], weight: "150g", nutrition: { calories: "510 kcal", protein: "5g", fat: "31g", carbs: "55g" }, bestseller: true },
  { id: "15", name: "Wasabi Crunch", description: "Japanese-inspired wasabi chips with a sharp, clean heat. Not for the faint-hearted.", price: 179, image: wasabiChips, category: "chips", badges: ["Premium"], weight: "120g", nutrition: { calories: "470 kcal", protein: "6g", fat: "27g", carbs: "52g" } },
  { id: "16", name: "Cheese Crackers", description: "Crispy star-shaped crackers loaded with aged cheddar flavor. A snack the whole family will love.", price: 139, image: cheeseCrackers, category: "chips", badges: ["Family Pack"], weight: "180g", nutrition: { calories: "530 kcal", protein: "8g", fat: "28g", carbs: "58g" } },
  { id: "17", name: "Peri Peri Chips", description: "Fiery peri peri seasoned chips inspired by African-Portuguese cuisine. Bold, tangy, and highly addictive.", price: 149, image: masalaChips, category: "chips", badges: ["Spicy"], weight: "140g", nutrition: { calories: "500 kcal", protein: "5g", fat: "30g", carbs: "54g" } },
  { id: "18", name: "Herb & Garlic Chips", description: "Mediterranean herbs and roasted garlic on crispy golden chips. Sophisticated snacking for refined palates.", price: 159, image: saltPepperChips, category: "chips", badges: ["Gourmet"], weight: "130g", nutrition: { calories: "480 kcal", protein: "5g", fat: "28g", carbs: "53g" } },
  { id: "19", name: "Sweet Chilli Chips", description: "Thai sweet chilli glazed chips with a perfect balance of sweet and heat. An exotic snacking experience.", price: 149, image: tomatoChips, category: "chips", badges: ["Popular"], weight: "140g", nutrition: { calories: "495 kcal", protein: "5g", fat: "29g", carbs: "55g" } },

  // NUTS (10)
  { id: "3", name: "Premium Mixed Nuts", description: "A rich blend of almonds, cashews, walnuts, and pistachios. Roasted to perfection with a touch of Himalayan salt.", price: 449, originalPrice: 549, image: mixedNuts, category: "nuts", badges: ["Premium"], weight: "250g", nutrition: { calories: "620 kcal", protein: "18g", fat: "52g", carbs: "22g" }, featured: true, bestseller: true },
  { id: "8", name: "Honey Roasted Cashews", description: "Whole cashews roasted with natural honey glaze. Sweet, crunchy, and absolutely addictive.", price: 349, image: honeyCashews, category: "nuts", badges: ["Natural"], weight: "200g", nutrition: { calories: "580 kcal", protein: "15g", fat: "44g", carbs: "32g" }, featured: true },
  { id: "20", name: "Salted Roasted Almonds", description: "Premium California almonds dry-roasted with a light dusting of sea salt. The purest nutty indulgence.", price: 399, image: roastedAlmonds, category: "nuts", badges: ["Premium"], weight: "200g", nutrition: { calories: "590 kcal", protein: "21g", fat: "50g", carbs: "18g" }, bestseller: true },
  { id: "21", name: "Iranian Pistachios", description: "Hand-selected large pistachios from Iran, lightly salted. The king of all nuts.", price: 599, originalPrice: 749, image: pistachios, category: "nuts", badges: ["Imported"], weight: "200g", nutrition: { calories: "560 kcal", protein: "20g", fat: "45g", carbs: "28g" } },
  { id: "22", name: "Energy Trail Mix", description: "A power-packed blend of nuts, seeds, dried fruits, and dark chocolate chips. Fuel for your adventures.", price: 329, image: trailMix, category: "nuts", badges: ["Energy"], weight: "250g", nutrition: { calories: "540 kcal", protein: "16g", fat: "32g", carbs: "48g" } },
  { id: "23", name: "Macadamia Nuts", description: "Creamy Australian macadamia nuts, lightly roasted. One of nature's most luxurious treats.", price: 699, image: macadamia, category: "nuts", badges: ["Luxury"], weight: "150g", nutrition: { calories: "720 kcal", protein: "8g", fat: "76g", carbs: "14g" } },
  { id: "24", name: "Spiced Cashew Mix", description: "Whole cashews tossed with cumin, black pepper, and a hint of lime. Bold Indian-spiced perfection.", price: 379, image: honeyCashews, category: "nuts", badges: ["Spiced"], weight: "200g", nutrition: { calories: "570 kcal", protein: "16g", fat: "46g", carbs: "28g" } },
  { id: "25", name: "Walnut Halves", description: "Premium walnut halves rich in omega-3. Perfect for baking, salads, or straight from the pack.", price: 449, image: mixedNuts, category: "nuts", badges: ["Omega-3"], weight: "200g", nutrition: { calories: "650 kcal", protein: "15g", fat: "65g", carbs: "14g" } },
  { id: "26", name: "Smoked Almonds", description: "Almonds slow-smoked over applewood for a deep, rich flavor. A gourmet snacking experience.", price: 429, image: roastedAlmonds, category: "nuts", badges: ["Smoky"], weight: "180g", nutrition: { calories: "580 kcal", protein: "20g", fat: "50g", carbs: "20g" } },
  { id: "27", name: "Brazil Nut Selection", description: "Large, creamy Brazil nuts sourced from the Amazon. Rich in selenium and natural goodness.", price: 549, image: macadamia, category: "nuts", badges: ["Superfood"], weight: "180g", nutrition: { calories: "660 kcal", protein: "14g", fat: "67g", carbs: "12g" } },

  // COOKIES (10)
  { id: "4", name: "Choco Chip Cookies", description: "Soft-baked cookies loaded with Belgian chocolate chips. Melt-in-your-mouth goodness in every bite.", price: 199, image: chocoCookies, category: "cookies", badges: ["Bestseller"], weight: "200g", nutrition: { calories: "450 kcal", protein: "5g", fat: "22g", carbs: "60g" }, featured: true, bestseller: true },
  { id: "11", name: "Oatmeal Raisin Cookies", description: "Wholesome cookies made with rolled oats and juicy raisins. A healthier treat that delivers on taste.", price: 169, image: oatmealCookies, category: "cookies", badges: ["Wholesome"], weight: "180g", nutrition: { calories: "420 kcal", protein: "7g", fat: "18g", carbs: "58g" } },
  { id: "28", name: "Dark Chocolate Brownies", description: "Fudgy brownie cookies made with 70% dark cocoa. Rich, decadent, and utterly irresistible.", price: 229, image: brownieCookies, category: "cookies", badges: ["Premium"], weight: "200g", nutrition: { calories: "480 kcal", protein: "6g", fat: "24g", carbs: "62g" }, featured: true },
  { id: "29", name: "Classic Butter Cookies", description: "Traditional Danish-style butter cookies in assorted shapes. Made with real butter and vanilla.", price: 249, originalPrice: 299, image: butterCookies, category: "cookies", badges: ["Gift Pack"], weight: "250g", nutrition: { calories: "460 kcal", protein: "5g", fat: "24g", carbs: "56g" } },
  { id: "30", name: "Coconut Macaroons", description: "Soft, chewy coconut macaroons with a golden crust. Naturally gluten-free and delightful.", price: 189, image: coconutCookies, category: "cookies", badges: ["Gluten-Free"], weight: "160g", nutrition: { calories: "400 kcal", protein: "4g", fat: "20g", carbs: "52g" } },
  { id: "31", name: "Almond Biscotti", description: "Italian-style twice-baked almond biscotti. Perfect for dipping in coffee or tea.", price: 219, image: butterCookies, category: "cookies", badges: ["Artisan"], weight: "180g", nutrition: { calories: "430 kcal", protein: "8g", fat: "18g", carbs: "58g" } },
  { id: "32", name: "Peanut Butter Cookies", description: "Crunchy peanut butter cookies with a cross-hatch pattern. Nutty, sweet, and satisfying.", price: 179, image: oatmealCookies, category: "cookies", badges: ["Protein Rich"], weight: "200g", nutrition: { calories: "470 kcal", protein: "10g", fat: "24g", carbs: "52g" } },
  { id: "33", name: "Red Velvet Cookies", description: "Stunning red velvet cookies with white chocolate chips. A bakery-style indulgence.", price: 239, image: brownieCookies, category: "cookies", badges: ["New"], weight: "180g", nutrition: { calories: "440 kcal", protein: "5g", fat: "22g", carbs: "58g" } },
  { id: "34", name: "Snickerdoodle Pack", description: "Cinnamon-sugar coated cookies with a soft, chewy center. An American classic, perfected.", price: 189, image: coconutCookies, category: "cookies", badges: ["Classic"], weight: "200g", nutrition: { calories: "410 kcal", protein: "5g", fat: "18g", carbs: "60g" } },
  { id: "35", name: "Matcha Green Tea Cookies", description: "Japanese matcha-infused cookies with white chocolate. Earthy, sweet, and uniquely delicious.", price: 259, image: butterCookies, category: "cookies", badges: ["Exotic"], weight: "160g", nutrition: { calories: "420 kcal", protein: "5g", fat: "20g", carbs: "56g" } },

  // PROTEIN (10)
  { id: "5", name: "Peanut Protein Bar", description: "High-protein bar with crunchy peanuts, oats, and dark chocolate. Fuel your workout the tasty way.", price: 89, originalPrice: 120, image: proteinBar, category: "protein", badges: ["20g Protein"], weight: "60g", nutrition: { calories: "220 kcal", protein: "20g", fat: "8g", carbs: "24g" }, featured: true },
  { id: "9", name: "Almond Protein Bites", description: "Bite-sized protein balls with almonds, dates, and whey protein. The perfect post-workout snack.", price: 249, image: proteinBites, category: "protein", badges: ["15g Protein"], weight: "180g", nutrition: { calories: "380 kcal", protein: "22g", fat: "16g", carbs: "38g" } },
  { id: "36", name: "Berry Granola Bar", description: "Crunchy granola bar packed with mixed berries, oats, and honey. Natural energy on the go.", price: 79, image: granolaBar, category: "protein", badges: ["Natural"], weight: "50g", nutrition: { calories: "190 kcal", protein: "4g", fat: "6g", carbs: "32g" }, bestseller: true },
  { id: "37", name: "Choco Whey Bar", description: "Decadent chocolate protein bar with 25g whey protein. Gym-bag essential.", price: 129, image: proteinBar, category: "protein", badges: ["25g Protein"], weight: "65g", nutrition: { calories: "250 kcal", protein: "25g", fat: "9g", carbs: "22g" } },
  { id: "38", name: "Coconut Energy Balls", description: "No-bake coconut and date energy balls rolled in desiccated coconut. Clean energy, zero guilt.", price: 199, image: proteinBites, category: "protein", badges: ["Vegan"], weight: "150g", nutrition: { calories: "340 kcal", protein: "8g", fat: "18g", carbs: "40g" } },
  { id: "39", name: "Oats & Honey Bar", description: "Wholesome oat bar bound with raw honey and flaxseeds. A naturally sweet pick-me-up.", price: 69, image: granolaBar, category: "protein", badges: ["Fiber Rich"], weight: "45g", nutrition: { calories: "180 kcal", protein: "4g", fat: "5g", carbs: "30g" } },
  { id: "40", name: "Peanut Butter Bites", description: "Rich peanut butter balls coated in dark chocolate. Indulgent yet packed with 12g protein.", price: 229, image: proteinBites, category: "protein", badges: ["12g Protein"], weight: "160g", nutrition: { calories: "400 kcal", protein: "18g", fat: "24g", carbs: "32g" } },
  { id: "41", name: "Mixed Seed Bar", description: "Crunchy bar with sunflower, pumpkin, chia, and flax seeds. A nutrient powerhouse.", price: 99, image: granolaBar, category: "protein", badges: ["Seeds"], weight: "50g", nutrition: { calories: "210 kcal", protein: "6g", fat: "12g", carbs: "20g" } },
  { id: "42", name: "Spirulina Energy Bar", description: "Superfood bar with spirulina, cashews, and dates. Green energy for peak performance.", price: 149, image: proteinBar, category: "protein", badges: ["Superfood"], weight: "55g", nutrition: { calories: "200 kcal", protein: "8g", fat: "7g", carbs: "28g" } },
  { id: "43", name: "Whey Protein Clusters", description: "Crunchy whey protein clusters with almonds and dark chocolate. Snack your way to gains.", price: 299, image: proteinBites, category: "protein", badges: ["30g Protein"], weight: "200g", nutrition: { calories: "420 kcal", protein: "30g", fat: "18g", carbs: "36g" } },

  // DRIED FRUITS (10)
  { id: "6", name: "Mango Dried Slices", description: "Naturally sweet dried mango slices with no added sugar. A tropical treat that's also healthy.", price: 179, image: driedMango, category: "dried", badges: ["Natural"], weight: "150g", nutrition: { calories: "340 kcal", protein: "2g", fat: "1g", carbs: "82g" }, featured: true },
  { id: "44", name: "Dried Cranberries", description: "Tart and sweet dried cranberries, perfect for snacking, baking, or topping your morning oats.", price: 199, image: driedCranberries, category: "dried", badges: ["Antioxidant"], weight: "150g", nutrition: { calories: "330 kcal", protein: "1g", fat: "1g", carbs: "82g" }, bestseller: true },
  { id: "45", name: "Turkish Dried Figs", description: "Premium Turkish figs, naturally sun-dried. Rich in fiber and naturally sweet.", price: 299, originalPrice: 379, image: driedFigs, category: "dried", badges: ["Imported"], weight: "200g", nutrition: { calories: "250 kcal", protein: "3g", fat: "1g", carbs: "64g" } },
  { id: "46", name: "Golden Apricots", description: "Plump, golden apricots from Ladakh. A delicate sweetness with a velvety texture.", price: 349, image: driedApricots, category: "dried", badges: ["Premium"], weight: "200g", nutrition: { calories: "240 kcal", protein: "3g", fat: "0.5g", carbs: "63g" } },
  { id: "47", name: "Dried Pineapple Rings", description: "Tropical pineapple rings, naturally dehydrated. Chewy, tangy, and full of sunshine.", price: 219, image: driedMango, category: "dried", badges: ["Tropical"], weight: "150g", nutrition: { calories: "350 kcal", protein: "2g", fat: "1g", carbs: "85g" } },
  { id: "48", name: "Mixed Berry Blend", description: "A vibrant mix of dried strawberries, blueberries, and raspberries. Berry bliss in every handful.", price: 329, image: driedCranberries, category: "dried", badges: ["Superfood"], weight: "150g", nutrition: { calories: "310 kcal", protein: "2g", fat: "1g", carbs: "78g" } },
  { id: "49", name: "Dried Kiwi Slices", description: "Tangy dried kiwi slices with a natural green hue. A unique and refreshing dried fruit.", price: 249, image: driedMango, category: "dried", badges: ["Exotic"], weight: "120g", nutrition: { calories: "320 kcal", protein: "2g", fat: "1g", carbs: "80g" } },
  { id: "50", name: "Coconut Chips", description: "Crispy toasted coconut chips with a hint of sea salt. Light, crunchy, and naturally sweet.", price: 159, image: driedFigs, category: "dried", badges: ["Keto"], weight: "100g", nutrition: { calories: "600 kcal", protein: "6g", fat: "60g", carbs: "24g" } },
  { id: "51", name: "Goji Berries", description: "Nutrient-dense Himalayan goji berries. An ancient superfood packed with vitamins.", price: 399, image: driedCranberries, category: "dried", badges: ["Superfood"], weight: "100g", nutrition: { calories: "340 kcal", protein: "14g", fat: "1g", carbs: "77g" } },
  { id: "52", name: "Date & Nut Rolls", description: "Medjool dates stuffed with almonds and rolled in coconut. Nature's candy, elevated.", price: 279, image: driedApricots, category: "dried", badges: ["Handmade"], weight: "200g", nutrition: { calories: "380 kcal", protein: "6g", fat: "12g", carbs: "66g" } },

  // NAMKEEN (10)
  { id: "7", name: "Classic Bhujia Mix", description: "Crunchy besan bhujia with a perfect blend of spices. The classic Indian namkeen that never goes out of style.", price: 99, image: bhujia, category: "namkeen", badges: ["Traditional"], weight: "200g", nutrition: { calories: "560 kcal", protein: "16g", fat: "36g", carbs: "44g" }, bestseller: true },
  { id: "12", name: "Spicy Peanut Mix", description: "Roasted peanuts tossed with red chili and curry leaves. The ultimate spicy snack companion.", price: 79, image: spicyPeanuts, category: "namkeen", badges: ["Value Pack"], weight: "250g", nutrition: { calories: "540 kcal", protein: "24g", fat: "38g", carbs: "22g" } },
  { id: "53", name: "Aloo Sev", description: "Fine, crispy potato sev with a delicate spice blend. A lighter take on the classic namkeen.", price: 89, image: sevNamkeen, category: "namkeen", badges: ["Light"], weight: "200g", nutrition: { calories: "520 kcal", protein: "10g", fat: "30g", carbs: "52g" } },
  { id: "54", name: "Chivda Mix", description: "A savory blend of flattened rice, peanuts, curry leaves, and spices. The quintessential tea-time snack.", price: 119, image: chivda, category: "namkeen", badges: ["Popular"], weight: "250g", nutrition: { calories: "480 kcal", protein: "12g", fat: "24g", carbs: "56g" }, featured: true },
  { id: "55", name: "Roasted Makhana", description: "Light and crunchy foxnuts roasted with ghee and rock salt. A guilt-free traditional snack.", price: 149, image: makhana, category: "namkeen", badges: ["Healthy"], weight: "100g", nutrition: { calories: "360 kcal", protein: "10g", fat: "4g", carbs: "72g" }, bestseller: true },
  { id: "56", name: "Moong Dal Namkeen", description: "Split moong lentils fried to golden perfection with turmeric and chili. Protein-packed crunch.", price: 89, image: bhujia, category: "namkeen", badges: ["Protein"], weight: "200g", nutrition: { calories: "500 kcal", protein: "22g", fat: "28g", carbs: "42g" } },
  { id: "57", name: "Khatta Meetha Mix", description: "A sweet and tangy medley of puffed rice, peanuts, and dried fruits. The perfect flavor balance.", price: 99, image: chivda, category: "namkeen", badges: ["Sweet & Sour"], weight: "200g", nutrition: { calories: "460 kcal", protein: "10g", fat: "20g", carbs: "62g" } },
  { id: "58", name: "Masala Mathri", description: "Flaky, crispy wheat crackers spiced with ajwain and black pepper. A north Indian classic.", price: 109, image: sevNamkeen, category: "namkeen", badges: ["Artisan"], weight: "250g", nutrition: { calories: "540 kcal", protein: "8g", fat: "32g", carbs: "54g" } },
  { id: "59", name: "Cornflake Mixture", description: "Crispy cornflakes mixed with nuts, curry leaves, and spices. A modern twist on traditional namkeen.", price: 129, image: chivda, category: "namkeen", badges: ["Crunchy"], weight: "200g", nutrition: { calories: "490 kcal", protein: "10g", fat: "22g", carbs: "64g" } },
  { id: "60", name: "Pepper Cashew Bits", description: "Broken cashews coated in cracked black pepper. Premium namkeen for the discerning snacker.", price: 199, image: spicyPeanuts, category: "namkeen", badges: ["Premium"], weight: "150g", nutrition: { calories: "560 kcal", protein: "18g", fat: "44g", carbs: "26g" } },
];

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getBestsellers = () => products.filter((p) => p.bestseller);
export const getProductById = (id: string) => products.find((p) => p.id === id);
