import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type {} from '@redux-devtools/extension'
import { ModelsData, modelsDataList } from "@/data/models"

interface ModelState {
  modelsList: ModelsData[]
  setModelsList: (modelsList: ModelsData[]) => void
  spin: boolean
  setSpin: (spin: boolean) => void
  modelSelected: string
  setModelSelected: (modelSelected: string) => void
}

export const useModelStore = create<ModelState>()(
  devtools(
    persist(
      (set) => ({
        modelsList: modelsDataList,
        setModelsList: (modelsList) => set({ modelsList }),
        modelSelected: 'croissant',
        setModelSelected: (modelSelected) => set({ modelSelected }),
        spin: true,
        setSpin: (spin) => set({ spin }),
      }),
      {
        name: '3D-display-model',
      },
    ),
  ),
)