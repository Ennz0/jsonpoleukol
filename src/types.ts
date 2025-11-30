export interface Supplier {
  id: number;
  name: string;
}

export interface Rating {
  name: string;
  score: number;
  comment: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stockCount: number;
  ratings: Rating[];
  supplier: Supplier;
  description: string;
}