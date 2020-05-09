import { PrimaryGeneratedColumn, Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  original_name: string;

  @Column()
  name_saved: string;

  @Column()
  type: string;

  @Column({ type: 'uuid'})
  wonner_id: string;


  @CreateDateColumn('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn('timestamp with time zone')
  updated_at: Date;



}
