import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CardsColumn } from "./CardsColumn.entity";
import { Section } from "./Section.entity";

@Entity("Cards")
export class Card {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({ length: 1000 })
    description?: string;

    @Column()
    dueDate?: Date;

    @Column()
    status?: boolean;

    @ManyToOne(() => CardsColumn, { cascade: true })
    column?: CardsColumn;

    @Column()
    index?: number;

    @ManyToOne(() => Section, { cascade: true })
    section?: Section;
}