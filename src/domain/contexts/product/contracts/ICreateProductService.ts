import Product from "../entities/Product";

export default interface ICreateProductService {
  create(product: Product): Promise<Product>
}
