import { Column, Entity, ManyToOne, NumericType, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project.entity";
import { CardsColumn } from "./CardsColumn.entity";

@Entity("Sprints")
export class Sprint {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column()
    initialDate?: Date;

    @Column()
    duration?: number;

    @ManyToOne(() => Project, { cascade: true })
    project?: Project;

    @OneToMany(() => CardsColumn, (c) => c.sprint)
    columns?: CardsColumn[];
}