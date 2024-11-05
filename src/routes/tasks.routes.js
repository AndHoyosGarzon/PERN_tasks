import Router from "express-promise-router";
import {
  createTask,
  deleteTask,
  getTaskId,
  getAllTasks,
  updateTaskId,
} from "../controllers/tasks.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const router = Router();

//isAuth;

router.get("/tasks", isAuth, getAllTasks);

router.get("/tasks/:id", isAuth, getTaskId);

router.post("/tasks", isAuth, validateSchema(createTaskSchema), createTask);

router.put(
  "/tasks/:id",
  isAuth,
  validateSchema(updateTaskSchema),
  updateTaskId
);

router.delete("/tasks/:id", isAuth, deleteTask);

export default router;
