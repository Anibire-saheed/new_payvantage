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
