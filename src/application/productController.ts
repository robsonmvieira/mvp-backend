import {Request, Response} from 'express'
import { container } from 'tsyringe'
import Product from '@domain/contexts/product/entities/Product'
import CreateProductService from '@domain/contexts/product/services/CreateProductService'
import GetProductService from '@domain/contexts/product/services/GetProductsService'
import GetProductByTitleService from '@domain/contexts/product/services/GetProductByTitleService'
import GetProductByCompanyService from '@domain/contexts/product/services/GetProductByCompanyService'

export default class ProductController {

  public async create(req:Request,res: Response ):Promise<Product> {
    const service = container.resolve(CreateProductService)
    const result = await service.create(req.body)
    return res.status(201).json(result)
  }

  public async index(req:Request,res: Response ):Promise<Response> {
   const service = container.resolve(GetProductService)
   const result = await service.index()
   return res.status(200).json(result)
  }


  public async show(req:Request,res: Response ):Promise<Response> {
    // const service = container.resolve(CreateCompanyService)
    // const result = await service.create(req.body)
    // return res.status(201).json(result)
  }

  public async update(req:Request,res: Response ):Promise<Response> {
    // const service = container.resolve(CreateCompanyService)
    // const result = await service.create(req.body)
    // return res.status(201).json(result)
  }

  public async remove(req:Request,res: Response ):Promise<Response> {
    // const service = container.resolve(CreateCompanyService)
    // const result = await service.create(req.body)
    // return res.status(201).json(result)
  }

  public async getProductByTitle(req: Request, res: Response): Promise<Response>{
    const service = container.resolve(GetProductByTitleService)
    const {title} = req.params
    const productExists = await service.exec(title)
    if(productExists) {
      return res.status(200).json(productExists)
    }
    return res.status(400).json({message: 'product was not found'})
  }
  public async getProductByCompany(req: Request, res: Response): Promise<Response>{
    const service = container.resolve(GetProductByCompanyService)
    const {id} = req.params
    const productExists = await service.exec(id)
    if(productExists) {
      return res.status(200).json(productExists)
    }
    return res.status(400).json({message: 'product was not found'})
  }

}
