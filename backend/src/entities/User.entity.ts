import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Project } from "./Project.entity";
import { Permission } from "./Permission.entity";
import { Note } from "./Note.entity";
import { Tag } from "./Tag.entity";

@Entity("Users")
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;
    
    @Column()
    username?: string;
    
    @Column()
    email?: string;

    @Column()
    birthdate?: Date;

    @Column()
    password?: string;

    @Column()
    image?: string;

    @OneToMany(() => Project, (p) => p.user)
    projects?: Project[];

    @OneToMany(() => Permission, (p) => p.user)
    permissions?: Permission[];

    @OneToMany(() => Note, (n) => n.user)
    notes?: Note[];

    @OneToMany(() => Tag, (t) => t.user)
    tags?: Tag[];
}
