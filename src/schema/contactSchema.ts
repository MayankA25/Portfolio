import * as z from "zod";

export const contactSchema = z.object({
  firstName: z.string().min(3, "Should contain at least 3 characters"),
  lastName: z.string().min(3, "Should contain at least 3 characters"),
  email: z.email("Provide a valid email"),
  message: z.string().min(3, "Message should contain at least 3 characters"),
});
