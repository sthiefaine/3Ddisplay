"use client";
import { useModelStore } from "@/store/model";
import { useShallow } from "zustand/shallow";

export const Options = () => {
  const { spin, setSpin, modelsList, modelSelected, setModelSelected } =
    useModelStore(
      useShallow((state) => ({
        spin: state.spin,
        setSpin: state.setSpin,
        modelsList: state.modelsList,
        modelSelected: state.modelSelected,
        setModelSelected: state.setModelSelected,
      }))
    );

  const handleClick = (value: "next" | "prev") => {
    const currentmodelIndex = modelsList.findIndex(
      (model) => model.name.toLowerCase() === modelSelected.name.toLowerCase()
    );
    if (value === "next") {
      if (currentmodelIndex === modelsList.length - 1) {
        setModelSelected(modelsList[0]);
      } else {
        setModelSelected(modelsList[currentmodelIndex + 1]);
      }
    }
    if (value === "prev") {
      if (currentmodelIndex === 0) {
        setModelSelected(modelsList[modelsList.length - 1]);
      } else {
        setModelSelected(modelsList[currentmodelIndex - 1]);
      }
    }
  };
  return (
    <div>
      <p>
        Model Selected:{" "}
        {modelSelected?.name?.charAt(0).toUpperCase() +
          modelSelected?.name?.slice(1)}
      </p>
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
