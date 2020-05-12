
import Product from "../entities/Product";
import { inject, injectable } from "tsyringe";
import ProductRepository from "@infra/repositories/ProductRepository";
import IGetProductsService from "../contracts/IGetProductsService";

@injectable()
export default class GetProductService implements IGetProductsService {
  constructor(@inject('ProductRepository') private prodRepo: ProductRepository) {}

  async index(): Promise<Product[]> {
    const result = await this.prodRepo.index()
    return result
  }

  }

