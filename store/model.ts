import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type {} from '@redux-devtools/extension'
import { ModelsData } from "@/data/models"

interface ModelState {
  modelsList: ModelsData[]
  setModelsList: (modelsList: ModelsData[]) => void
  spin: boolean
  setSpin: (spin: boolean) => void
  modelSelected: ModelsData
  setModelSelected: (modelSelected: ModelsData) => void
}

export const useModelStore = create<ModelState>()(
  devtools(
    persist(
      (set) => ({
        modelSelected:  { name: "", url: "" },
        setModelSelected: (modelSelected) => set({ modelSelected }),
        modelsList: [],
        setModelsList: (modelsList) => set({ modelsList }),
        spin: true,
        setSpin: (spin) => set({ spin }),
      }),
      {
        name: '3D-display-model',
      },
    ),
  ),
)