import { Collection, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Projects")
export class Project {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({ length: 500 })
    description?: string;
}