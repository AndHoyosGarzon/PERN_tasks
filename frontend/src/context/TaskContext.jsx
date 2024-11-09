import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getAllTasksRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/task.api";

const TaskContext = createContext();

//create hook
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTask debe estar dentro de un proveedor TaskProvider");
  }
  return context;
};

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [taskError, setTaskError] = useState(null);

  //create Task
  const createTask = async (data) => {
    try {
      const res = await createTaskRequest(data);
      setTask([...task, res.data]);
      return res.data;
    } catch (error) {
      if (error) {
        setTaskError([error.response.data]);
      }
    }
  };

  //Load task by Id
  const loadTasks = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //Loading Tasks
  const loadTask = async () => {
    const response = await getAllTasksRequest();
    setTask(response.data);
  };

  //clean context task
  const deleteTask = async (id) => {
    const response = await deleteTaskRequest(id);
    if (response.status === 204) {
      return setTask(task.filter((task) => task.id !== id));
    }
  };

  //update Task
  const updateTask = async (id, task) => {
    try {
      const response = await updateTaskRequest(id, task);
      return response.data;
    } catch (error) {
      if (error.response) {
        setTaskError([error.response.data.message]);
      }
    }
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        taskError,
        loadTasks,
        createTask,
        loadTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
