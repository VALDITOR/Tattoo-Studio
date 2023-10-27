import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany} from "typeorm"
import { Appointment } from "./Appointment"

@Entity("customers")
export class Customer extends BaseEntity {

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
  is_active!: boolean

  @Column()
  role!: string
  
  @Column()
  created_at!: Date
  
  @Column()
  updated_at!: Date

  @OneToMany(() => Appointment, (appointment) => appointment.customer)
  appoiments!: Appointment[];
}