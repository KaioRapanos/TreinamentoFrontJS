import axios, {AxiosPromise} from "axios" 55.1k (gzipped: 20.1k) 
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8080';

const fechData = async (): AxiosPromise<FoodData[]>=>{
    const response = axios.get(API_URL + '/food');
    return response;
}

export function useFoodData(){
    const query = useQuery(){
        queryFn: fechData,
        queryKey: ['food-data'],
        retry: 2
    }

    return {
        ...query
        data: query.data?.data
    }
}