import api from "./axios";
import { fetchProducts } from "./product";
import type {
  DemoRequestPayload,
  DemoRequestResponse,
} from "./types/demoRequest.types";

const ENDPOINTS = {
  DEMO_REQUESTS: "payvantage/demo-requests",
} as const;

/**
 * Submit a demo request to /api/v1/payvantage/demo-requests
 */
export async function submitDemoRequest(
  payload: DemoRequestPayload,
): Promise<DemoRequestResponse> {
  try {
    let productId = payload.product;

    // If payload.product is a title/name string rather than an ID, try to resolve to actual product ID
    if (
      productId &&
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        productId,
      )
    ) {
      const products = await fetchProducts();
      const matched = products.find((p) => {
        const nameStr = typeof p.name === "string" ? p.name : "";
        const titleStr = typeof p.title === "string" ? p.title : "";
        const idStr = String(p.id);
        return (
          idStr.toLowerCase() === productId.toLowerCase() ||
          (nameStr && nameStr.toLowerCase() === productId.toLowerCase()) ||
          (titleStr && titleStr.toLowerCase() === productId.toLowerCase())
        );
      });
      if (matched && matched.id) {
        productId = String(matched.id);
      }
    }

    const postPayload: Record<string, unknown> = {
      name: payload.name,
      email: payload.email,
      productId: productId,
    };

    if (payload.comment) {
      postPayload.comment = payload.comment;
    }

    const { data } = await api.post<DemoRequestResponse>(
      ENDPOINTS.DEMO_REQUESTS,
      postPayload,
    );

    return data;
  } catch (error) {
    console.error("Failed to submit demo request:", error);
    throw error;
  }
}
