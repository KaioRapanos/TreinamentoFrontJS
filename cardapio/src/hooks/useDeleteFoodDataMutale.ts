import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:8080";

export const useDeleteFoodDataMutate = () => {
    const queryClient = useQueryClient();

    const deleteFood = useMutation(
        async (foodId: string) => {
            await axios.delete(`${API_URL}/food/${foodId}`);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['food-data']);
            }
        }
    );

    return { mutateAsync: deleteFood.mutateAsync, isSuccess: deleteFood.isSuccess, isLoading: deleteFood.isLoading };
};
