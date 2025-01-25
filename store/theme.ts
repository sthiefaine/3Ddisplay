import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type {} from '@redux-devtools/extension'

interface ThemeState {
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: 'light',
        setTheme: (theme) => set({ theme }),
      }),
      {
        name: '3D-display-theme',
      },
    ),
  ),
)