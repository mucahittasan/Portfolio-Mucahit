import { create } from "zustand";

interface ToggleMenuStore {
    isOpen: boolean;
    toggleShow: () => void;
    onClose: () => void;
}

const useToggleMenu = create<ToggleMenuStore>((set) => ({
    isOpen: false,
    toggleShow: () => set((state) => ({ isOpen: !state.isOpen })),
    onClose: () => set(() => ({ isOpen: false }))
}));

export default useToggleMenu;
