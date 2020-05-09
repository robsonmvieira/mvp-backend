import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany} from "typeorm"
import Product from "../../product/entities/Product";

@Entity('adress')
export default class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  state: string;

  @Column()
  number: string

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  zip_code: string;

  @Column({ type: 'uuid'})
  woner: string

  @CreateDateColumn('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn('timestamp with time zone')
  updated_at: Date;
}
