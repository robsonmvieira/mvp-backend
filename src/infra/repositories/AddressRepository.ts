import { Repository, getRepository } from "typeorm";
import Address from "domain/contexts/users/entities/Address";
import IAddressRepository from "@domain/contracts/IAddressRepository";

interface addressPost {
  country: string,
  state: string,
  city: string,
  street: string,
  number: string,
  zip_code: string,
  user_id?: string;
  company_id?: string;
  // created_at?: Date,
  // updated_at?:Date
 }
export default class AddressRepository implements IAddressRepository {
  private readonly orm: Repository<Address>

  constructor() {
    this.orm = getRepository(Address)
  }

  async create(address: addressPost): Promise<Address> {
    const result = await this.orm.save(address)
    return result
  }

  async index(): Promise<Address[]> {
   return this.orm.find()
  }

  async show(id: string): Promise<Address | undefined> {
    const addressExists = await this.orm.findOne(id)
    return addressExists
  }

  async update(id: string, address: Address): Promise<boolean | undefined> {
    const addressExists = await this.orm.findOne(id)
    if(addressExists) {
      await this.orm.update(id, address)
      return true
    }
    return undefined
  }

  async remove(id: string): Promise<boolean> {
    const addressExists = await this.orm.findOne(id)
    if (addressExists) {
      await this.orm.remove(addressExists)
      return true
    }
    return false
  }

}
