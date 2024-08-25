import { z } from 'zod'

export const RegSchema = z
  .object({
    username: z
      .string()
      .min(2, 'Username must be at least 2 characters long')
      .trim()
      .max(20, 'Username must be less than 20 characters long'),
    email: z
      .string()
      .email('Invalid email address')
      .min(1, 'Email is required'),
    password: z
      .string()
      .trim()
      .min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters long'),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
  })

export type RegisterSchema = z.infer<typeof RegSchema>
