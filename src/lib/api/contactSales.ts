import api from "./axios";
import type {
  ContactSalesPayload,
  ContactSalesResponse,
} from "./types/contactSales.types";

const ENDPOINTS = {
  CONTACT_SALES: "payvantage/contact-sales",
} as const;

/**
 * Submit a contact sales inquiry to /api/v1/payvantage/contact-sales
 */
export async function submitContactSales(
  payload: ContactSalesPayload,
): Promise<ContactSalesResponse> {
  try {
    const { data } = await api.post<ContactSalesResponse>(
      ENDPOINTS.CONTACT_SALES,
      {
        name: payload.name.trim(),
        email: payload.email.trim(),
        phoneNumber: payload.phoneNumber.trim(),
        comment: payload.comment?.trim() || "N/A",
      },
    );

    return data;
  } catch (error) {
    console.error("Failed to submit contact sales request:", error);
    throw error;
  }
}
