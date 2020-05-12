import { inject, injectable } from "tsyringe";
import ProductRepository from "@infra/repositories/ProductRepository";
import IRemoveProductService from "../contracts/IRemoveProductService";

@injectable()
export default class RemoveProductService implements IRemoveProductService {
  constructor(@inject('ProductRepository') private prodRepo: ProductRepository) {}

  async exec(id: string): Promise<boolean> {
    if(id == undefined) {
      return false
    }
    const productExists = await this.prodRepo.remove(id)
    if(productExists) {
      return true
    }
    return false
  }

  }

