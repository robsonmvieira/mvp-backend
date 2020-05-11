import {container} from 'tsyringe'
import ICompanyRepository from '@domain/contracts/ICompanyRepository'
import CompanyRepository from '@infra/repositories/CompanyRepository'
import IAddressRepository from '@domain/contracts/IAddressRepository'
import AddressRepository from '@infra/repositories/AddressRepository'
import IUserRepository from '@domain/contracts/IUserRepository'
import UserRepository from '@infra/repositories/UserRepository'


container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository)
container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository)
container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
