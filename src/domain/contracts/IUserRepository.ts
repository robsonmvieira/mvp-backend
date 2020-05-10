import User from "@domain/contexts/users/entities/User";

export default interface IUserRepository {
  create(user: User): Promise<User>
  index():Promise<User[]>
  show(id: string): Promise<User | undefined>
  update(id: string, user: User): Promise<User | undefined>
  remove(id: string): Promise<boolean>
}
