"use client";
import { useModelStore } from "@/store/model";

export const Options = () => {
  const { spin, setSpin } = useModelStore();
  return (
    <div>
      <button
        className="bg-current-inv text-current-inv font-bold py-2 px-4 rounded"
        onClick={() => setSpin(!spin)}
      >
        {spin ? "Stop" : "Start"} Spin
      </button>
    </div>
  );
};
