import client from "./axios";

export const getAllTasksRequest = () => client.get("/tasks");

export const createTaskRequest = (task) => client.post("/tasks", task);

export const deleteTaskRequest = (taskId) => client.delete(`/tasks/${taskId}`);

export const getTaskRequest = (taskId) => client.get(`/tasks/${taskId}`);

export const updateTaskRequest = (taskId, task) =>
  client.put(`/tasks/${taskId}`, task);
