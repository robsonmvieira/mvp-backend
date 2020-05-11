import Address  from 'domain/contexts/users/entities/Address';
import IGetAddressesService from "@domain/contexts/users/contracts/address/IGetAddressesService";
import { injectable, inject } from 'tsyringe';
import AddressRepository from '@infra/repositories/AddressRepository';

@injectable()
export default class GetAddressesService implements IGetAddressesService {
  constructor(
    @inject('AddressRepository')
    private addRepo: AddressRepository
  ) {

  }
  async index(): Promise<Address[]> {
    return this.addRepo.index()
  }

}
