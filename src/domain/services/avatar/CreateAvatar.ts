import Avatar from '@domain/contexts/users/entities/Avatar';
import ICreateAvatar from "@domain/contexts/users/contracts/avatar/ICreateAvatarService";
import { injectable, inject } from 'tsyringe';
import AvatarRepository from '@infra/repositories/AvatarRepository';

@injectable()
export default class CreateAvatar implements ICreateAvatar {

  constructor(@inject('AvatarRepository')private avatarRepository: AvatarRepository) {}
  exec(avatar: Avatar): Promise<Avatar> {
    const result = this.avatarRepository.create(avatar)
    return result
  }

}
