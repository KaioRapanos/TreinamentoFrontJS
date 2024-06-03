import axios from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient, UseMutateFunction } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData): Promise<FoodData> => {
    const response = await axios.post(`${API_URL}/food`, data);
    return response.data;
}

const updateData = async (id: string, data: FoodData): Promise<FoodData> => {
    const response = await axios.put(`${API_URL}/food/${id}`, data);
    return response.data;
}

export function useFoodDataMutate(): {
    mutate: UseMutateFunction<FoodData, unknown, { id?: string, data: FoodData }, unknown>;
    isSuccess: boolean;
    isLoading: boolean;
} {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: async ({ id, data }: { id?: string, data: FoodData }) => {
            if (id) {
                return updateData(id, data);
            } else {
                return postData(data);
            }
        },
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data']);
        }
    });

    return {
        mutate: mutation.mutate,
        isSuccess: mutation.isSuccess,
        isLoading: mutation.isLoading
    };
}

/*import axios from "axios";
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData): Promise<FoodData> => {
    const response = await axios.post(API_URL + '/food', data);
    return response.data;  // Assuming your API returns the saved data in the response
}

export function useFoodDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['food-data'])
        }
    });

    return mutate;
}*/
