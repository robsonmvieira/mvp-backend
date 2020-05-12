import {Request, Response} from 'express'
import { container } from 'tsyringe'
import CreateCompanyService from '@domain/services/company/CreateCompanyService'
import GetCompaniesService from '@domain/services/company/GetCompaniesService'
import CreateAddressService from '@domain/services/address/CreateAddressService'
import UpdateCompanyService from '@domain/services/company/UpdateCompanyService'
import GetCompanyService from '@domain/services/company/GetCompanyService'
import RemoveCompanyService from '@domain/services/company/RemoveCompanyService'

export default class CompanyController {

  public async create(req:Request,res: Response ):Promise<Response> {
    const companyService = container.resolve(CreateCompanyService)
    const addService = container.resolve(CreateAddressService)

    const {country, state, city, street, number, zip_code } = req.body
    const address = {
      country,
      state,
      city,
      street,
      number,
      zip_code
    }
    const createdAddress = await addService.create(address)
    const { cnpj, name, email } = req.body
    const createCompany = {
      cnpj,
      name,
      email,
      address_id: createdAddress.id
    }
    const result = await companyService.create(createCompany)
    return res.status(201).json(result)
  }

  public async index(req:Request,res: Response ):Promise<Response> {
   const service = container.resolve(GetCompaniesService)
   const result = await service.getCompanies()
   return res.status(200).json(result)
  }


  public async show(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(GetCompanyService)
    const {id} = req.params
    const result = await service.exec(id)

     if(result){
       return res.status(201).json(result)
     }
     return res.status(400).json({error: 'product was not found'})
  }

  public async update(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(UpdateCompanyService)
    const {id} = req.params
    if(id == undefined) {
      return res.status(400).json({ error: 'company was not found'})
    }
    const result = await service.exec(id, req.body)
    if(result) {
      return res.status(201).json(result)
    }
    return res.status(400).json({ error: 'somehting went wrong'})

  }

  public async remove(req:Request,res: Response ):Promise<Response> {
    const service = container.resolve(RemoveCompanyService)
    const {id} = req.params
    const result = await service.exec(id)

     if(result){
       return res.status(201).json(result)
     }
     return res.status(400).json(false)
  }
}
