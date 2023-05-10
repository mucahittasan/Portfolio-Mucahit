import { create } from "zustand";

interface ToggleMenuStore {
    isOpen: boolean;
    toggleShow: () => void;
}

const useToggleMenu = create<ToggleMenuStore>((set) => ({
    isOpen: false,
    toggleShow: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useToggleMenu;
