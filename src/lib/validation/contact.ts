import * as z from "zod";

export const contactFieldsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Full name is required." })
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().trim().min(1, { message: "Email is required." }).email({
    message: "Please enter a valid email address (e.g. name@example.com).",
  }),
  phoneNumber: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required." })
    .regex(/^[+0-9\s\-()]{7,20}$/, {
      message: "Please enter a valid phone number.",
    }),
  comment: z.string().optional(),
});


export function validateFields<T>(schema: z.ZodType<T>, data: T): Partial<Record<keyof T, string>> {
  const result = schema.safeParse(data);
  if (result.success) return {};
  const errors: Partial<Record<keyof T, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof T;
    if (field && !errors[field]) errors[field] = issue.message;
  }
  return errors;
}
