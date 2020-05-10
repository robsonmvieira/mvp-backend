import {container} from 'tsyringe'
import ICompanyRepository from '@domain/contracts/ICompanyRepository'
import CompanyRepository from '@infra/repositories/CompanyRepository'


container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository)
