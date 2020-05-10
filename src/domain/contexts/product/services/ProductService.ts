import IProductService from "../contracts/IProductService";
import Product from "../entities/Product";

export default class ProductService implements IProductService {
  constructor() {}

  getProductByCompany(companyId: string): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
}
