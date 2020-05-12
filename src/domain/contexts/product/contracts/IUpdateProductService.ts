import Product from "../entities/Product";

export default interface IUpdateProductService {
  exec(id: string, product: Product): Promise<Product | undefined>
}
