import Product from "../entities/Product";

export default interface IGetProductByTitleService {
  exec(title: string): Promise<Product | undefined>
}
