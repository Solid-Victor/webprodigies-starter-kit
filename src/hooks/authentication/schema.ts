import { z } from "zod"

export const signInSchema = z.object({
    email: z.string().email("You must give a valid email"),
    password: z
        .string()
        .min(8, {message: "Password must be at least 8 characters long"})
        .max(60, {message: "Password must be less than 60 characters"})
        .regex(/^[a-zA-Z0-9_.-]*$/, {
            message: "password should contain only letters and numbers"
        })
})

