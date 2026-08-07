export interface DemoRequestPayload {
  name: string;
  email: string;
  product: string;
  comment?: string;
}

export interface DemoRequestResponse {
  statusCode?: number;
  message?: string;
  data?: unknown;
}
