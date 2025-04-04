import axios from "axios";

export default class CardsService {
    static async getProducts(limit) {
        const response = await axios.get(`https://dummyjson.com/products`, {
            params: {
                limit
            }
        });
        return response.data.products;
    }

    static async getMoreProducts(limit) {
        const response = await axios.get(`https://dummyjson.com/products`, {
            params: {
                limit
            }
        })
    }
}