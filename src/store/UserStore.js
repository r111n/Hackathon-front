import { create } from "zustand"

export const useUserStore = create((set) => ({
    user: null,
    isLoading: false,
    setIsLoading: (state) => set({
        isLoading: state
    }),
    setUser: (data) => set({
        user: data
    }),
    deleteUser: () => {
        user: null
    }
}))