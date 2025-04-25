import { ItemType } from "@/types/types";
import { API } from "./api";

export const getItems = async (): Promise<ItemType[]> => {
  const res = await fetch(`${API.baseURL}/api/barang`, {
    method: "GET",
    headers: API.headers,
  });
  return res.json();
};

export const createItem = async (item: Partial<ItemType>) => {
  const res = await fetch(`${API.baseURL}/api/barang`, {
    method: "POST",
    headers: API.headers,
    body: JSON.stringify(item),
  });
  return res.json();
};
