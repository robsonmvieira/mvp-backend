import {Request, Response} from 'express'
import { container } from 'tsyringe'
import GetUsersServices from '@domain/services/user/GetUsersServices'
import CreateUserService from '@domain/services/user/CreateUserService'

export default class UserController {

  public async create(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(CreateUserService)
    const result = await service.create(req.body)
    delete result.password
    return res.status(201).json(result)
  }

  public async index(req:Request,res: Response ):Promise<Response> {
   const service = container.resolve(GetUsersServices)
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
