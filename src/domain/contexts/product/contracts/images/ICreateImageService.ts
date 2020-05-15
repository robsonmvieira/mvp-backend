import Image from "../../entities/Image";

export default interface ICreateImage {
  exec(image: Image): Promise<Image>
}
