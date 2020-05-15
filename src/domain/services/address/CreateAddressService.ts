import ICreateAddressService from "@domain/contexts/users/contracts/address/ICreateAddressService";
import { injectable, inject } from "tsyringe";
import AddressRepository from "@infra/repositories/AddressRepository";
import Address from "@domain/contexts/users/entities/Address";
import IAddressRepository from "@domain/contracts/IAddressRepository";

 interface addressPost {
  country: string,
  state: string,
  city: string,
  street: string,
  number: string,
  zip_code: string,

 }
@injectable()
export default class CreateAddressService implements ICreateAddressService {

  constructor(
    @inject("AddressRepository") private addRepository: AddressRepository
  ) {

  }

  async create(address: addressPost): Promise<Address>  {
    const result = await this.addRepository.create(address)
    return result
  }

}
