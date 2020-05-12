
import Product from "../entities/Product";
import { inject, injectable } from "tsyringe";
import ProductRepository from "@infra/repositories/ProductRepository";
import IGetProductByTitleService from "../contracts/IGetProductByIdTitle";

@injectable()
export default class GetProductByTitleService implements IGetProductByTitleService {
  constructor(@inject('ProductRepository') private prodRepo: ProductRepository) {}

  async exec(title: string): Promise<Product| undefined> {
    if(title == undefined) {
      return undefined
    }
    const result = await this.prodRepo.getProductByTitle(title)
    return result
  }

  }

