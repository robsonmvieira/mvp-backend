import Avatar  from '@domain/contexts/users/entities/Avatar';
import { Repository, getRepository } from "typeorm";
import User from "domain/contexts/users/entities/User";
import IAvatarRepository from "@domain/contracts/IAvatarRepository";

interface avatarPost {
  original_name: string;
  name_saved: string ;
  type: string;
  // wonner: string;
 }

export default class IImageRepositoryAvatarRepository implements IAvatarRepository {
  private readonly orm: Repository<Avatar>

  constructor() {
    this.orm = getRepository(Avatar)
  }

  async create(avatar: avatarPost): Promise<Avatar> {
    const result = await this.orm.save(avatar)
    return result
  }

  // async index(): Promise<Avatar[]> {
  //   const users = await this.orm.find()
  //   return users
  // }

  async show(id: string): Promise<Avatar | undefined> {
   const avatarExists = await this.orm.findOne(id)
   if(avatarExists) {
     return avatarExists
   }
   return undefined
  }

  async update(id: string, avatar: Avatar): Promise<boolean | undefined> {
    const avatarExists = await this.orm.findOne(id)
    if(avatarExists) {
      await this.orm.update(id, avatar)
      return true
    }
    return undefined
  }

  async remove(id: string): Promise<boolean> {
    const avatarExists = await this.orm.findOne(id)
    if(avatarExists) {
      await this.orm.remove(avatarExists)
      return true
    }
    return false
  }
}
