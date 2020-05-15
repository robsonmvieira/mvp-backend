import Address from "@domain/contexts/users/entities/Address";

export default interface IAddressRepository {
  create(address: Address): Promise<Address>
  index():Promise<Address[]>
  show(id: string): Promise<Address | undefined>
  update(id: string, address: Address): Promise<boolean | undefined>
  remove(id: string): Promise<boolean>
}
