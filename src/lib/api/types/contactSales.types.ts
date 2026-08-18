export interface ContactSalesPayload {
  name: string;
  email: string;
  phoneNumber: string;
  comment?: string;
}

export interface ContactSalesResponse {
  statusCode?: number;
  message?: string;
  data?: unknown;
}
