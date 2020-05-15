import { Repository, getRepository } from "typeorm";
import IImageRepository from '@domain/contracts/IImageRepository';
import Image from '@domain/contexts/product/entities/Image';

interface imagePost {
  original_name: string;
  name_saved: string ;
  type: string;
 }

export default class ImageRepository implements IImageRepository {
  private readonly orm: Repository<Image>

  constructor() {
    this.orm = getRepository(Image)
  }

  async create(image: imagePost): Promise<Image> {
    const result = await this.orm.save(image)
    return result
  }

  // async index(): Promise<Image[]> {
  //   const users = await this.orm.find()
  //   return users
  // }

  async show(id: string): Promise<Image | undefined> {
   const imageExists = await this.orm.findOne(id)
   if(imageExists) {
     return imageExists
   }
   return undefined
  }

  async update(id: string, image: Image): Promise<boolean | undefined> {
    const imageExists = await this.orm.findOne(id)
    if(imageExists) {
      await this.orm.update(id, image)
      return true
    }
    return undefined
  }

  async remove(id: string): Promise<boolean> {
    const imageExists = await this.orm.findOne(id)
    if(imageExists) {
      await this.orm.remove(imageExists)
      return true
    }
    return false
  }
}
