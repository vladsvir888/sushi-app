export default class ProductService {
    static async getProduct(url) {
        return await fetch(url);
    }
}