import { Repository, getRepository } from "typeorm";
import Product from "domain/contexts/product/entities/Product";
import IProductRepository from "@domain/contracts/IProductRepository";

export default class ProductRepository implements IProductRepository {
  private readonly orm: Repository<Product>

  constructor() {
    this.orm = getRepository(Product)
  }

  async create(product: Product): Promise<Product> {
    const result = await this.orm.save(product)
    return result
  }

  async index(): Promise<Product[]> {
    const result = await this.orm.find()
    return result
  }

  async show(id: string): Promise<Product | undefined> {
    const productExists = await this.orm.findOne(id)
    return productExists
  }
  update(id: string, product: Product): Promise<Product | undefined> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  async getProductByTitle(title: string): Promise<Product | undefined> {
    const result = await this.orm.findOne({where: {title}})
    return result
  }
  async getProductByCompany(id: string): Promise<Product[] | undefined> {
    const result = await this.orm.find({where: {company_id: id}})
    return result
  }
}
