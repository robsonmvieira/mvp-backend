import User from "../../entities/User";

export default interface IUpdateUserService {
  exec(id: string, user: User): Promise<boolean| undefined>
}
