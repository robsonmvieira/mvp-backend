import Address from 'domain/contexts/users/entities/Address';

export default interface IGetAddressService {
  exec(id: string): Promise<Address| undefined>
}
