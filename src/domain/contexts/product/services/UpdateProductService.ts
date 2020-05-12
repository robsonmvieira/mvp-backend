
import Product from "../entities/Product";
import { inject, injectable } from "tsyringe";
import ProductRepository from "@infra/repositories/ProductRepository";
import IUpdateProductService from "../contracts/IUpdateProductService";

@injectable()
export default class UpdateProductService implements IUpdateProductService {
  constructor(@inject('ProductRepository') private prodRepo: ProductRepository) {}

  async exec(id: string, product: Product): Promise<Product| undefined> {
    if(id == undefined) {
      return undefined
    }
    const result = await this.prodRepo.update(id, product)
    return result
  }

  }

