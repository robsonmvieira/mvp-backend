import {Request, Response} from 'express'
import { container } from 'tsyringe'
import CreateAddressService from '@domain/services/address/CreateAddressService'
import GetAddressesService from '@domain/services/address/GetAddressesService'
import GetAddressService from '@domain/services/address/GetAddressService'
import UpdateAddressService from '@domain/services/address/UpdateAddressService'
import RemoveAddressService from '@domain/services/address/RemoveAddressService'

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
    const service = container.resolve(GetAddressService)
    const {id} = req.params
    const result = await service.exec(id)
    return res.status(201).json(result)
  }

  public async update(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(UpdateAddressService)
    const {id} = req.params
    const result = await service.exec(id, req.body)

    if(result){
      return res.status(201).json(result)
    }
    return res.status(400).json({error: 'address was not found'})
  }

  public async remove(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(RemoveAddressService)
    const {id} = req.params
    const result = await service.exec(id)
    if(result){
      return res.status(201).json(result)
    }
    return res.status(400).json({error: 'address was not found'})
  }
}
