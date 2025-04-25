import { ItemInType } from "@/types/types";
import { create } from "zustand";

interface ItemInStore {
  selectedItemIn: ItemInType | null;
  setSelectedItemIn: (item: ItemInType | null) => void;
}

export const useItemInStore = create<ItemInStore>((set) => ({
  selectedItemIn: null,
  setSelectedItemIn: (item) => set({ selectedItemIn: item }),
}));
