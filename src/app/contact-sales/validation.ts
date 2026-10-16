import * as z from "zod";
import { contactFieldsSchema, validateFields } from "@/lib/validation/contact";

export const contactSalesFormSchema = contactFieldsSchema;
export type ContactSalesFormData = z.infer<typeof contactSalesFormSchema>;

export function validateContactSalesForm(data: ContactSalesFormData): Partial<Record<keyof ContactSalesFormData, string>> {
  return validateFields(contactSalesFormSchema, data);
}
