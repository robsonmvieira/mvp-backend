import {Request, Response} from 'express'
import { container } from 'tsyringe'
import CreateProductService from '@domain/contexts/product/services/CreateProductService'
import GetProductService from '@domain/contexts/product/services/GetProductsService'
import GetProductByTitleService from '@domain/contexts/product/services/GetProductByTitleService'
import GetProductByCompanyService from '@domain/contexts/product/services/GetProductByCompanyService'
import UpdateProductService from '@domain/contexts/product/services/UpdateProductService'
import GetProductByIdService from '@domain/contexts/product/services/GetProductByIdService'
import RemoveProductService from '@domain/contexts/product/services/RemoveProductService'
import CreateImage from '@domain/contexts/product/services/images/ICreateImageService'

export default class ProductController {

  public async create(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(CreateProductService)
    const imageService = container.resolve(CreateImage)

    const { originalname, mimetype,filename } = req.file
    const newImage = {
      original_name: originalname,
      name_saved: filename,
      type: mimetype,
    }

    const createdImage = await imageService.exec(newImage)

    const { title, company_id, price, available } = req.body
    const productDto = {
      title,
      company_id,
      price,
      available,
      image_id: createdImage.id
    }
    const createdProduct = await service.create(productDto)
    return res.status(201).json(createdProduct)
  }

  public async index(req:Request,res: Response ):Promise<Response> {
   const service = container.resolve(GetProductService)
   const result = await service.index()
   return res.status(200).json(result)
  }


  public async show(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(GetProductByIdService)
    const {id} = req.params
    const result = await service.exec(id)

     if(result){
       return res.status(201).json(result)
     }
     return res.status(400).json({error: 'product was not found'})
  }

  public async update(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(UpdateProductService)
    const {id} = req.params
    const result = await service.exec(id, req.body)

    if(result){
      return res.status(201).json(result)
    }
    return res.status(400).json({error: 'product was not found'})
  }

  public async remove(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(RemoveProductService)
    const {id} = req.params
    const result = await service.exec(id)
    if(result){
      return res.status(201).json(result)
    }
    return res.status(400).json({error: 'product was not found'})
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

  public async updateImage(req: Request, res: Response): Promise<Response>{
    const productService = container.resolve(UpdateProductService)
    const imageService = container.resolve(CreateImage)
    const {id} = req.params
    const { originalname, mimetype,filename } = req.file
    const newImage = {
      original_name: originalname,
      name_saved: filename,
      type: mimetype,
    }

    const createdImage = await imageService.exec(newImage)

    await productService.exec(id, {id, image_id: createdImage.id })

    return res.status(200).json(createdImage)
  }

  private createImageFactory(request: Request): object {
    const { originalname, mimetype,filename } = request.file
    const newImage = {
      original_name: originalname,
      name_saved: filename,
      type: mimetype,
    }
    return newImage
  }
}
