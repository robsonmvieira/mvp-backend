import { Repository, getRepository } from "typeorm";
import User from "domain/contexts/users/entities/User";
import IUserRepository from "@domain/contracts/IUserRepository";

interface userPost {
  name: string;
  cpf: string ;
  email: string;
  phone_number: string;
  password: string;
}

export default class UserRepository implements IUserRepository {
  private readonly orm: Repository<User>

  constructor() {
    this.orm = getRepository(User)
  }

  async create(user: userPost): Promise<User> {
    const result = await this.orm.save(user)
    return result
  }

  async index(): Promise<User[]> {
    const users = await this.orm.createQueryBuilder('user')
    .select([
      'user.id',
      'user.name',
      'user.cpf',
      'user.phone_number',
      'user.email'
    ])
    .leftJoin('user.addresses', 'add')
    .addSelect([
      'add.id',
      'add.city', 'add.country',
      'add.street',
      'add.state',
      'add.number'])
    .leftJoin('user.avatar', 'av')
    .addSelect(['av.name_saved'])
    .getMany()
    return users
  }

  async show(id: string): Promise<User | undefined> {
  const user = await this.orm.createQueryBuilder('user').where({id})
  .select(['user.id','user.name', 'user.email'])
  .leftJoin('user.addresses', 'add')
  .addSelect(['add.street', 'add.city'])
  .leftJoin('user.avatar', 'avatar')
  .addSelect('avatar.name_saved')
  .getOne()

  if(user) {
    return user
  }
  return undefined
  }

  async update(id: string, user: User): Promise<boolean | undefined> {
    let userExists = await this.orm.findOne(id)
    if(userExists) {
      await this.orm.update(id, user)
      return true
    }
    return undefined
  }

  async remove(id: string): Promise<boolean> {
    const userExists = await this.orm.findOne(id)
    if(userExists) {
      await this.orm.remove(userExists)
      return true
    }
    return false
  }
}
