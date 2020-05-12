import Address  from 'domain/contexts/users/entities/Address';
import { injectable, inject } from 'tsyringe';
import AddressRepository from '@infra/repositories/AddressRepository';
import IGetAddressService from '@domain/contexts/users/contracts/address/IGetAddressService';

@injectable()
export default class GetAddressService implements IGetAddressService {
  constructor(
    @inject('AddressRepository')
    private addRepo: AddressRepository
  ) {

  }
  async exec(id: string): Promise<Address| undefined> {
    return this.addRepo.show(id)
  }

}
