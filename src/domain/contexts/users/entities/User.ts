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
import Avatar from "./Avatar";

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => Address,
    addresses => addresses.user,
    { eager: true, cascade: ['insert', 'update', 'remove']} )
  addresses: Address[];

  @Column({nullable: true})
  avatar_id: string;


  @OneToOne(type => Avatar)
  @JoinColumn({name:'avatar_id'})
  avatar: Avatar
}

