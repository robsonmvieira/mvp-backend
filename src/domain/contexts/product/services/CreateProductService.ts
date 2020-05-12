
import Product from "../entities/Product";
import ICreateProductService from "../contracts/ICreateProductService";
import { inject, injectable } from "tsyringe";
import ProductRepository from "@infra/repositories/ProductRepository";

@injectable()
export default class CreateProductService implements ICreateProductService {
  constructor(@inject('ProductRepository') private prodRepo: ProductRepository) {}
  async create(product: Product): Promise<Product> {
    const result = await this.prodRepo.create(product)
    return result
  }

  }

