import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin Successfully Deleted");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, mutate };
}
