import { useEffect } from "react";
import TaskCard from "../components/tasks/TaskCard";
import { useTask } from "../context/TaskContext";

function TasksPage() {
  const { task, loadTask } = useTask();

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 my-5">
      {task.length > 0 ? (
        task.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <div className="flex justify-center items-center h-[calc(100vh-10rem)] ">
          <h1 className="font-bold text-4xl text-blue-500 mx-5">
            Tasks Not Found...!
          </h1>
        </div>
      )}
    </div>
  );
}

export default TasksPage;
