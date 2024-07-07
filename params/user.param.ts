import { z } from 'zod'

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6, "Password should be at least 6 characters long");
const nameSchema = z.string().min(1, "Name is required");

export const SignupSchema = z.object({
    email: emailSchema,
    name: nameSchema,
    password: passwordSchema
});

export const LoginSchema = z.object({
    email: emailSchema,
    password: passwordSchema
});
