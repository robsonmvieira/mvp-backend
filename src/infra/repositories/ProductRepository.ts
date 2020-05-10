import { Repository } from "typeorm";
import Product from "domain/contexts/product/entities/Product";

export default class ProductRepository extends Repository<Product> {}
