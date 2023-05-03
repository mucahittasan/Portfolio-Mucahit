import { create } from "zustand";

interface ToggleMenuStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useToggleMenu = create<ToggleMenuStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useToggleMenu;
