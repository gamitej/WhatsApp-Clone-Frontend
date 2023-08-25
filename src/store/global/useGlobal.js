import { create } from "zustand";
import { io } from "socket.io-client";

export const useGlobal = create((set) => ({
  socket: io.connect(import.meta.env.VITE_SOCKET_URL),
  // BACKGROUND IMG URL
  bgImgUrl: "/assets/gray.jpg",
  setBgImgUrl: (src) => set((state) => ({ ...state, bgImgUrl: src })),
  // PROFILE IMG URL
  profileImageUrl: "",
  setProfileImageUrl: (src) =>
    set((state) => ({ ...state, profileImageUrl: src })),
}));
