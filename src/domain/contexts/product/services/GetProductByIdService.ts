
import Product from "../entities/Product";
import { inject, injectable } from "tsyringe";
import ProductRepository from "@infra/repositories/ProductRepository";
import IGetProductByIdService from "../contracts/IGetProductByIdService";

@injectable()
export default class GetProductByIdService implements IGetProductByIdService {
  constructor(@inject('ProductRepository') private prodRepo: ProductRepository) {}

  async exec(id: string): Promise<Product| undefined> {
    if(id == undefined) {
      return undefined
    }
    const result = await this.prodRepo.show(id)
    return result
  }

  }

