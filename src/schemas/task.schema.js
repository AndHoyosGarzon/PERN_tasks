import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "The title is required",
      invalid_type_error: "Title is type text",
    })
    .min(1, { message: "The title must have more than 1 chararter" })
    .max(255),
  description: z
    .string({
      required_error: "Description required",
      invalid_type_error: "Description is type text",
    })
    .min(1, { message: "Description must have more than 1 chararter" })
    .max(255),
});

export const updateTaskSchema = z.object({
  title: z
    .string({
      required_error: "The title is required",
      invalid_type_error: "Title is type text",
    })
    .min(1, { message: "The title must have more than 1 chararter" })
    .max(255)
    .optional(),
  description: z
    .string({
      required_error: "Description required",
      invalid_type_error: "Description is type text",
    })
    .min(1)
    .max(255)
    .optional(),
});
