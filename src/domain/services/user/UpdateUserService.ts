import User from "@domain/contexts/users/entities/User";
import { injectable, inject } from "tsyringe";
import UserRepository from "@infra/repositories/UserRepository";
import IUpdateUserService from "@domain/contexts/users/contracts/user/IUpdateUserService";

@injectable()
export default class UpdateUserService implements IUpdateUserService {
  constructor(@inject('UserRepository') private userRepo: UserRepository){}

  async exec(id: string, user: User): Promise<boolean| undefined> {
    return await this.userRepo.update(id, user)
  }
}
