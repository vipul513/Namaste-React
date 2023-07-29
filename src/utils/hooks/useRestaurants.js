import { RESTAURANT_API } from "../../fixtures/constant"

export const useRestaurants = async () => {
    const data = await fetchData();
    return data;
} 

const fetchData= async() => {
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    return json;
}