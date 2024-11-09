import { Button, Card } from "../ui";
import { useTask } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimple } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";

function TaskCard({ task }) {
  const { deleteTask } = useTask();
  const navigate = useNavigate();

  return (
    <Card className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-semibold mb-2">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="flex justify-end gap-3 mt-5">
        <Button
          onClick={() => {
            navigate(`/task/${task.id}/edit`);
          }}
        >
          <FaRegEdit />
        </Button>
        <Button
          onClick={async () => {
            if (window.confirm("¿Are you sure you want to delete the task?")) {
              deleteTask(task.id);
            }
          }}
          className="bg-red-700  hover:bg-red-400"
        >
          <PiTrashSimple />
        </Button>
      </div>
    </Card>
  );
}

export default TaskCard;
