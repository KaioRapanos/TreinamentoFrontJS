import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8080';

const fetchData = async (): Promise<FoodData[]> => {
    const response = await axios.get(API_URL + '/food');
    return response.data;
}

export function useFoodData() {
    const query = useQuery<FoodData[], Error>(
        ['food-data'],
        fetchData,
        {
            retry: 2
        }
    );

    return {
        ...query,
        data: query.data
    }
}