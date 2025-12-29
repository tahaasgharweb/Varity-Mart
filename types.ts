
export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  price: number;
  originalPrice?: number;
  category: Category;
  image: string;
  unit: string;
  description: string;
}

export type Category = 'All' | 'Groceries' | 'Snacks & Drinks' | 'Ice Cream' | 'Personal Care' | 'Stationery';

export interface CartItem extends Product {
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  isLocalGuide?: boolean;
}

export interface StoreInfo {
  name: string;
  hindiName: string;
  rating: number;
  reviewCount: number;
  address: string;
  phone: string;
  hours: string;
  instagram: string;
}
