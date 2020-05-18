import {Request, Response} from 'express'
import { container } from 'tsyringe'
import GetUsersServices from '@domain/services/user/GetUsersServices'
import CreateUserService from '@domain/services/user/CreateUserService'
import CreateAddressService from '@domain/services/address/CreateAddressService'
import GetUserServices from '@domain/services/user/GetUserServices'
import RemoveUserServices from '@domain/services/user/RemoveUserServices'
import UpdateUserService from '@domain/services/user/UpdateUserService'
import CreateAvatar from '@domain/services/avatar/CreateAvatar'

export default class UserController {

  public async create(req:Request,res: Response ):Promise<Response> {
    const userService = container.resolve(CreateUserService)
    const addService = container.resolve(CreateAddressService)

    const {country, state, city, street, number, zip_code } = req.body


    const {name, cpf, email, phone_number, password } = req.body


    const newUser = {
      name,
      cpf,
      email,
      phone_number,
      password

    }
    const result = await userService.create(newUser)

    const newAddress = {
      country,
      state,
      city,
      street,
      number,
      zip_code,
      user_id:  result.id }

    const createdAddress = await addService.create(newAddress)

    delete result.password

    return res.status(201).json(result)

  }

  public async index(req:Request,res: Response ):Promise<Response> {
   const service = container.resolve(GetUsersServices)
   const result = await service.index()
   return res.status(200).json(result)
  }


  public async show(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(GetUserServices)
    const {id} = req.params
    const result = await service.exec(id)
    if(result){
      delete result.password
       return res.status(201).json(result)
     }
     return res.status(400).json({error: 'user was not found'})
  }

  public async update(req:Request, res: Response ):Promise<Response> {
    const service = container.resolve(UpdateUserService)
    const {id} = req.params
    const result = await service.exec(id, req.body)

    if(result){
      return res.status(201).json(result)
    }
    return res.status(400).json({error: 'user was not found'})
  }

  public async remove(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(RemoveUserServices)
    const {id} = req.params
    const result = await service.exec(id)
    if(result){
      return res.status(201).json(result)
    }
    return res.status(400).json({error: 'user was not found'})
  }

  public async updateImage(req:Request,res: Response ):Promise<Response>{
    const userService = container.resolve(UpdateUserService)
    const avatarService = container.resolve(CreateAvatar)
    const { originalname, mimetype,filename } = req.file
    const {id} = req.params
    const newAvatar = {
      original_name: originalname,
      name_saved: filename,
      type: mimetype,
      // wonner: id
    }
    const createdAvatar = await avatarService.exec(newAvatar)
    await userService.exec(id, {id, avatar_id: createdAvatar.id })

    return res.status(200).json(createdAvatar)
  }
}
