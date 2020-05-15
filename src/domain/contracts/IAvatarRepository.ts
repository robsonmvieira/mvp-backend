import Avatar from "@domain/contexts/users/entities/Avatar";
interface avatarPost {
  original_name: string;
  name_saved: string ;
  type: string;
  // wonner: string;
 }
export default interface IAvatarRepository {
  create(avatar: avatarPost): Promise<Avatar>
  // index():Promise<Avatar[]>
  show(id: string): Promise<Avatar | undefined>
  update(id: string, avatar: Avatar): Promise<boolean | undefined>
  remove(id: string): Promise<boolean>
}
