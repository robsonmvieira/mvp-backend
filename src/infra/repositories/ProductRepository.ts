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
    const result = await this.orm.createQueryBuilder('product')
    .select(['product.id', 'product.title', 'product.price'])
    .leftJoin('product.company', 'cmp')
    .addSelect('cmp.name')
    .leftJoin('product.image', 'img')
    .addSelect(['img.name_saved'])
    .getMany()
    return result
  }

  async show(id: string): Promise<Product | undefined> {
    const product = await this.orm.createQueryBuilder("product")
    .select(['product.id', 'product.title', 'product.price'])
    .where({ id })
    .leftJoin("product.image", "image")
    .addSelect(["image.name_saved", 'image.id'])
    .leftJoin("product.company", "company")
    .addSelect(['company.name'])
    .getOne()

    if(product) {
      return product
    }
    return undefined
  }
  async update(id: string, product: Product): Promise<Product | undefined> {
    const productExists = await this.orm.findOne(id)
    if(productExists) {
      await this.orm.update(id, product)
      return product
    }
    return undefined
  }
  async remove(id: string): Promise<boolean> {
    const productExists = await this.orm.findOne(id)
    if (productExists) {
      await this.orm.remove(productExists)
      return true
    }
    return false
  }

  async getProductByTitle(title: string): Promise<Product | undefined> {
    const product = await this.orm.createQueryBuilder("product")
    .select(['product.id', 'product.title', 'product.price'])
    .where({ title })
    .leftJoin("product.image", "image")
    .addSelect(["image.name_saved", 'image.id'])
    .leftJoin("product.company", "company")
    .addSelect(['company.name'])
    .getOne()

    if(product) {
      return product
    }
    return undefined
  }
  async getProductByCompany(id: string): Promise<Product[] | undefined> {
    const product = await this.orm.createQueryBuilder("product")
    .select(['product.id', 'product.title', 'product.price'])
    .where({ company_id: id })
    .leftJoin("product.image", "image")
    .addSelect(["image.name_saved", 'image.id'])
    .leftJoin("product.company", "company")
    .addSelect(['company.name'])
    .getMany()

    if(product) {
      return product
    }
    return undefined
  }
}
