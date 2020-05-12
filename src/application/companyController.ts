import {Request, Response} from 'express'
import { container } from 'tsyringe'
import CreateCompanyService from '@domain/services/company/CreateCompanyService'
import GetCompaniesService from '@domain/services/company/GetCompaniesService'
import CreateAddressService from '@domain/services/address/CreateAddressService'

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
