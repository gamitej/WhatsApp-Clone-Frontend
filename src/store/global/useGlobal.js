import { create } from "zustand";

export const useGlobal = create((set) => ({
  bgImgUrl: "/assets/gray.jpg",
  setBgImgUrl: (src) => set((state) => ({ ...state, bgImgUrl: src })),
}));
