
import { Product, Review, StoreInfo } from './types';

export const STORE_DETAILS: StoreInfo = {
  name: "Variety Mart",
  hindiName: "वैरायटी मार्ट",
  rating: 5.0,
  reviewCount: 6,
  address: "Shop No 3, Wahab Manzil, G. S Road, near Sarsa Education, Gharib Nawaz Colony, Mahtopara, Jugsalai, Jamshedpur, Jharkhand 831001",
  phone: "+91 92298 86602",
  hours: "7:00 AM - 11:00 PM (Daily)",
  instagram: "instagram.com/variety_mart"
};

export const PRODUCTS: Product[] = [
  // --- GROCERIES ---
  { 
    id: 'g1', 
    name: 'Aashirvaad Shudh Chakki Atta', 
    hindiName: 'आशीर्वाद आटा', 
    price: 265, 
    originalPrice: 285, 
    category: 'Groceries', 
    unit: '5 kg', 
    image: 'https://images.unsplash.com/photo-1627485750581-dc455342082b?auto=format&fit=crop&q=80&w=800', 
    description: '100% Whole wheat flour with no maida added. Ground with traditional chakki process for natural taste.' 
  },
  { 
    id: 'g2', 
    name: 'Tata Salt Iodized', 
    hindiName: 'टाटा नमक', 
    price: 28, 
    originalPrice: 30, 
    category: 'Groceries', 
    unit: '1 kg', 
    image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80&w=800', 
    description: 'Vacuum evaporated iodized salt. The original Desh Ka Namak trusted by millions.' 
  },
  { 
    id: 'g3', 
    name: 'Amul Pure Ghee (Tin)', 
    hindiName: 'अमूल शुद्ध घी', 
    price: 665, 
    originalPrice: 710, 
    category: 'Groceries', 
    unit: '1 L', 
    image: 'https://images.unsplash.com/photo-1631709497146-a239ef373cf1?auto=format&fit=crop&q=80&w=800', 
    description: 'Pure cow ghee with rich aroma and granular texture. Essential for Indian cooking and sweets.' 
  },
  { 
    id: 'g4', 
    name: 'Fortune Sunlite Refined Oil', 
    hindiName: 'फॉर्च्यून सनलाइट तेल', 
    price: 155, 
    originalPrice: 175, 
    category: 'Groceries', 
    unit: '1 L', 
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800', 
    description: 'Refined sunflower oil, light and easy to digest. Fortified with Vitamins A & D.' 
  },
  { 
    id: 'g5', 
    name: 'India Gate Basmati Rice', 
    hindiName: 'इण्डिया गेट चावल', 
    price: 540, 
    originalPrice: 625, 
    category: 'Groceries', 
    unit: '5 kg', 
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800', 
    description: 'Premium aged Mogra basmati rice. Long grains with a rich aroma perfect for biryani and pulao.' 
  },
  { 
    id: 'g6', 
    name: 'Tata Sampann Tur Dal', 
    hindiName: 'टाटा संपन्न अरहर दाल', 
    price: 195, 
    originalPrice: 220, 
    category: 'Groceries', 
    unit: '1 kg', 
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=800', 
    description: 'Unpolished toor dal. Naturally high in protein and fiber for a healthy Indian meal.' 
  },
  { 
    id: 'g7', 
    name: 'Madhur Sugar', 
    hindiName: 'मधुर चीनी', 
    price: 49, 
    originalPrice: 55, 
    category: 'Groceries', 
    unit: '1 kg', 
    image: 'https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&q=80&w=800', 
    description: 'Refined sugar, sulfur-free and hygienic. Pure white crystals for all your sweetening needs.' 
  },

  // --- SNACKS & DRINKS ---
  { 
    id: 's1', 
    name: 'Maggi Masala Noodles', 
    hindiName: 'मैगी मसाला नूडल्स', 
    price: 110, 
    originalPrice: 120, 
    category: 'Snacks & Drinks', 
    unit: 'Pack of 8', 
    image: 'https://images.unsplash.com/photo-1612927623704-6b737a92a27b?auto=format&fit=crop&q=80&w=800', 
    description: 'India\'s favorite 2-minute snack. Contains the signature taste of 12 spices and herbs.' 
  },
  { 
    id: 's2', 
    name: 'Lay\'s India\'s Magic Masala', 
    hindiName: 'लेस मैजिक मसाला', 
    price: 18, 
    originalPrice: 20, 
    category: 'Snacks & Drinks', 
    unit: '50g', 
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=800', 
    description: 'Ridged potato chips with a magic blend of Indian spices.' 
  },
  { 
    id: 's3', 
    name: 'Coca-Cola Pet Bottle', 
    hindiName: 'कोका कोला', 
    price: 68, 
    originalPrice: 75, 
    category: 'Snacks & Drinks', 
    unit: '1.25 L', 
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800', 
    description: 'The world\'s favorite soft drink. Best served chilled for instant refreshment.' 
  },
  { 
    id: 's4', 
    name: 'Britannia Good Day Butter', 
    hindiName: 'गुड डे बिस्किट', 
    price: 28, 
    originalPrice: 35, 
    category: 'Snacks & Drinks', 
    unit: '200g', 
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800', 
    description: 'Rich and buttery cookies with a delightful crunch and a smile on every biscuit.' 
  },
  { 
    id: 's5', 
    name: 'Nescafe Classic Coffee', 
    hindiName: 'नेस्कैफे कॉफी', 
    price: 175, 
    originalPrice: 195, 
    category: 'Snacks & Drinks', 
    unit: '50g Jar', 
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800', 
    description: 'Original instant coffee with a rich and bold taste. Made from the finest coffee beans.' 
  },

  // --- ICE CREAM ---
  { 
    id: 'i1', 
    name: 'Amul Vanilla Magic', 
    hindiName: 'अमूल वनीला', 
    price: 195, 
    originalPrice: 230, 
    category: 'Ice Cream', 
    unit: '1 L Tub', 
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=800', 
    description: 'Pure creamy vanilla bliss. Made with real milk and cream by Amul.' 
  },
  { 
    id: 'i2', 
    name: 'Havmor Chocolate Brownie', 
    hindiName: 'हैवमोर चॉकलेट', 
    price: 260, 
    originalPrice: 295, 
    category: 'Ice Cream', 
    unit: '700 ml', 
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800', 
    description: 'Fudgy brownie bits mixed into rich dark chocolate ice cream.' 
  },
  { 
    id: 'i3', 
    name: 'Amul Epic Choco Almond', 
    hindiName: 'अमूल एपिक', 
    price: 45, 
    originalPrice: 50, 
    category: 'Ice Cream', 
    unit: '1 pc', 
    image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?auto=format&fit=crop&q=80&w=800', 
    description: 'Belgian chocolate coating with roasted almond bits over smooth vanilla ice cream.' 
  },

  // --- PERSONAL CARE ---
  { 
    id: 'p1', 
    name: 'Surf Excel Matic Liquid', 
    hindiName: 'सर्फ एक्सेल मैटिक', 
    price: 230, 
    originalPrice: 260, 
    category: 'Personal Care', 
    unit: '1 L Refill', 
    image: 'https://images.unsplash.com/photo-1584622781564-1d9876a13300?auto=format&fit=crop&q=80&w=800', 
    description: 'Advanced liquid detergent for front-load washing machines. Removes tough stains in the machine.' 
  },
  { 
    id: 'p2', 
    name: 'Dettol Handwash Liquid', 
    hindiName: 'डेटॉल हैंडवाश', 
    price: 99, 
    originalPrice: 115, 
    category: 'Personal Care', 
    unit: '750 ml Refill', 
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800', 
    description: 'Maximum germ protection with original Dettol fragrance. Keeps your hands clean and soft.' 
  },
  { 
    id: 'p3', 
    name: 'Dove Hair Fall Rescue Shampoo', 
    hindiName: 'डव शैम्पू', 
    price: 365, 
    originalPrice: 410, 
    category: 'Personal Care', 
    unit: '650 ml', 
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=800', 
    description: 'Deeply nourishes hair from roots to tips. Reduces hair fall by up to 98% with regular use.' 
  },
  { 
    id: 'p4', 
    name: 'Colgate MaxFresh Peppermint', 
    hindiName: 'कोलगेट मैक्सफ्रेश', 
    price: 115, 
    originalPrice: 135, 
    category: 'Personal Care', 
    unit: '150g', 
    image: 'https://images.unsplash.com/photo-1559591937-e68fb333594c?auto=format&fit=crop&q=80&w=800', 
    description: 'Peppermint flavored toothpaste with cooling crystals for intense freshness and white teeth.' 
  },

  // --- STATIONERY ---
  { 
    id: 'st1', 
    name: 'Classmate Notebook Regular', 
    hindiName: 'क्लासमेट नोटबुक', 
    price: 58, 
    originalPrice: 65, 
    category: 'Stationery', 
    unit: '172 Pages', 
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=800', 
    description: 'Environmentally friendly notebook with elemental chlorine-free paper for smooth writing.' 
  },
  { 
    id: 'st2', 
    name: 'Reynolds 045 Fine Ball Pen', 
    hindiName: 'रेनॉल्ड्स पेन', 
    price: 45, 
    originalPrice: 60, 
    category: 'Stationery', 
    unit: 'Pack of 5', 
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=800', 
    description: 'The most trusted ball pen in India. Fine tip for clear and precise writing.' 
  },
  { 
    id: 'st3', 
    name: 'Nataraj Pencil Box', 
    hindiName: 'नटराज पेंसिल', 
    price: 48, 
    originalPrice: 55, 
    category: 'Stationery', 
    unit: 'Pack of 10', 
    image: 'https://images.unsplash.com/photo-1516962080544-eac695c93791?auto=format&fit=crop&q=80&w=800', 
    description: 'Classic red and black 2B pencils. High-quality lead for dark writing and drawing.' 
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Aryan Malik',
    rating: 5,
    date: 'a year ago',
    text: 'This mart is a one-stop shop for everything you need! They have an impressive range of groceries, cold drinks, ice cream, snacks, soaps, shampoos, beauty products, and even stationery.',
    isLocalGuide: true
  },
  {
    id: 'r2',
    author: 'Ashar Ali',
    rating: 5,
    date: 'a year ago',
    text: 'They have a great service, they also provide a free home delivery with a minimum spend.'
  },
  {
    id: 'r3',
    author: 'Aamir Shamim',
    rating: 5,
    date: 'a year ago',
    text: 'Har tarah ke ice cream se lekar cold drinks, Biscuits, Rice, daal, sab kuch ek jagah par milega. Huge discount me milega.'
  },
  {
    id: 'r4',
    author: 'Imran Khan',
    rating: 5,
    date: 'a month ago',
    text: 'Best store in jugsalai'
  }
];
