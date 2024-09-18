import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CardsColumn } from "./CardsColumn.entity";
import { Card } from "./Card.entity";

@Entity("Sections")
export class Section {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column()
    color?: string;

    @Column()
    index?: number;

    @ManyToOne(() => CardsColumn, { cascade: true })
    column?: CardsColumn;

    @OneToMany(() => Card, (c) => c.section)
    cards?: Card[];
}