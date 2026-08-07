export interface Product {
  id: string | number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  bgColor?: string;
  category?: string;
  [key: string]: unknown;
}

export interface frontProduct {
  fullName: string;
  comment: number | string;
  email: string;
  productId: string;
}
