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
import Image from "./Image";

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  phone_number: string;

  @Column()
  email: string;

  @Column()
  password: string

  @Column({ type: 'uuid'})
  endereco_id: string

  @CreateDateColumn('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn('timestamp with time zone')
  updated_at: Date;

  // @OneToMany(() => prod)
  products: Product[];

  // @OneToMany(() => prod)
  adresses: Address[];

  @Column()
  photo_id: string;

  // @OneToOne()
  image: Image

}

