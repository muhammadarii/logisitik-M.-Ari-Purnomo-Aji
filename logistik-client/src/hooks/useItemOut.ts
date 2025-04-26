import { createItemOut, getItemsOut } from "@/service/itemOutService";
import { ItemOutType } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useItemsOut = () => {
  return useQuery<ItemOutType[]>({
    queryKey: ["itemOut"],
    queryFn: getItemsOut,
  });
};

export const useCreateItemOut = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createItemOut,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["itemOut"] });
    },
  });
};
