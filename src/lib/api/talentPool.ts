import api from "./axios";
import type { Department, SubmitPayload, SubmitResponse } from "./types";

const BASE_URL = "talent-pool";

export async function allDepartments(): Promise<Department[]> {
  const { data } = await api.get<{
    statusCode: number;
    message: string;
    data: Department[];
  }>(`${BASE_URL}/departments`);

  return data.data;
}

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

  const { data } = await api.post<SubmitResponse>(BASE_URL, form);

  return data;
}
