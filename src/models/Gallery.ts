import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"
import { Tattoo_artist } from "./Tattoo_artist"

@Entity("galleries")
export class Gallery extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  tattoo_artist_id!: number

  @Column()
  image!: string
  
  @Column()
  created_at!: Date
  
  @Column()
  updated_at!: Date

  @ManyToOne(() => Tattoo_artist, (tattoo_artist) => tattoo_artist.galleries)
  @JoinColumn({ name: "tattoo_artist_id"})
  tattoo_artist!: Tattoo_artist;
}