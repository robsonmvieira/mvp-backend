import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToOne} from "typeorm"
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

  @Column({ type: 'uuid'})
  woner: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, user => user.adresses)
  user: User
}
