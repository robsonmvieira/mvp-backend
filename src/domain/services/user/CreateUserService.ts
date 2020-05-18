import ICreateUserService from "@domain/contexts/users/contracts/user/ICreateUserService";
import { injectable, inject } from "tsyringe";
import User from "@domain/contexts/users/entities/User";
import UserRepository from "@infra/repositories/UserRepository";
import HasherAdapter from "@infra/adapters/HashAdapter/implementation/HasherAdapter";

 interface userPost {
  name: string;
  cpf: string ;
  email: string;
  phone_number: string;
  password: string;
 }

@injectable()
export default class CreateUserService implements ICreateUserService {

  constructor(@inject('UserRepository') private userRep: UserRepository) {}
  async create(user: userPost): Promise<User> {
   const hasherClass = new HasherAdapter()
   user.password = await hasherClass.encrypt(user.password)
   const result = await this.userRep.create(user)
   delete result.password
   return result
  }
}
