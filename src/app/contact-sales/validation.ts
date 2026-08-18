import * as z from "zod";

export const contactSalesFormSchema = z.object({
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

export type ContactSalesFormData = z.infer<typeof contactSalesFormSchema>;

export function validateContactSalesForm(
  data: ContactSalesFormData,
): Partial<Record<keyof ContactSalesFormData, string>> {
  const result = contactSalesFormSchema.safeParse(data);
  if (result.success) {
    return {};
  }

  const errors: Partial<Record<keyof ContactSalesFormData, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof ContactSalesFormData;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return errors;
}
