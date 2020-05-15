import User from "../../entities/User";

export default interface IGetUserServices {
  exec(id: string): Promise<User| undefined>
}
