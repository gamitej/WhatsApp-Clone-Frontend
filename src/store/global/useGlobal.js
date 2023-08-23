import { create } from "zustand";
import { io } from "socket.io-client";

export const useGlobal = create((set) => ({
  socket: io.connect(import.meta.env.VITE_SOCKET_URL),
  bgImgUrl: "/assets/gray.jpg",
  setBgImgUrl: (src) => set((state) => ({ ...state, bgImgUrl: src })),
}));
