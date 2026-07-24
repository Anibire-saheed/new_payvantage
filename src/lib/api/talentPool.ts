import api from "./axios";
import type { Department, SubmitPayload, SubmitResponse } from "./types";

const ENDPOINTS = {
  BASE: "talent-pool",
  DEPARTMENTS: "talent-pool/departments",
} as const;

/**
 * Fetch all departments for the talent pool
 */
export async function allDepartments(): Promise<Department[]> {
  try {
    const { data } = await api.get<{
      statusCode: number;
      message: string;
      data: Department[];
    }>(ENDPOINTS.DEPARTMENTS);

    return data.data;
  } catch (error) {
    console.error("Failed to fetch departments:", error);
    return [];
  }
}

/**
 * Submit a talent pool application
 */
export async function submitApplication(
  payload: SubmitPayload,
): Promise<SubmitResponse> {
  try {
    const form = new FormData();

    // Append form fields explicitly
    form.append("fullName", payload.fullName);
    form.append("phone", payload.phone);
    form.append("email", payload.email);
    form.append("departmentId", payload.departmentId);
    form.append("roleId", payload.roleId);
    if (payload.cv) {
      form.append("resume", payload.cv);
    }

    const { data } = await api.post<SubmitResponse>(ENDPOINTS.BASE, form, {
      headers: {
        // Let FormData set the Content-Type header with boundary
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to submit talent pool application:", error);
    // Re-throw error to be handled by mutation
    throw error;
  }
}
