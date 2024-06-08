import { z } from "zod"

export const loginSchema = z.object({
    email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters."
    }),
})

export const signupSchema = z.object({
    email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters."
    }),
})