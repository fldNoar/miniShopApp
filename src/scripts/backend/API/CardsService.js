import axios from "axios";

export default class CardsService {
    static async getProducts() {
        const response = await axios.get(`https://dummyjson.com/products`);
        return response.data.products;
    }
}