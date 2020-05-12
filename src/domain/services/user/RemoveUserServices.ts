import { injectable, inject } from "tsyringe";
import UserRepository from "@infra/repositories/UserRepository";
import IRemoveUserServices from "@domain/contexts/users/contracts/user/IRemoveUserServices";

@injectable()
export default class RemoveUserServices  implements IRemoveUserServices  {
  constructor(@inject('UserRepository') private userRepo: UserRepository){}

  async exec(id: string): Promise<boolean> {
    return await this.userRepo.remove(id)
  }
}
