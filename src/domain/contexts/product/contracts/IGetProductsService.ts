import Product from "../entities/Product";

export default interface IGetProductsService {
  index(): Promise<Product[]>
}
