import api from "./axios";
import type { ApiJob, Job, ApplyPayload } from "./types";

const BASE_URL = "careers";

export async function fetchJobs(): Promise<Job[]> {
  const { data } = await api.get<{ data: ApiJob[] }>(BASE_URL);
  const jobs = data.data;

  if (!Array.isArray(jobs)) return [];

  return jobs.map((job) => ({
    id: job.id ?? "",
    title: job.title,
    department: job.entity?.name ?? "",
    type: job.workMode ?? job.type ?? job.employmentType ?? "Full-time",
    description: job.overview ?? "",
  }));
}

export async function fetchJobById(jobId: string | number): Promise<Job> {
  const { data } = await api.get<{ data: ApiJob }>(`${BASE_URL}/${jobId}`);
  const job = data.data;
  return {
    id: job.id ?? jobId,
    title: job.title,
    department: job.entity?.name ?? "",
    type: job.workMode ?? job.type ?? job.employmentType ?? "Full-time",
    description: job.overview ?? "",
  };
}

export async function applyForJob(
  jobId: string | number,
  payload: ApplyPayload,
): Promise<unknown> {
  const form = new FormData();
  form.append("fullName", payload.fullName);
  form.append("phone", payload.phone);
  form.append("email", payload.email);
  if (payload.cv) form.append("resume", payload.cv);

  const { data } = await api.post(`${BASE_URL}/${jobId}/applications`, form);
  return data;
}
