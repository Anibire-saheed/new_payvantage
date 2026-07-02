// ─── CAREERS TYPES ─────────────────────────────────────
export interface ApiJob {
  id?: string | number;
  title: string;
  workMode?: string;
  type?: string;
  employmentType?: string;
  overview?: string;
  description?: string;
  entity?: {
    name?: string;
  };
}

export interface Job {
  id: string | number;
  title: string;
  department: string;
  type: string;
  description: string;
}

export interface ApplyPayload {
  fullName: string;
  phone: string;
  email: string;
  cv: File | null;
}

// ─── TALENT POOL TYPES ─────────────────────────────────
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
