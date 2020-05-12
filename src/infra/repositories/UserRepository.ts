import { Repository, getRepository } from "typeorm";
import User from "domain/contexts/users/entities/User";
import IUserRepository from "@domain/contracts/IUserRepository";

interface userPost {
  name: string;
  cpf: string ;
  email: string;
  phone_number: string;
  password: string;
  address_id: string;
 }

export default class UserRepository implements IUserRepository {
  private readonly orm: Repository<User>

  constructor() {
    this.orm = getRepository(User)
  }

  async create(user: userPost): Promise<User> {
    const result = await this.orm.save(user)
    return result
  }

  async index(): Promise<User[]> {
    const users = await this.orm.find()
    return users
  }

  async show(id: string): Promise<User | undefined> {
   const userExists = await this.orm.findOne(id)
   if(userExists) {
     return userExists
   }
   return undefined
  }

  async update(id: string, user: User): Promise<User | undefined> {
    const userExists = await this.orm.findOne(id)
    if(userExists) {
      await this.orm.update(id, user)
      return user
    }
    return undefined
  }

  async remove(id: string): Promise<boolean> {
    const userExists = await this.orm.findOne(id)
    if(userExists) {
      await this.orm.remove(userExists)
      return true
    }
    return false
  }
}
