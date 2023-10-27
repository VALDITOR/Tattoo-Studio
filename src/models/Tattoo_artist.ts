import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Appointment } from "./Appointment"
import { Gallery } from "./Gallery"

@Entity("tattoo_artists")
export class Tattoo_artist extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  surname!: string

  @Column()
  email!: string

  @Column()
  password!: string

  @Column()
  role!: string

  @Column()
  is_active!: boolean
  
  @Column()
  created_at!: Date
  
  @Column()
  updated_at!: Date

  @OneToMany(() => Appointment, (appoiment) => appoiment.tattoo_artist)
  appoiments!: Appointment[];

  @OneToMany(() => Gallery, (gallery) => gallery.tattoo_artist)
  galleries!: Gallery[];
}