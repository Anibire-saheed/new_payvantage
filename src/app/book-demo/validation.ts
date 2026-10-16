import * as z from "zod";
import { contactFieldsSchema, validateFields } from "@/lib/validation/contact";

export const bookDemoFormSchema = contactFieldsSchema.extend({ product: z.string().trim().min(1, { message: "Please select a product." }) });
export type BookDemoFormData = z.infer<typeof bookDemoFormSchema>;

export function validateBookDemoForm(data: BookDemoFormData): Partial<Record<keyof BookDemoFormData, string>> {
  return validateFields(bookDemoFormSchema, data);
}
