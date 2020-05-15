import {container} from 'tsyringe'
import ICompanyRepository from '@domain/contracts/ICompanyRepository'
import CompanyRepository from '@infra/repositories/CompanyRepository'
import IAddressRepository from '@domain/contracts/IAddressRepository'
import AddressRepository from '@infra/repositories/AddressRepository'
import IProductRepository from '@domain/contracts/IProductRepository'
import ProductRepository from '@infra/repositories/ProductRepository'
import IUserRepository from '@domain/contracts/IUserRepository'
import UserRepository from '@infra/repositories/UserRepository'
import IAvatarRepository from '@domain/contracts/IAvatarRepository'
import AvatarRepository from '@infra/repositories/AvatarRepository'
import IImageRepository from '@domain/contracts/IImageRepository'
import ImageRepository from '@infra/repositories/ImageRepository'


container.registerSingleton<ICompanyRepository>("CompanyRepository", CompanyRepository)
container.registerSingleton<IAddressRepository>("AddressRepository", AddressRepository)
container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
container.registerSingleton<IProductRepository>("ProductRepository", ProductRepository)
container.registerSingleton<IAvatarRepository>("AvatarRepository", AvatarRepository)
container.registerSingleton<IImageRepository>("ImageRepository", ImageRepository)
