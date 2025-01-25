"use client";
import { ModelsData } from "@/data/models";
import { useModelStore } from "@/store/model";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export type AppProps = {
  data: ModelsData[];
  children: React.ReactNode;
};

export const App = (props: AppProps) => {
  const { setModelSelected, setModelsList } = useModelStore(
    useShallow((state) => ({
      setModelSelected: state.setModelSelected,
      setModelsList: state.setModelsList,
    }))
  );

  useEffect(() => {
    if (!props.data.length) {
      return;
    }
    setModelSelected(props.data[0]);
    setModelsList(props.data);
  }, [props.data]);

  return <>{props.children}</>;
};
