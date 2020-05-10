import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne} from "typeorm"
import Company from "@domain/contexts/users/entities/Company";


@Entity('products')
export default class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  company_id: string;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  // @ManyToOne()
  company: Company


  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}
