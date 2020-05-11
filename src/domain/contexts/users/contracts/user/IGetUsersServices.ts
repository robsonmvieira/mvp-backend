import User from "../../entities/User";

export default interface IGetUsersServices {
  index(): Promise<User[]>
}
