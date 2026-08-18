export interface DemoRequestPayload {
  name: string;
  email: string;
  phoneNumber?: string;
  product: string;
  comment?: string;
}

export interface DemoRequestResponse {
  statusCode?: number;
  message?: string;
  data?: unknown;
}
