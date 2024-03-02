import { create } from "zustand";

export const useJobStore = create((set) => ({
    searchValue: null,
    setSearchValue: (value) => set({
        searchValue: value
    })
}))