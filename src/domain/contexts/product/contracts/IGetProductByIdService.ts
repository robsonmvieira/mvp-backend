import Product from "../entities/Product";

export default interface IGetProductByIdService {
  exec(title: string): Promise<Product | undefined>
}
