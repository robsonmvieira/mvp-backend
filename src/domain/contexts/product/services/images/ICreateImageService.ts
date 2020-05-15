import { injectable, inject } from 'tsyringe';
import ICreateImage from '../../contracts/images/ICreateImageService';
import ImageRepository from '@infra/repositories/ImageRepository';
import Image from '../../entities/Image';

@injectable()
export default class CreateImage implements ICreateImage {

  constructor(@inject('ImageRepository')private imgRepository: ImageRepository) {}
  exec(image: Image): Promise<Image> {
    const result = this.imgRepository.create(image)
    return result
  }

}
