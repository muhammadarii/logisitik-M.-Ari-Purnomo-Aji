import { ItemOutType } from "@/types/types";
import { API } from "./api";

export const getItemsOut = async (): Promise<ItemOutType[]> => {
  const res = await fetch(`${API.baseURL}/api/barang-keluar`, {
    method: "GET",
    headers: API.headers,
  });
  return res.json();
};

export const createItemOut = async (item: Partial<ItemOutType>) => {
  const res = await fetch(`${API.baseURL}/api/barang-keluar`, {
    method: "POST",
    headers: API.headers,
    body: JSON.stringify(item),
  });
  return res.json();
};
