import Address from "@domain/contexts/users/entities/Address";

export default interface ICreateAddressService {
  create(address: Address):Promise<Address>
}
