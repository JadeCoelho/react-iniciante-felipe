import { useState } from "react";
import Input from "./Input";

function AddTask({ onTaskAdd }) {
  const [title, setTitle] = useState("");
  const [obs, setObs] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      {/* <input
        type="text"
        placeholder="Nova tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      /> */}
      <Input
        type="text"
        placeholder="Nova tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Observação"
        value={obs}
        onChange={(event) => setObs(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          if (!title.trim()) {
            return alert("Preencha o campo corretamente");
          }
          onTaskAdd(title);
          setTitle("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
