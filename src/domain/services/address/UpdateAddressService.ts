import Address  from 'domain/contexts/users/entities/Address';
import { injectable, inject } from 'tsyringe';
import AddressRepository from '@infra/repositories/AddressRepository';
import IUpdateAddressService from '@domain/contexts/users/contracts/address/IUpdateAddressService';

@injectable()
export default class UpdateAddressService implements IUpdateAddressService {
  constructor(
    @inject('AddressRepository')
    private addRepo: AddressRepository
  ) {

  }
  async exec(id: string, address: Address): Promise<boolean| undefined> {
    return this.addRepo.update(id, address)
  }

}
