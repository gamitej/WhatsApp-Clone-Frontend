import { LoginApi, SignUpApi } from "@/services/ApiServices";
import { toast } from "react-hot-toast";
import { create } from "zustand";

export const useAuth = create((set) => ({
  isLoggedIn: false,
  userInfo: {},
  isLoading: false,
  // ============ LOGIN ============
  handleLogin: async (data) => {
    set((state) => ({ ...state, isLoading: true }));
    const { message, error, token } = await LoginApi(data);
    if (!error) {
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userInfo: { ...data, token },
      }));
    } else {
      toast.error(message, { duration: 1200 });
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
      }));
    }
  },
  // ============ SIGN-UP ============
  handleSignUp: async (data) => {
    set((state) => ({ ...state, isLoading: true }));
    const { message, error, token } = await SignUpApi(data);
    if (!error) {
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userInfo: { ...data, token },
      }));
    } else {
      toast.error(message, { duration: 1200 });
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: false,
      }));
    }
  },
}));
