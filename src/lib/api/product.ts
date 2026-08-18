import api from "./axios";
import type { Product } from "./types/product.types";

const ENDPOINTS = {
  PRODUCTS: "payvantage/products",
  PRODUCT_DETAIL: (id: string | number) => `payvantage/products/${id}`,
} as const;

/**
 * Fetch all products from Products API endpoint (/api/v1/payvantage/products)
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await api.get<{
      statusCode?: number;
      message?: string;
      data?: Product[] | { data?: Product[]; items?: Product[]; products?: Product[] };
      items?: Product[];
      products?: Product[];
    }>(ENDPOINTS.PRODUCTS);

    const resData = response.data;

    if (Array.isArray(resData)) {
      return resData;
    }

    if (Array.isArray(resData?.data)) {
      return resData.data;
    }

    if (typeof resData?.data === "object" && resData?.data !== null) {
      const nested = resData.data as { data?: Product[]; items?: Product[]; products?: Product[] };
      if (Array.isArray(nested?.data)) return nested.data;
      if (Array.isArray(nested?.items)) return nested.items;
      if (Array.isArray(nested?.products)) return nested.products;
    }

    if (Array.isArray(resData?.items)) {
      return resData.items;
    }

    if (Array.isArray(resData?.products)) {
      return resData.products;
    }

    return [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

/**
 * Alias for fetchProducts
 */
export const allProducts = fetchProducts;

/**
 * Fetch a single product by ID from Payvantage API endpoint (/api/v1/payvantage/products/:id)
 */
export async function fetchProductById(
  id: string | number,
): Promise<Product | null> {
  try {
    const { data } = await api.get<{
      statusCode?: number;
      message?: string;
      data: Product;
    }>(ENDPOINTS.PRODUCT_DETAIL(id));

    return data?.data || (data as unknown as Product) || null;
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error);
    return null;
  }
}
