import Address from 'domain/contexts/users/entities/Address';

export default interface IGetAddressesService {
  index(): Promise<Address[]>
}
