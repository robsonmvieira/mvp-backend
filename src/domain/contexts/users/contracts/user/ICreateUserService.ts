import User from "../../entities/User";

export default interface ICreateUserService {
  create(user: User): Promise<User>
}
