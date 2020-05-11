import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
  TableForeignKey} from "typeorm"


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

  @Column({nullable: true})
  user_id: string;

  @Column({nullable: true})
  company_id: string
  // @ManyToOne(() => User, user => user.adresses)
  // user: User
}
