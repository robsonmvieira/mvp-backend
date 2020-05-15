import  Avatar from '@domain/contexts/users/entities/Avatar';
export default interface ICreateAvatar {
  exec(avatar: Avatar): Promise<Avatar>
}
