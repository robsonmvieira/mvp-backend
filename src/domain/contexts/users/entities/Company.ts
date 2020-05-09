import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne} from "typeorm"
import Product from "../../product/entities/Product";
import Address from "./Address";

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

  @Column({ type: 'uuid'})
  endereco_id: string

  @CreateDateColumn('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn('timestamp with time zone')
  updated_at: Date;

  // @OneToMany(() => prod)
  products: Product[]
  // @OneToOne()
  address: Address
}
