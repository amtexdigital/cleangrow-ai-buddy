import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  business_name: z.string().trim().min(1).max(200),
  contact_name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(3).max(40),
  cities_serviced: z.string().trim().min(1).max(500),
  number_of_employees: z.string().trim().min(1).max(50),
  why_consider: z.string().trim().min(1).max(2000),
});

export const submitContactApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin
      .from("contact_submissions")
      .insert(data);

    if (error) {
      console.error("[contact_submissions] insert failed", error);
      throw new Error("Could not submit your application. Please try again.");
    }

    return { ok: true };
  });
