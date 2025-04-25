import { ItemType } from "@/types/types";
import { create } from "zustand";

interface ItemStore {
  selectedItem: ItemType | null;
  setSelectedItem: (item: ItemType | null) => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  selectedItem: null,
  setSelectedItem: (item) => set({ selectedItem: item }),
}));
