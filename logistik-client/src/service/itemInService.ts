import { ItemInType } from "@/types/types";
import { API } from "./api";

export const getItemsIn = async (): Promise<ItemInType[]> => {
  const res = await fetch(`${API.baseURL}/api/barang-masuk`, {
    method: "GET",
    headers: API.headers,
  });
  return res.json();
};

export const createItemIn = async (item: Partial<ItemInType>) => {
  const res = await fetch(`${API.baseURL}/api/barang-masuk`, {
    method: "POST",
    headers: API.headers,
    body: JSON.stringify(item),
  });
  return res.json();
};
