import User from "@domain/contexts/users/entities/User";
import { injectable, inject } from "tsyringe";
import UserRepository from "@infra/repositories/UserRepository";
import IGetUserServices from "@domain/contexts/users/contracts/user/IGetUserServices";

@injectable()
export default class GetUserServices implements IGetUserServices {
  constructor(@inject('UserRepository') private userRepo: UserRepository){}

  async exec(id: string): Promise<User| undefined> {
    return await this.userRepo.show(id)
  }
}
