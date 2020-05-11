import ICreateAddressService from "@domain/contexts/users/contracts/address/ICreateAddressService";
import { injectable, inject } from "tsyringe";
import AddressRepository from "@infra/repositories/AddressRepository";
import Address from "@domain/contexts/users/entities/Address";

@injectable()
export default class CreateAddressService implements ICreateAddressService {

  constructor(
    @inject("AddressRepository") private addRepository:AddressRepository
  ) {

  }

  async create(address: Address): Promise<Address>  {
    const result = await this.addRepository.create(address)
    return result
  }

}
