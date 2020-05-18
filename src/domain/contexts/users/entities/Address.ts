import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
  TableForeignKey,
  JoinColumn} from "typeorm"
import User from "./User";


@Entity('addresses')
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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({nullable: true, type: 'uuid'})
  user_id: string;

  @Column({nullable: true, type: 'uuid'})
  company_id: string


  @JoinColumn({name: 'user_id'})
  @ManyToOne(
    () => User,
    user => user.addresses,
    {cascade: ['insert', 'update']})
  user: User
}
