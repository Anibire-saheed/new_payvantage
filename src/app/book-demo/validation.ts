import * as z from "zod";

export const bookDemoFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Full name is required." })
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Business email is required." })
    .email({
      message: "Please enter a valid email address (e.g. name@company.com).",
    }),
  product: z
    .string()
    .trim()
    .min(1, { message: "Please select a product." }),
  comment: z.string().optional(),
});

export type BookDemoFormData = z.infer<typeof bookDemoFormSchema>;

export function validateBookDemoForm(
  data: BookDemoFormData
): Partial<Record<keyof BookDemoFormData, string>> {
  const result = bookDemoFormSchema.safeParse(data);
  if (result.success) {
    return {};
  }

  const errors: Partial<Record<keyof BookDemoFormData, string>> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0] as keyof BookDemoFormData;
    if (field && !errors[field]) {
      errors[field] = issue.message;
    }
  }
  return errors;
}
