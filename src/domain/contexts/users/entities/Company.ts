import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  JoinColumn} from "typeorm"

import Address from "./Address";
import Product from "@domain/contexts/product/entities/Product";

@Entity('companies')
export default class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  email: string;

  @Column({ type:'uuid'})
  address_id: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => Product, products => products.company,
    {eager: true})
  products: Product[]

  // @OneToOne()
  @OneToOne(() => Address)
  @JoinColumn({name: 'address_id' })
  address: Address
}
