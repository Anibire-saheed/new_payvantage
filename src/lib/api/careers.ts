import api from "./axios";
import type { ApiJob, Job, ApplyPayload } from "./types";

const ENDPOINTS = {
  BASE: "careers",
  JOB_DETAIL: (jobId: string | number) => `careers/${jobId}`,
  APPLY: (jobId: string | number) => `careers/${jobId}/applications`,
} as const;

/**
 * Transform an API job response to our internal Job type
 */
function transformApiJob(apiJob: ApiJob): Job {
  return {
    id: apiJob.id ?? "",
    title: apiJob.title,
    department: apiJob.entity?.name ?? "",
    type:
      apiJob.workMode ?? apiJob.type ?? apiJob.employmentType ?? "Full-time",
    description: apiJob.overview ?? " locoeje",
  };
}

/**
 * Fetch all jobs
 */
export async function fetchJobs(): Promise<Job[]> {
  try {
    const { data } = await api.get<{ data: ApiJob[] }>(ENDPOINTS.BASE);
    const jobs = data.data;

    if (!Array.isArray(jobs)) return [];

    return jobs.map(transformApiJob);
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
    return [];
  }
}

/**
 * Fetch a single job by ID
 */
export async function fetchJobById(jobId: string | number): Promise<Job> {
  try {
    const { data } = await api.get<{ data: ApiJob }>(
      ENDPOINTS.JOB_DETAIL(jobId),
    );
    return transformApiJob(data.data);
  } catch (error) {
    console.error("Failed to fetch job by ID:", error);
    // Return a fallback job if API fails
    return {
      id: jobId,
      title: "Job Not Found",
      department: "",
      type: "Full-time",
      description: "Unable to load job details. Please try again later.",
    };
  }
}

/**
 * Apply for a job
 */
export async function applyForJob(
  jobId: string | number,
  payload: ApplyPayload,
): Promise<unknown> {
  try {
    const form = new FormData();

    // Append form data fields - explicitly setting each field for clarity
    form.append("fullName", payload.fullName);
    form.append("phone", payload.phone);
    form.append("email", payload.email);
    if (payload.cv) {
      form.append("resume", payload.cv);
    }

    // Don't set Content-Type header for FormData - axios handles this automatically
    const { data } = await api.post(ENDPOINTS.APPLY(jobId), form, {
      headers: {
        // Remove any default Content-Type to let FormData set it with boundary
      },
    });

    return data;
  } catch (error) {
    console.error("Failed to apply for job:", error);
    // Re-throw the error so the mutation can handle it with toast
    throw error;
  }
}
