import axios, {AxiosPromise} from "axios" 55.1k (gzipped: 20.1k) 
import { FoodData } from "../interface/FoodData";
import { useMutation } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data:FoodData): AxiosPromise<any>=>{
    const response = axios.post(API_URL + '/food');
    return response;
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation(){
        mutationFn: postData,
        retry: 2,
        onSuccess: ()=>{
            queryClient.invalidateQueries(['food-data'])
        }
    }

    return mutate;
}