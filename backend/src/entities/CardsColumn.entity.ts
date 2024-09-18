import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sprint } from "./Sprint.entity";
import { Card } from "./Card.entity";
import { Section } from "./Section.entity";

@Entity("CardsColumn")
export class CardsColumn {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column()
    index?: number;

    @ManyToOne(() => Sprint, { cascade: true })
    sprint?: Sprint;

    @OneToMany(() => Card, (c) => c.column)
    permissions?: Card[];

    @OneToMany(() => Section, (s) => s.column)
    sections?: Section[];
}