import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import Property from "./property"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  name?: string

  @Column()
  email?: string

  @Column()
  password?: number

  @OneToMany(() => Property, realState => realState.owner)
  realState?: Property[]

  constructor(
    id?: number,
    name?: string,
    email?: string,
    password?: number,
    realState? : Property[]
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.realState = realState
  }
}

export default User