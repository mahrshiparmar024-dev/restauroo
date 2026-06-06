export type Category = 
  | 'cold_appetizer' 
  | 'hot_appetizer' 
  | 'salad' 
  | 'combos' 
  | 'kebabs' 
  | 'saute' 
  | 'doner' 
  | 'pide' 
  | 'margarita' 
  | 'fresh_juices' 
  | 'milk_shakes' 
  | 'desserts';

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
  { key: 'cold_appetizer', label: 'Cold Appetizers' },
  { key: 'hot_appetizer', label: 'Hot Appetizers' },
  { key: 'salad', label: 'Salads' },
  { key: 'combos', label: 'Combos' },
  { key: 'kebabs', label: 'Kebabs' },
  { key: 'saute', label: 'Sauté' },
  { key: 'doner', label: 'Döner' },
  { key: 'pide', label: 'Pide & Lahmacun' },
  { key: 'margarita', label: 'Margaritas' },
  { key: 'fresh_juices', label: 'Fresh Juices' },
  { key: 'milk_shakes', label: 'Milk Shakes' },
  { key: 'desserts', label: 'Desserts' },
];

const g = 'linear-gradient(145deg, #7A1B22 0%, #a0222a 35%, #c8353e 65%, #e8555e 100%)';

export const menuData: Dish[] = [
  // Cold Appetizers
  { id: 'hummus', name: 'Hummus', nameEn: 'Hummus', category: 'cold_appetizer', description: 'Creamy chickpea dip', price: 8.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'sarma', name: 'Sarma', nameEn: 'Stuffed Grape Leaves', category: 'cold_appetizer', description: 'Vine leaves stuffed with rice and herbs', price: 9.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'baba-ghanoush', name: 'Baba Ghanoush', nameEn: 'Baba Ghanoush', category: 'cold_appetizer', description: 'Smoky roasted eggplant dip', price: 9.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'haydari', name: 'Haydari', nameEn: 'Haydari', category: 'cold_appetizer', description: 'Thick garlic yogurt with herbs', price: 8.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'eggplant', name: 'Eggplant', nameEn: 'Roasted Eggplant', category: 'cold_appetizer', description: 'Roasted eggplant mezze', price: 10.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'mix-appetizer', name: 'Mix Appetizer', nameEn: 'Mixed Appetizer (4 varieties)', category: 'cold_appetizer', description: '4 farklı karışık meze', price: 24.99, isPopular: true, isVegetarian: true, gradientStyle: g },

  // Hot Appetizers
  { id: 'kelle-paca', name: 'Kelle Paça', nameEn: 'Kelle Paca Soup', category: 'hot_appetizer', description: 'Traditional trotter soup', price: 12.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'lentil-soup', name: 'Mercimek Çorbası', nameEn: 'Lentil Soup', category: 'hot_appetizer', description: 'Warm and comforting lentil soup', price: 8.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'fried-calamari', name: 'Kalamar Tava', nameEn: 'Fried Calamari', category: 'hot_appetizer', description: 'Crispy fried calamari rings', price: 19.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'fried-shrimp', name: 'Karides Tava', nameEn: 'Fried Shrimp', category: 'hot_appetizer', description: 'Crispy fried shrimp', price: 18.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'manti', name: 'Mantı', nameEn: 'Turkish Dumplings', category: 'hot_appetizer', description: 'Mini dumplings topped with garlic yogurt', price: 22.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'icli-kofte', name: 'İçli Köfte', nameEn: 'Stuffed Meatballs', category: 'hot_appetizer', description: 'Bulgur shell stuffed with minced meat and walnuts', price: 18.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'cigar-rolls', name: 'Sigara Böreği', nameEn: 'Cigar Rolls', category: 'hot_appetizer', description: 'Crispy pastry rolls filled with cheese', price: 11.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'fries', name: 'Patates Kızartması', nameEn: 'Fries', category: 'hot_appetizer', description: 'Crispy golden fries', price: 5.99, isPopular: false, isVegetarian: true, gradientStyle: g },

  // Salads
  { id: 'shepherds-salad', name: 'Çoban Salatası', nameEn: 'Shepherds Salad', category: 'salad', description: 'Finely chopped tomatoes, cucumbers, onions, and parsley', price: 13.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'green-salad', name: 'Yeşil Salata', nameEn: 'Green Salad', category: 'salad', description: 'Fresh mixed greens', price: 15.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'chicken-salad', name: 'Tavuklu Salata', nameEn: 'Chicken Salad', category: 'salad', description: 'Fresh salad topped with grilled chicken', price: 17.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'saray-salad', name: 'Saray Salatası', nameEn: 'Saray Salad', category: 'salad', description: 'Our signature house salad', price: 17.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'shrimp-salad', name: 'Karides Salatası', nameEn: 'Shrimp Salad', category: 'salad', description: 'Fresh salad topped with shrimp', price: 20.99, isPopular: false, isVegetarian: false, gradientStyle: g },

  // Combos
  { id: 'combo-2', name: 'Saray Mix (2 Kişilik)', nameEn: 'Saray Mix for 2 people', category: 'combos', description: 'A grand platter of mixed kebabs for two', price: 65.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'combo-5', name: 'Saray Mix (5 Kişilik)', nameEn: 'Saray Mix for 5 people', category: 'combos', description: 'A grand feast of mixed kebabs for five', price: 130.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'combo-8', name: 'Saray Mix (8 Kişilik)', nameEn: 'Saray Mix for 8 people', category: 'combos', description: 'The ultimate royal feast of mixed kebabs for eight', price: 206.99, isPopular: false, isVegetarian: false, gradientStyle: g },

  // Kebabs
  { id: 'adana-kebab', name: 'Adana Kebap', nameEn: 'Adana Kebab', category: 'kebabs', description: 'Spicy minced meat kebab grilled on a wide skewer', price: 24.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'urfa-kebab', name: 'Urfa Kebap', nameEn: 'Urfa Kebab', category: 'kebabs', description: 'Mild minced meat kebab', price: 24.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'tomatoes-kebab', name: 'Domatesli Kebap', nameEn: 'Tomatoes Kebab', category: 'kebabs', description: 'Kebab grilled with fresh tomatoes', price: 29.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'eggplant-kebab', name: 'Patlıcan Kebap', nameEn: 'Eggplant Kebab', category: 'kebabs', description: 'Kebab roasted with eggplant slices', price: 29.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'beef-shish', name: 'Dana Şiş', nameEn: 'Beef Shish', category: 'kebabs', description: 'Tender marinated beef skewers', price: 28.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'beyti-sarma', name: 'Beyti Sarma', nameEn: 'Beyti Sarma', category: 'kebabs', description: 'Minced lamb wrapped in lavash, topped with tomato sauce and yogurt', price: 26.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'pistachio-kebab', name: 'Fıstıklı Kebap', nameEn: 'Pistachio Kebab', category: 'kebabs', description: 'Kebab enriched with pistachios', price: 28.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-adana', name: 'Tavuk Adana', nameEn: 'Chicken Adana Kebab', category: 'kebabs', description: 'Spicy minced chicken kebab', price: 22.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-shish', name: 'Tavuk Şiş', nameEn: 'Chicken Shish', category: 'kebabs', description: 'Marinated chicken skewers', price: 22.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-wings', name: 'Tavuk Kanat', nameEn: 'Chicken Wings', category: 'kebabs', description: 'Grilled marinated chicken wings', price: 22.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'lamb-chop', name: 'Kuzu Pirzola', nameEn: 'Lamb Chop', category: 'kebabs', description: 'Tender grilled lamb chops', price: 38.99, isPopular: true, isVegetarian: false, gradientStyle: g },

  // Saute
  { id: 'ali-nazik', name: 'Ali Nazik', nameEn: 'Ali Nazik', category: 'saute', description: 'Smoky eggplant puree topped with spiced minced meat', price: 28.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'mushrooms-saute', name: 'Mantar Sote', nameEn: 'Mushrooms Sauté', category: 'saute', description: 'Sautéed mushrooms with herbs', price: 26.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'beef-saute', name: 'Et Sote', nameEn: 'Beef Sauté', category: 'saute', description: 'Tender beef sautéed with tomatoes and peppers', price: 27.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-saute', name: 'Tavuk Sote', nameEn: 'Chicken Sauté', category: 'saute', description: 'Chicken sautéed with vegetables', price: 26.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'beef-mushrooms-saute', name: 'Mantarlı Et Sote', nameEn: 'Beef Mushrooms Sauté', category: 'saute', description: 'Beef and mushrooms sautéed perfectly', price: 27.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'coban-kavurma', name: 'Çoban Kavurma', nameEn: 'Çoban Kavurma', category: 'saute', description: 'Shepherd-style roasted meat with vegetables', price: 27.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-kavurma', name: 'Tavuk Kavurma', nameEn: 'Chicken Kavurma', category: 'saute', description: 'Roasted chicken with traditional spices', price: 27.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'sac-tava', name: 'Saç Tava', nameEn: 'Saç Tava', category: 'saute', description: 'Diced meat cooked on a traditional iron plate', price: 27.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'cokertme', name: 'Çökertme Kebabı', nameEn: 'Çökertme', category: 'saute', description: 'Julienne beef served over crispy potato strings and garlic yogurt', price: 29.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'shrimp-tava', name: 'Karides Tava', nameEn: 'Shrimp Tava', category: 'saute', description: 'Shrimp cooked in a traditional pan', price: 26.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'hunkarbegendi', name: 'Hünkar Beğendi', nameEn: 'Hunkarbegendi', category: 'saute', description: 'Beef stew served over creamy roasted eggplant puree', price: 27.99, isPopular: false, isVegetarian: false, gradientStyle: g },

  // Doner
  { id: 'iskender-beef', name: 'İskender Et Döner', nameEn: 'İskender Beef Döner Plate', category: 'doner', description: 'Thinly sliced beef over pita with tomato sauce and browned butter', price: 23.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'mix-doner', name: 'Karışık Döner', nameEn: 'Mix Döner Plate', category: 'doner', description: 'A mix of beef and chicken döner', price: 24.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-doner-plate', name: 'Tavuk Döner', nameEn: 'Chicken Döner Plate', category: 'doner', description: 'Chicken döner served on a plate', price: 22.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-iskender', name: 'Tavuk İskender', nameEn: 'Chicken İskender', category: 'doner', description: 'Chicken döner served İskender style', price: 26.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'beef-iskender', name: 'Et İskender', nameEn: 'Beef İskender', category: 'doner', description: 'Premium beef döner served İskender style', price: 27.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'beef-doner-durum', name: 'Et Döner Dürüm', nameEn: 'Beef Döner Dürüm', category: 'doner', description: 'Beef döner wrapped in fresh lavash', price: 15.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-doner-durum', name: 'Tavuk Döner Dürüm', nameEn: 'Chicken Döner Dürüm', category: 'doner', description: 'Chicken döner wrapped in fresh lavash', price: 14.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'adana-durum', name: 'Adana Dürüm', nameEn: 'Adana Kebab Dürüm', category: 'doner', description: 'Adana kebab wrapped in fresh lavash', price: 16.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'chicken-shish-durum', name: 'Tavuk Şiş Dürüm', nameEn: 'Chicken Shish Dürüm', category: 'doner', description: 'Chicken shish wrapped in fresh lavash', price: 15.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'beef-shish-durum', name: 'Dana Şiş Dürüm', nameEn: 'Beef Shish Dürüm', category: 'doner', description: 'Beef shish wrapped in fresh lavash', price: 17.99, isPopular: false, isVegetarian: false, gradientStyle: g },

  // Pide
  { id: 'kusbasili-pide', name: 'Kuşbaşılı Pide', nameEn: 'Kuşbaşılı Pide', category: 'pide', description: 'Pide topped with diced meat and vegetables', price: 22.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'sucuk-pide', name: 'Sucuklu Pide', nameEn: 'Sucuk Pide', category: 'pide', description: 'Pide topped with Turkish garlic sausage', price: 19.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'saray-mix-pide', name: 'Saray Karışık Pide', nameEn: 'Saray Mix Pide', category: 'pide', description: 'A mix of various meats and cheeses', price: 23.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'mushrooms-pide', name: 'Mantarlı Pide', nameEn: 'Mushrooms Pide', category: 'pide', description: 'Pide topped with mushrooms and cheese', price: 19.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'chicken-doner-pide', name: 'Tavuk Dönerli Pide', nameEn: 'Chicken Döner Pide', category: 'pide', description: 'Pide topped with chicken döner', price: 20.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'beef-doner-pide', name: 'Et Dönerli Pide', nameEn: 'Beef Döner Pide', category: 'pide', description: 'Pide topped with beef döner', price: 21.99, isPopular: false, isVegetarian: false, gradientStyle: g },
  { id: 'lahmacun', name: 'Lahmacun', nameEn: 'Lahmacun', category: 'pide', description: 'Thin crust flatbread topped with minced meat and herbs', price: 18.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'antep-lahmacun', name: 'Antep Lahmacun', nameEn: 'Antep Lahmacun', category: 'pide', description: 'Spicier, authentic Gaziantep style lahmacun', price: 18.99, isPopular: true, isVegetarian: false, gradientStyle: g },
  { id: 'spinach-pide', name: 'Ispanaklı Pide', nameEn: 'Spinach Pide', category: 'pide', description: 'Pide topped with spinach and cheese', price: 18.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'veg-pide', name: 'Sebzeli Pide', nameEn: 'Vegetarian Pide', category: 'pide', description: 'Pide topped with mixed vegetables', price: 19.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'cheese-pide', name: 'Peynirli Pide', nameEn: 'Cheese Pide', category: 'pide', description: 'Pide topped with melted cheese', price: 18.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'mix-doner-pide', name: 'Karışık Dönerli Pide', nameEn: 'Mix Döner Pide', category: 'pide', description: 'Pide topped with mixed döner meat', price: 23.99, isPopular: false, isVegetarian: false, gradientStyle: g },

  // Margaritas
  { id: 'mango-margarita', name: 'Mango Margarita', nameEn: 'Mango Margarita', category: 'margarita', description: 'Refreshing mango margarita', price: 10.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'strawberry-margarita', name: 'Çilekli Margarita', nameEn: 'Strawberry Margarita', category: 'margarita', description: 'Refreshing strawberry margarita', price: 10.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'pina-colada', name: 'Piña Colada', nameEn: 'Pina Colada', category: 'margarita', description: 'Classic tropical blend', price: 10.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'pink-lady', name: 'Pink Lady', nameEn: 'Pink Lady', category: 'margarita', description: 'Signature pink cocktail', price: 10.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'saray-special', name: 'Saray Special', nameEn: 'Saray Special', category: 'margarita', description: 'Our signature house cocktail mix', price: 11.99, isPopular: true, isVegetarian: true, gradientStyle: g },

  // Fresh Juices
  { id: 'lemon-mint', name: 'Nane Limon', nameEn: 'Lemon Mint', category: 'fresh_juices', description: 'Freshly squeezed lemon with mint', price: 9.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'mango-juice', name: 'Mango Suyu', nameEn: 'Mango Juice', category: 'fresh_juices', description: 'Freshly squeezed mango juice', price: 9.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'orange-juice', name: 'Portakal Suyu', nameEn: 'Orange Juice', category: 'fresh_juices', description: 'Freshly squeezed orange juice', price: 9.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'strawberry-juice', name: 'Çilek Suyu', nameEn: 'Strawberry Juice', category: 'fresh_juices', description: 'Freshly squeezed strawberry juice', price: 9.99, isPopular: false, isVegetarian: true, gradientStyle: g },

  // Milk Shakes
  { id: 'mango-shake', name: 'Mango Shake', nameEn: 'Mango Shake', category: 'milk_shakes', description: 'Creamy mango shake', price: 10.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'strawberry-shake', name: 'Çilek Shake', nameEn: 'Strawberry Shake', category: 'milk_shakes', description: 'Creamy strawberry shake', price: 10.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'chocolate-shake', name: 'Çikolata Shake', nameEn: 'Chocolate Shake', category: 'milk_shakes', description: 'Rich chocolate shake', price: 10.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'ferrero-shake', name: 'Ferrero Shake', nameEn: 'Ferrero Shake', category: 'milk_shakes', description: 'Premium Ferrero Rocher shake', price: 11.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'snicker-shake', name: 'Snickers Shake', nameEn: 'Snicker Shake', category: 'milk_shakes', description: 'Loaded Snickers shake', price: 11.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'oreo-shake', name: 'Oreo Shake', nameEn: 'Oreo Shake', category: 'milk_shakes', description: 'Classic Oreo shake', price: 11.99, isPopular: true, isVegetarian: true, gradientStyle: g },

  // Desserts
  { id: 'baklava', name: 'Baklava', nameEn: 'Baklava', category: 'desserts', description: 'Classic pistachio baklava layered with phyllo and honey', price: 10.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'sarma-baklava', name: 'Sarma Baklava', nameEn: 'Sarma Baklava', category: 'desserts', description: 'Rolled baklava packed with extra pistachios', price: 11.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'havuc-dilimi', name: 'Havuç Dilimi', nameEn: 'Havuç Dilim', category: 'desserts', description: 'Carrot-slice style large baklava', price: 11.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'trilice', name: 'Trileçe', nameEn: 'Tralice', category: 'desserts', description: 'Caramel soaked three-milk cake', price: 10.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'kunefe', name: 'Künefe', nameEn: 'Kunefe', category: 'desserts', description: 'Sweet cheese pastry soaked in syrup, served warm', price: 11.99, isPopular: true, isVegetarian: true, gradientStyle: g },
  { id: 'rice-pudding', name: 'Sütlaç', nameEn: 'Rice Pudding', category: 'desserts', description: 'Oven-baked rice pudding', price: 8.99, isPopular: false, isVegetarian: true, gradientStyle: g },
  { id: 'cold-baklava', name: 'Soğuk Baklava', nameEn: 'Cold Baklava', category: 'desserts', description: 'Modern milky baklava soaked in cold milk syrup with cocoa', price: 11.99, isPopular: true, isVegetarian: true, gradientStyle: g },
];

export const getPopularDishes = () => menuData.filter((dish) => dish.isPopular);
