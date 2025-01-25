"use client";
import { useModelStore } from "@/store/model";

export const Options = () => {
  const {
    spin,
    setSpin,
    modelsList,
    modelSelected,
    setModelSelected,
  } = useModelStore();

  const handleClick = (value: "next" | "prev") => {
    if (value === "next") {
      const currentmodelIndex = modelsList.findIndex(
        (model) => model.name === modelSelected
      );
      if (currentmodelIndex === modelsList.length - 1) {
        setModelSelected(modelsList[0].name);
        return;
      } else {
        setModelSelected(modelsList[currentmodelIndex + 1].name);
        return;
      }
    }
    if (value === "prev") {
      const currentmodelIndex = modelsList.findIndex(
        (model) => model.name === modelSelected
      );

      if (currentmodelIndex === 0) {
        setModelSelected(modelsList[modelsList.length - 1].name);
        return;
      } else {
        setModelSelected(modelsList[currentmodelIndex - 1].name);
        return;
      }
    }
  };
  return (
    <div>
      <p>Model Selected: {modelSelected}</p>
      <div className="flex justify-center gap-2 p-2">
        <button
          className="bg-current-inv text-current-inv font-bold py-2 px-4 rounded"
          onClick={() => handleClick("prev")}
        >
          Prev Model
        </button>
        <button
          className="bg-current-inv text-current-inv font-bold py-2 px-4 rounded"
          onClick={() => handleClick("next")}
        >
          Next Model
        </button>
      </div>

      <button
        className="bg-current-inv text-current-inv font-bold py-2 px-4 rounded"
        onClick={() => setSpin(!spin)}
      >
        {spin ? "Stop" : "Start"} Spin
      </button>
    </div>
  );
};
