import { z } from "zod"

export const OrganizationSchema = z.object({
    name: z.string(),
    organizationType: z.number(),
    description: z.string()
})