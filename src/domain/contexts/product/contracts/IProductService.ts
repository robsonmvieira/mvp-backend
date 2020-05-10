import Product from "../entities/Product";

export default interface IProductService {
  getProductByCompany(companyId: string): Promise<Product[]>
}
