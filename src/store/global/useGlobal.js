import { create } from "zustand";
import { io } from "socket.io-client";

export const useGlobal = create((set) => ({
  socket: io.connect("http://localhost:3000"),
  bgImgUrl: "/assets/gray.jpg",
  setBgImgUrl: (src) => set((state) => ({ ...state, bgImgUrl: src })),
}));
