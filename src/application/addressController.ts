import {Request, Response} from 'express'
import { container } from 'tsyringe'
import CreateAddressService from '@domain/services/address/CreateAddressService'
import GetAddressesService from '@domain/services/address/GetAddressesService'

export default class AdressController {

  public async create(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(CreateAddressService)
    const result = await service.create(req.body)
    return res.status(201).json(result)
  }

  public async index(req:Request,res: Response ):Promise<Response> {
   const service = container.resolve(GetAddressesService)
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
}
