import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne} from "typeorm"
import Company from "@domain/contexts/users/entities/Company";
import Image from "./Image";


@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  title: string;

  @Column()
  price: string;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @Column({ type: 'uuid' })
  company_id: string;

  @Column({ type: 'uuid' })
  image_id: string


  @ManyToOne(() => Company)
  @JoinColumn({name: 'company_id'})
  company: Company

  @OneToOne(()=> Image)
  @JoinColumn({name: 'image_id'})
  image: Image

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
