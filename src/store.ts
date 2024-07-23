import { create } from "zustand";
import { IData } from "./types";

interface ModalState {
  isOpen: boolean;
  modalData: null | IData;
  setIsOpen: (value: boolean) => void;
  updateModalData: (newData: IData) => void;
}

const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  modalData: null,
  setIsOpen: (value) => set((state) => ({ isOpen: (state.isOpen = value) })),
  updateModalData: (newData) => set({ modalData: newData }),
}));

export default useModalStore;
