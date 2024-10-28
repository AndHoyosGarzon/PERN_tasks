import { Router } from "express";
import { createTask, deleteTask, getTaskId, getAllTasks, updateTaskId } from "../controllers/tasks.controller.js";

const router = Router()

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTaskId)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTaskId)

router.delete('/tasks/:id', deleteTask)





export default router