
import Product from "../entities/Product";
import ICreateProductService from "../contracts/ICreateProductService";
import { inject, injectable } from "tsyringe";
import ProductRepository from "@infra/repositories/ProductRepository";

interface productDto  {
  title: string
  company_id: string
  price: string
  available?: boolean
  image_id? : string
}

@injectable()
export default class CreateProductService implements ICreateProductService {
  constructor(@inject('ProductRepository') private prodRepo: ProductRepository) {}
  async create(product: productDto): Promise<Product> {
    const result = await this.prodRepo.create(product)
    return result
  }

  }

