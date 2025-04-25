import { createItemIn, getItemsIn } from "@/service/itemInService";
import { ItemInType } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useItemsIn = () => {
  return useQuery<ItemInType[]>({
    queryKey: ["itemIn"],
    queryFn: getItemsIn,
  });
};

export const useCreateItemIn = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createItemIn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["itemIn"] });
    },
  });
};
