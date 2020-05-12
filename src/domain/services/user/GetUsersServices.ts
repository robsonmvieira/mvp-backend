import IGetUsersServices from "@domain/contexts/users/contracts/user/IGetUsersServices";
import User from "@domain/contexts/users/entities/User";
import { injectable, inject } from "tsyringe";
import UserRepository from "@infra/repositories/UserRepository";

@injectable()
export default class GetUsersServices implements IGetUsersServices {
  constructor(@inject('UserRepository') private userRepo: UserRepository){}

  async index(): Promise<User[]> {
    return await this.userRepo.index()
  }
}
