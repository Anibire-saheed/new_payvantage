import * as z from "zod";

export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = ["application/pdf"];

export const jobApplicationFormSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .trim()
    .min(1, { message: "Email address is required" }),
  fullName: z.string().trim().min(1, { message: "Full name is required" }),
  phone: z.string().trim().min(1, { message: "Phone number is required" }),
  cv: z
    .custom<File>((file) => file instanceof File, {
      message: "Please upload your CV",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "File is too large! Max size is 5MB.",
    })
    .refine((file) => ACCEPTED_TYPES.includes(file.type), {
      message: "Only PDF files are accepted",
    }),
});

export type JobApplicationFormData = z.infer<typeof jobApplicationFormSchema>;
