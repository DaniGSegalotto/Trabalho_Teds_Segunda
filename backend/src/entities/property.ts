import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import User from "./user"

@Entity()
export class Property {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    name?: String

    @Column()
    price?: number

    @ManyToOne(() => User, owner => owner.realState, {eager: true})
    @JoinColumn()
    owner?: User
}

export default Property