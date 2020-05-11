import { Repository, getRepository } from "typeorm";
import Address from "domain/contexts/users/entities/Address";
import IAddressRepository from "@domain/contracts/IAddressRepository";

export default class AddressRepository implements IAddressRepository {
  private readonly orm: Repository<Address>

  constructor() {
    this.orm = getRepository(Address)
  }

  async create(address: Address): Promise<Address> {
    const result = await this.orm.save(address)
    return result
  }

  async index(): Promise<Address[]> {
   return this.orm.find()
  }

  show(id: string): Promise<Address | undefined> {
    throw new Error("Method not implemented.");
  }
  update(id: string, address: Address): Promise<Address | undefined> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}
