import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity('avatar')
export default class Avatar {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  original_name: string;

  @Column()
  name_saved: string;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
