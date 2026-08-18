import api from "./axios";
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
  const phoneComment = payload.phoneNumber
    ? `[Phone: ${payload.phoneNumber.trim()}]`
    : null;
  const commentText =
    [payload.comment?.trim(), phoneComment].filter(Boolean).join(" | ") ||
    "N/A";

  try {
    const body: Record<string, unknown> = {
      name: payload.name.trim(),
      email: payload.email.trim(),
      productId: payload.product,
      comment: commentText,
    };
    if (payload.phoneNumber) {
      body.phoneNumber = payload.phoneNumber.trim();
    }

    const { data } = await api.post<DemoRequestResponse>(
      ENDPOINTS.DEMO_REQUESTS,
      body,
    );

    return data;
  } catch (error) {
    console.error("Failed to submit demo request:", error);
    throw error;
  }
}
