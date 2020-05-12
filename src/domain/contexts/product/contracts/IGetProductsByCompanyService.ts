import Product from "../entities/Product";

export default interface IGetProductByCompanyService {
  exec(id: string): Promise<Product[] | undefined>
}
