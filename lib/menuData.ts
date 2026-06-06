export type Category = 'mezze' | 'kebabs' | 'pide' | 'mains' | 'desserts';

export interface Dish {
  id: string;
  name: string;
  nameEn: string;
  category: Category;
  description: string;
  price: number;
  isPopular: boolean;
  isVegetarian: boolean;
  gradientStyle: string;
}

export const CATEGORIES: { key: Category; label: string }[] = [
  { key: 'mezze', label: 'Mezze' },
  { key: 'kebabs', label: 'Kebabs' },
  { key: 'pide', label: 'Pide & Bread' },
  { key: 'mains', label: 'Mains' },
  { key: 'desserts', label: 'Desserts & Drinks' },
];

export const menuData: Dish[] = [
  // ────────────────────────────────── MEZZE ──────────────────────────────────
  {
    id: 'hummus',
    name: 'Hummus',
    nameEn: 'Classic Chickpea Dip',
    category: 'mezze',
    description:
      'Stone-ground chickpeas whipped with tahini, lemon, and a slow pour of Aegean olive oil. Finished with sumac and toasted pine nuts.',
    price: 9.5,
    isPopular: true,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(145deg, #d4a843 0%, #c4913a 35%, #a0722a 65%, #7a5520 100%)',
  },
  {
    id: 'muhammara',
    name: 'Muhammara',
    nameEn: 'Roasted Pepper & Walnut Spread',
    category: 'mezze',
    description:
      'Charred red peppers pounded with walnuts, pomegranate molasses, and Aleppo pepper. A Gaziantep staple we refuse to simplify.',
    price: 11.0,
    isPopular: false,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(135deg, #8b2500 0%, #c8401a 40%, #d4633b 70%, #e8a020 100%)',
  },
  {
    id: 'sigara-boregi',
    name: 'Sigara Böreği',
    nameEn: 'Crispy Feta Rolls',
    category: 'mezze',
    description:
      'Hand-rolled yufka pastry stuffed with aged beyaz peynir and flat-leaf parsley, fried until the edges shatter.',
    price: 12.0,
    isPopular: true,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(160deg, #e8d5b0 0%, #c4a865 30%, #a08040 60%, #7a5a20 100%)',
  },
  {
    id: 'haydari',
    name: 'Haydari',
    nameEn: 'Thick Herbed Yogurt Dip',
    category: 'mezze',
    description:
      'Strained yogurt folded with dried mint, roasted garlic, and crumbled feta. Served cold with warm bread.',
    price: 10.0,
    isPopular: false,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(140deg, #f5f0e8 0%, #ddd5c5 40%, #c4b89a 70%, #a09070 100%)',
  },
  {
    id: 'patlican-salatasi',
    name: 'Patlıcan Salatası',
    nameEn: 'Smoky Eggplant Salad',
    category: 'mezze',
    description:
      'Whole eggplants charred directly over flame, then mashed with tahini, garlic, lemon, and a thread of pomegranate molasses.',
    price: 10.5,
    isPopular: false,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(155deg, #3d2a1a 0%, #6b4530 35%, #8a6040 65%, #b08050 100%)',
  },

  // ────────────────────────────────── KEBABS ──────────────────────────────────
  {
    id: 'adana-kebab',
    name: 'Adana Kebab',
    nameEn: 'Spicy Hand-Minced Lamb Kebab',
    category: 'kebabs',
    description:
      'Coarse-ground lamb kneaded with tail fat, Urfa biber, and red pepper flake, pressed onto wide iron skewers and grilled over hardwood charcoal. Served with lavash and charred tomato.',
    price: 24.0,
    isPopular: true,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(135deg, #3d1f0d 0%, #7a3520 40%, #c8401a 70%, #e8a020 100%)',
  },
  {
    id: 'beyti-kebab',
    name: 'Beyti Kebab',
    nameEn: 'Wrapped Grilled Lamb in Lavash',
    category: 'kebabs',
    description:
      'Seasoned ground lamb grilled on the skewer, then wrapped in lavash with butter and served over tomato sauce with a side of yogurt.',
    price: 26.0,
    isPopular: true,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(140deg, #4a2010 0%, #8b3520 30%, #b84a20 60%, #d4633b 100%)',
  },
  {
    id: 'sis-tavuk',
    name: 'Şiş Tavuk',
    nameEn: 'Charcoal-Grilled Chicken Skewers',
    category: 'kebabs',
    description:
      'Free-range chicken thigh marinated overnight in yogurt, tomato paste, and a proprietary seven-spice blend. Grilled over binchotan.',
    price: 21.0,
    isPopular: false,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(130deg, #5c3d1e 0%, #8a6535 35%, #c4913a 65%, #e8b84a 100%)',
  },
  {
    id: 'kuzu-tandir',
    name: 'Kuzu Tandır',
    nameEn: 'Slow-Roasted Whole Lamb Shoulder',
    category: 'kebabs',
    description:
      'Lamb shoulder rubbed with mountain oregano, slow-cooked for six hours in a sealed clay oven until it falls apart. Limited availability — we cook two shoulders per day.',
    price: 32.0,
    isPopular: true,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(145deg, #2a1508 0%, #5c2d15 30%, #8b4525 60%, #c8622a 100%)',
  },
  {
    id: 'kofte',
    name: 'Köfte',
    nameEn: 'Grilled Turkish Meatballs',
    category: 'kebabs',
    description:
      'A blend of lamb and beef shaped by hand with grated onion, cumin, and fresh herbs. Charred on the outside, juicy within. Served with ezme salad.',
    price: 19.0,
    isPopular: false,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(135deg, #3d2010 0%, #6b3a20 40%, #9a5530 70%, #c87040 100%)',
  },

  // ────────────────────────────────── PIDE & BREAD ──────────────────────────────────
  {
    id: 'kiymali-pide',
    name: 'Kıymalı Pide',
    nameEn: 'Lamb Mince Pide',
    category: 'pide',
    description:
      'Boat-shaped flatbread with hand-stretched dough, filled with seasoned lamb mince, tomatoes, and green peppers, baked in a wood-fired oven until the edges char and blister.',
    price: 18.0,
    isPopular: true,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(150deg, #c4913a 0%, #a0722a 30%, #7a4a1a 60%, #5c3210 100%)',
  },
  {
    id: 'peynirli-pide',
    name: 'Peynirli Pide',
    nameEn: 'Three-Cheese Pide',
    category: 'pide',
    description:
      'A blend of kaşar, beyaz peynir, and lor cheese melted into hand-stretched dough. Finished with butter and an optional egg cracked into the centre.',
    price: 16.0,
    isPopular: false,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(135deg, #e8d5b0 0%, #d4b880 30%, #c4a060 60%, #a88840 100%)',
  },
  {
    id: 'bazlama',
    name: 'Bazlama',
    nameEn: 'Griddle Bread with Butter',
    category: 'pide',
    description:
      'Thick, pillowy flatbread cooked on a cast-iron sac griddle. Served warm and torn, with a generous pat of cultured butter.',
    price: 6.0,
    isPopular: false,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(145deg, #f0e0c8 0%, #d4c4a0 40%, #b8a078 70%, #9a8060 100%)',
  },

  // ────────────────────────────────── MAINS ──────────────────────────────────
  {
    id: 'iskender-kebab',
    name: 'İskender Kebab',
    nameEn: 'Döner Over Bread with Tomato Butter',
    category: 'mains',
    description:
      'Thin-sliced döner lamb layered over torn pide bread, doused in bright tomato sauce and sizzling brown butter. A pool of yogurt on the side. Born in Bursa, perfected here.',
    price: 27.0,
    isPopular: true,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(140deg, #4a1a08 0%, #8b3520 35%, #c8401a 60%, #e8a020 100%)',
  },
  {
    id: 'kuru-fasulye',
    name: 'Kuru Fasulye',
    nameEn: 'Slow-Simmered White Bean Stew',
    category: 'mains',
    description:
      'The comfort dish of Istanbul. Dried white beans braised for hours with tomato paste, green peppers, and a hint of sucuk. Served with pilav and pickled turnips.',
    price: 16.0,
    isPopular: false,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(155deg, #5c3d1e 0%, #8a6535 30%, #b8884a 60%, #d4a860 100%)',
  },
  {
    id: 'manti',
    name: 'Mantı',
    nameEn: 'Turkish Dumplings with Garlic Yogurt',
    category: 'mains',
    description:
      'Tiny hand-folded dumplings filled with spiced lamb, boiled, then dressed with garlic yogurt and a drizzle of paprika-infused butter. Each one pinched by hand.',
    price: 22.0,
    isPopular: true,
    isVegetarian: false,
    gradientStyle:
      'linear-gradient(135deg, #f0e0c8 0%, #d4b880 25%, #a08050 50%, #7a5a30 100%)',
  },

  // ────────────────────────────────── DESSERTS & DRINKS ──────────────────────────────────
  {
    id: 'baklava',
    name: 'Baklava',
    nameEn: 'Pistachio Baklava',
    category: 'desserts',
    description:
      'Forty layers of hand-stretched yufka, filled with Antep pistachios and soaked in a light sugar syrup scented with rose water. Takes three days from start to plate.',
    price: 12.0,
    isPopular: true,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(160deg, #5c3d1e 0%, #a0722a 50%, #d4a843 100%)',
  },
  {
    id: 'kunefe',
    name: 'Künefe',
    nameEn: 'Shredded Pastry with Melted Cheese',
    category: 'desserts',
    description:
      'Kadayıf threads pressed around unsalted mozzarella-like dil peyniri, baked until crisp and golden, then soaked in syrup. Served immediately — this one does not wait.',
    price: 14.0,
    isPopular: true,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(140deg, #e8a020 0%, #d4883a 30%, #b86830 60%, #8b4525 100%)',
  },
  {
    id: 'sutlac',
    name: 'Sütlaç',
    nameEn: 'Baked Turkish Rice Pudding',
    category: 'desserts',
    description:
      'Creamy oven-baked rice pudding with a caramelised top. Made with whole milk, a touch of rose water, and no shortcuts. Served cold in the clay ramekin.',
    price: 9.0,
    isPopular: false,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(150deg, #f5f0e8 0%, #e8d5b0 35%, #d4c4a0 65%, #c4a878 100%)',
  },
  {
    id: 'turkish-tea',
    name: 'Çay',
    nameEn: 'Turkish Tea',
    category: 'desserts',
    description:
      'Double-brewed Rize black tea served in a tulip glass. Strong, tannic, and the colour of mahogany. Two sugar cubes on the side, as tradition requires.',
    price: 3.5,
    isPopular: true,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(135deg, #6b2010 0%, #a03818 40%, #c85020 70%, #e87830 100%)',
  },
  {
    id: 'turkish-coffee',
    name: 'Türk Kahvesi',
    nameEn: 'Turkish Coffee',
    category: 'desserts',
    description:
      'Fine-ground Arabica beans slow-brewed in a copper cezve with cardamom. Served with a square of Turkish delight and a glass of water.',
    price: 5.0,
    isPopular: false,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(145deg, #1a0f08 0%, #3d2010 35%, #5c3520 65%, #7a4a30 100%)',
  },
  {
    id: 'ayran',
    name: 'Ayran',
    nameEn: 'Salted Yogurt Drink',
    category: 'desserts',
    description:
      'Cold, frothy, and aggressively refreshing. Whole-milk yogurt churned with ice water and a pinch of sea salt. The only proper kebab companion.',
    price: 4.0,
    isPopular: false,
    isVegetarian: true,
    gradientStyle:
      'linear-gradient(140deg, #f8f4ef 0%, #e8e0d4 30%, #d4ccc0 60%, #c0b8a8 100%)',
  },
];

/**
 * Get dishes filtered by category.
 */
export function getDishesByCategory(category: Category): Dish[] {
  return menuData.filter((dish) => dish.category === category);
}

/**
 * Get popular dishes for the home page highlights.
 */
export function getPopularDishes(): Dish[] {
  return menuData.filter((dish) => dish.isPopular);
}

/**
 * Get a single dish by ID.
 */
export function getDishById(id: string): Dish | undefined {
  return menuData.find((dish) => dish.id === id);
}
