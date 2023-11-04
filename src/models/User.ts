import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm"
import { Task } from "./Task"

@Entity("users")
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  username!: string

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

  @OneToMany(() => Task, (task) => task.user)
  tasks!: Task[];
}
