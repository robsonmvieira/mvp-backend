import Image from "@domain/contexts/product/entities/Image";

interface imagePost {
  original_name: string;
  name_saved: string ;
  type: string;
  // wonner: string;
 }
export default interface IImageRepository {
  create(image: imagePost): Promise<Image>
  show(id: string): Promise<Image | undefined>
  update(id: string, image: Image): Promise<boolean | undefined>
  remove(id: string): Promise<boolean>
}
