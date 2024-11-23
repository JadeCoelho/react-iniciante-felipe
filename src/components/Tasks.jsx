import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTaskDelete }) {
  // console.log(props)
  const navigate = useNavigate();

  function onDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("obs", task.obs);
    navigate(`/taskdetails?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-slate-400 w-full text-white text-left p-2 rounded-md" ${
              task.isCompleted ? "line-through" : ""
            }`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>
          {/* <button
            className="bg-slate-400 text-white p-2 rounded-md"
            onClick={() => onDetailsClick(task)}
          >
            <ChevronRightIcon  onClick={() => onDetailsClick(task)}/>
          </button> */}
          {/* <button
            className="bg-slate-400 text-white p-2 rounded-md"
            onClick={() => onTaskDelete(task.id)}
          >
            <TrashIcon />
          </button> */}
          <Button onClick={() => onDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>
          <Button onClick={() => onTaskDelete(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
