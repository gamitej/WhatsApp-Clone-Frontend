import { create } from "zustand";
// services
import { LoginApi, SignUpApi } from "@/services/ApiServices";
// libs
import { toast } from "react-hot-toast";
// utils
import {
  getSession,
  getSessionInfoBool,
  removeSession,
  setSession,
} from "@/utils/session";

const USER_SESSION = "USER";

export const useAuth = create((set) => ({
  isLoggedIn: getSessionInfoBool(USER_SESSION) || false,
  userInfo: getSession(USER_SESSION) || {},
  isLoading: false,
  // ============ LOGOUT ============
  handleLogout: () => {
    removeSession(USER_SESSION);
    set((state) => ({ ...state, isLoggedIn: false }));
  },
  // ============ LOGIN ============
  handleLogin: async (data) => {
    set((state) => ({ ...state, isLoading: true }));
    const { message, error, user } = await LoginApi(data);
    if (!error) {
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userInfo: user,
      }));
      // setting session data
      setSession(USER_SESSION, user);
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
    const { message, error, user } = await SignUpApi(data);
    if (!error) {
      set((state) => ({
        ...state,
        isLoading: false,
        isLoggedIn: true,
        userInfo: user,
      }));
      // setting session data
      setSession(USER_SESSION, user);
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
