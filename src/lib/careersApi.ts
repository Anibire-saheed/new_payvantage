import axios from "axios";

const BASE_URL = "https://blog-api.msgly.ng/api/v1/careers";

export interface ApiJob {
  id?: string | number;
  title: string;
  department?: string;
  workMode?: string;
  type?: string;
  employment_type?: string;
  overview?: string;
  description?: string;
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

export async function fetchJobs(): Promise<Job[]> {
  const { data } = await axios.get<{ data: ApiJob[] }>(BASE_URL);
  const jobs = data.data;

  if (!Array.isArray(jobs)) return [];

  return jobs.map((job) => ({
    id: job.id ?? "",
    title: job.title,
    department: job.department ?? "",
    type: job.workMode ?? job.type ?? job.employment_type ?? "Full-time",
    description: job.overview ?? "",
  }));
}

export async function fetchJobById(jobId: string | number): Promise<Job> {
  const { data } = await axios.get<{ data: ApiJob }>(`${BASE_URL}/${jobId}`);
  const job = data.data;
  return {
    id: job.id ?? jobId,
    title: job.title,
    department: job.department ?? "",
    type: job.workMode ?? job.type ?? job.employment_type ?? "Full-time",
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

  const { data } = await axios.post(`${BASE_URL}/${jobId}/applications`, form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
}
