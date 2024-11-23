import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskDetails() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex relative justify-center mb-6">
          <button
            className="absolute left-0 bottom-0 top-0 text-slate-100"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          {/* <h1 className="text-3xl text-slate-100 font-bold text-center">
              Detalhes da Tarefa
            </h1> */}
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-400 rounded-md p-4">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
