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
  { id: "chips", name: "Chips & Crisps", emoji: "🍟", color: "from-yellow-500 to-orange-500" },
  { id: "nuts", name: "Nuts & Trail Mix", emoji: "🥜", color: "from-amber-600 to-yellow-500" },
  { id: "cookies", name: "Cookies & Biscuits", emoji: "🍪", color: "from-orange-400 to-red-500" },
  { id: "protein", name: "Protein Bars", emoji: "💪", color: "from-purple-500 to-pink-500" },
  { id: "dried", name: "Dried Fruits", emoji: "🍎", color: "from-red-400 to-pink-400" },
  { id: "namkeen", name: "Namkeen & Bhujia", emoji: "🌶️", color: "from-red-500 to-orange-500" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Spicy Masala Chips",
    description: "Bold and fiery masala-flavored potato chips made with real Indian spices. Crispy, crunchy, and irresistibly addictive.",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=500&q=80",
    category: "chips",
    badges: ["Bestseller", "Spicy"],
    weight: "150g",
    ingredients: "Potatoes, Sunflower Oil, Masala Seasoning",
    nutrition: { calories: "520 kcal", protein: "6g", fat: "32g", carbs: "54g" },
    featured: true,
    bestseller: true,
  },
  {
    id: "2",
    name: "Tangy Tomato Crunch",
    description: "A tangy twist on classic chips with sun-dried tomato flavor. Light, crispy, and packed with taste.",
    price: 129,
    image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=500&q=80",
    category: "chips",
    badges: ["New", "Tangy"],
    weight: "120g",
    nutrition: { calories: "480 kcal", protein: "5g", fat: "28g", carbs: "56g" },
    featured: true,
  },
  {
    id: "3",
    name: "Premium Mixed Nuts",
    description: "A rich blend of almonds, cashews, walnuts, and pistachios. Roasted to perfection with a touch of Himalayan salt.",
    price: 449,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500&q=80",
    category: "nuts",
    badges: ["Premium", "Protein Rich"],
    weight: "250g",
    nutrition: { calories: "620 kcal", protein: "18g", fat: "52g", carbs: "22g" },
    featured: true,
    bestseller: true,
  },
  {
    id: "4",
    name: "Choco Chip Cookies",
    description: "Soft-baked cookies loaded with Belgian chocolate chips. Melt-in-your-mouth goodness in every bite.",
    price: 199,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80",
    category: "cookies",
    badges: ["Bestseller"],
    weight: "200g",
    nutrition: { calories: "450 kcal", protein: "5g", fat: "22g", carbs: "60g" },
    featured: true,
  },
  {
    id: "5",
    name: "Peanut Protein Bar",
    description: "High-protein bar with crunchy peanuts, oats, and dark chocolate. Fuel your workout the tasty way.",
    price: 89,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1622484212850-eb596d769edc?w=500&q=80",
    category: "protein",
    badges: ["20g Protein", "No Sugar"],
    weight: "60g",
    nutrition: { calories: "220 kcal", protein: "20g", fat: "8g", carbs: "24g" },
    featured: true,
  },
  {
    id: "6",
    name: "Mango Dried Slices",
    description: "Naturally sweet dried mango slices with no added sugar. A tropical treat that's also healthy!",
    price: 179,
    image: "https://images.unsplash.com/photo-1587049016823-69ef9d68bd44?w=500&q=80",
    category: "dried",
    badges: ["Natural", "No Sugar"],
    weight: "150g",
    nutrition: { calories: "340 kcal", protein: "2g", fat: "1g", carbs: "82g" },
  },
  {
    id: "7",
    name: "Classic Bhujia Mix",
    description: "Crunchy besan bhujia with a perfect blend of spices. The classic Indian namkeen snack.",
    price: 99,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80",
    category: "namkeen",
    badges: ["Traditional", "Crunchy"],
    weight: "200g",
    nutrition: { calories: "560 kcal", protein: "16g", fat: "36g", carbs: "44g" },
    bestseller: true,
  },
  {
    id: "8",
    name: "Honey Roasted Cashews",
    description: "Whole cashews roasted with natural honey glaze. Sweet, crunchy, and absolutely addictive.",
    price: 349,
    image: "https://images.unsplash.com/photo-1563292769-4e05b684851a?w=500&q=80",
    category: "nuts",
    badges: ["Premium", "Natural"],
    weight: "200g",
    nutrition: { calories: "580 kcal", protein: "15g", fat: "44g", carbs: "32g" },
  },
  {
    id: "9",
    name: "Almond Protein Bites",
    description: "Bite-sized protein balls with almonds, dates, and whey protein. Perfect post-workout snack.",
    price: 249,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80",
    category: "protein",
    badges: ["15g Protein", "Energy"],
    weight: "180g",
    nutrition: { calories: "380 kcal", protein: "22g", fat: "16g", carbs: "38g" },
  },
  {
    id: "10",
    name: "Cream & Onion Chips",
    description: "Smooth cream and onion flavored chips with a satisfying crunch. A timeless classic flavor.",
    price: 119,
    image: "https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=500&q=80",
    category: "chips",
    badges: ["Classic"],
    weight: "130g",
    nutrition: { calories: "500 kcal", protein: "5g", fat: "30g", carbs: "55g" },
  },
  {
    id: "11",
    name: "Oatmeal Raisin Cookies",
    description: "Wholesome cookies made with rolled oats and juicy raisins. A healthier treat that doesn't compromise on taste.",
    price: 169,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&q=80",
    category: "cookies",
    badges: ["Wholesome", "Fiber Rich"],
    weight: "180g",
    nutrition: { calories: "420 kcal", protein: "7g", fat: "18g", carbs: "58g" },
  },
  {
    id: "12",
    name: "Spicy Peanut Mix",
    description: "Roasted peanuts tossed with red chili and curry leaves. The ultimate spicy snack companion.",
    price: 79,
    image: "https://images.unsplash.com/photo-1614549253002-f93bcce75ebf?w=500&q=80",
    category: "namkeen",
    badges: ["Spicy", "Value Pack"],
    weight: "250g",
    nutrition: { calories: "540 kcal", protein: "24g", fat: "38g", carbs: "22g" },
  },
];

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const getFeaturedProducts = () => products.filter((p) => p.featured);
export const getBestsellers = () => products.filter((p) => p.bestseller);
export const getProductById = (id: string) => products.find((p) => p.id === id);
