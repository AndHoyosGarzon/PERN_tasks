import { z } from "zod";

export const signupSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name is type text",
    })
    .min(1)
    .max(255),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is type text",
    })
    .email({ message: "Must be of type email" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password is type text",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(255),
});

export const signinSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email is type text",
    })
    .email({ message: "Must be of type email" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password is type text",
    })
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .max(255),
});
