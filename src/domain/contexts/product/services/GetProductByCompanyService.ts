
import Product from "../entities/Product";
import { inject, injectable } from "tsyringe";
import ProductRepository from "@infra/repositories/ProductRepository";
import IGetProductByCompanyService from "../contracts/IGetProductsByCompanyService";

@injectable()
export default class GetProductByCompanyService implements IGetProductByCompanyService {
  constructor(@inject('ProductRepository') private prodRepo: ProductRepository) {}

  async exec(id: string): Promise<Product[] | undefined> {
    if(id == undefined) {
      return undefined
    }
    const result = await this.prodRepo.getProductByCompany(id)
    if(result) {
      return result
    }
    return undefined
  }

  }

