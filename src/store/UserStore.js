import { create } from "zustand"

export const useUserStore = create((set) => ({
    user: null,
    isLoading: false,
    companySkills: [
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Brand Identity",
        "Illustration"],
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