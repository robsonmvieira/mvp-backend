import Product from "@domain/contexts/product/entities/Product";

export default interface IProductRepository {
  create(product: Product): Promise<Product>
  index():Promise<Product[]>
  show(id: string): Promise<Product | undefined>
  update(id: string, product: Product): Promise<Product | undefined>
  remove(id: string): Promise<boolean>
  getProductByTitle(title: string): Promise<Product | undefined>
  getProductByCompany(title: string): Promise<Product[] | undefined>
}
