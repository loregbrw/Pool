import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity("Notes")
export class Note {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 500 })
    body?: string;

    @Column()
    createdAt?: Date;

    @ManyToOne(() => User, { cascade: true })
    user?: User;
}