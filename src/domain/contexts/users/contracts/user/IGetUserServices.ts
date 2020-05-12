import User from "../../entities/User";

export default interface IGetUserServices {
  index(id: string): Promise<User| undefined>
}
