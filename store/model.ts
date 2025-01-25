import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"
import type {} from '@redux-devtools/extension'

interface ModelState {
  spin: boolean
  setSpin: (spin: boolean) => void
  model: string
  setModel: (model: string) => void
}

export const useModelStore = create<ModelState>()(
  devtools(
    persist(
      (set) => ({
        model: 'croissant',
        setModel: (model) => set({ model }),
        spin: true,
        setSpin: (spin) => set({ spin }),
      }),
      {
        name: '3D-display-model',
      },
    ),
  ),
)