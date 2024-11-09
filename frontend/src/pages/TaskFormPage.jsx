import { Card, Input, Textarea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useTask } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  const { taskError, createTask, loadTasks, updateTask } = useTask();

  const onSubmit = handleSubmit(async (data) => {
    let task;

    if (!params.id) {
      task = await createTask(data);
    } else {
      task = await updateTask(params.id, data);
    }

    if (task) {
      navigate("/tasks");
    }
  });

  useEffect(() => {
    if (params.id) {
      loadTasks(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
      });
    }
  }, []);

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {taskError &&
          taskError.map((err, idx) => (
            <p key={idx} className="text-red-500 text-center font-bold">
              {err.message}
            </p>
          ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Edit Task" : "Create Task"}
        </h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title">Title</Label>
          <Input
            {...register("title")}
            type="text"
            placeholder="Title"
            autoFocus
          />
          {errors.title && <p className="text-red-900">Title is required</p>}

          <Label htmlFor="description">Description</Label>
          <Textarea
            {...register("description")}
            rows={3}
            placeholder="Description"
          ></Textarea>
          <Button className={params.id && "bg-green-500"}>
            {params.id ? "Update task" : "Create Task"}
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
