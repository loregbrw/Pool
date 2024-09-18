import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { Project } from "./Project.entity";

@Entity("Tags")
export class Tag {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column()
    color?: string;

    @ManyToOne(() => User, { cascade: true })
    user?: User;

    @OneToMany(() => Project, (p) => p.tag)
    projects?: Project[];
}
