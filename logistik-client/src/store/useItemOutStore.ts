import { ItemOutType } from "@/types/types";
import { create } from "zustand";

interface ItemOutStore {
  selectedItemOut: ItemOutType | null;
  setSelectedItemOut: (item: ItemOutType | null) => void;
}

export const useItemOutStore = create<ItemOutStore>((set) => ({
  selectedItemOut: null,
  setSelectedItemOut: (item) => set({ selectedItemOut: item }),
}));
