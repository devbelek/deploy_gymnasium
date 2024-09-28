import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LanguageStore = {
  isKyrgyz: boolean;
  setIsKyrgyz: (isKyrgyz: boolean) => void;
  t: (ky: string, ru: string) => string;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      isKyrgyz: true,
      setIsKyrgyz: (isKyrgyz: boolean) => set({ isKyrgyz }),
      t: (ky: string, ru: string) => (get().isKyrgyz ? ky : ru),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);