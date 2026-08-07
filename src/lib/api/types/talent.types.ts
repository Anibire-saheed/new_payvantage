export interface Role {
  id: string;
  title: string;
  departmentId: string;
}

export interface Department {
  id: string;
  name: string;
  roles: Role[];
}

export interface SubmitPayload {
  fullName: string;
  phone: string;
  email: string;
  departmentId: string;
  roleId: string;
  cv: File | null;
}

export interface SubmitResponse {
  statusCode: number;
  message: string;
  data: unknown;
}
