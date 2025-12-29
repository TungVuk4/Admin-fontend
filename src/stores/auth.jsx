import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      setLogin: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: "auth-storage", // Tên khóa (key) sẽ hiển thị trong LocalStorage
      storage: createJSONStorage(() => localStorage), // (Tùy chọn) Mặc định là localStorage
    }
  )
);
