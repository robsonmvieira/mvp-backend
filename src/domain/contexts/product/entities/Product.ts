import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne} from "typeorm"
import Company from "../../users/entities/Company";

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


  @CreateDateColumn('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn('timestamp with time zone')
  updated_at: Date;

}
