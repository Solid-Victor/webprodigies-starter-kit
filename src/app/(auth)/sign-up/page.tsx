import { z } from "zod";

export const signUpSchema = z.object({
    firstName: z
    .string()
    .min(3,{message: "first name must be atleast 3 characters"}),
    lastName: z
    .string()
    .min(3,{message: "last name must be atleast 3 characters"}),
    email: z
    .string()
    .email({message: "invalid email address"}),
    password: z
    .string()
    .min(8,{message: "password must be atleast 8 characters"})
    .max(64,{message: "password must be less than 64 characters"})
    .refine((value) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumbers = /\d/.test(value);
        const hasSpecialChar = /[!@#$%^&*]/.test(value);
        return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
    })
})


