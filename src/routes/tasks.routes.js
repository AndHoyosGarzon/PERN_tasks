import Router from "express-promise-router";
import {
  createTask,
  deleteTask,
  getTaskId,
  getAllTasks,
  updateTaskId,
} from "../controllers/tasks.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

isAuth;

router.get("/tasks", isAuth, getAllTasks);

router.get("/tasks/:id", isAuth, getTaskId);

router.post("/tasks", isAuth, createTask);

router.put("/tasks/:id", isAuth, updateTaskId);

router.delete("/tasks/:id", isAuth, deleteTask);

export default router;
