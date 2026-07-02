import axios from "axios";

const BASE_URL = "https://blog-api.msgly.ng/api/v1/talent-pool";

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

// ─── GET all departments and roles ───────────────

export async function allDepartments(): Promise<Department[]> {
  const { data } = await axios.get<{
    statusCode: number;
    message: string;
    data: Department[];
  }>(`${BASE_URL}/departments`);

  return data.data;
}

// ─── POST submit application ──────────────────────

export async function submitApplication(
  payload: SubmitPayload,
): Promise<SubmitResponse> {
  const form = new FormData();
  form.append("fullName", payload.fullName);
  form.append("phone", payload.phone);
  form.append("email", payload.email);
  form.append("departmentId", payload.departmentId);
  form.append("roleId", payload.roleId);
  if (payload.cv) form.append("resume", payload.cv);

  const { data } = await axios.post<SubmitResponse>(BASE_URL, form, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
}
