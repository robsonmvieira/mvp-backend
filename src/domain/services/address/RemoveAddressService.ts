import Address  from 'domain/contexts/users/entities/Address';
import { injectable, inject } from 'tsyringe';
import AddressRepository from '@infra/repositories/AddressRepository';
import IRemoveAddressService from '@domain/contexts/users/contracts/address/IRemoveAddressService';

@injectable()
export default class RemoveAddressService implements IRemoveAddressService {
  constructor(
    @inject('AddressRepository')
    private addRepo: AddressRepository
  ) {

  }
  async exec(id: string): Promise<boolean> {
    return this.addRepo.remove(id)
  }

}
