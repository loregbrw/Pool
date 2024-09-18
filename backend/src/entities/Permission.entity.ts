import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { Project } from "./Project.entity";
import { EPermission } from "../enums/EPermission.enum";

@Entity("Permissions")
export class Permission {
    @PrimaryGeneratedColumn()
    id?: number;

    @ManyToOne(() => User, { cascade: true })
    user?: User;

    @ManyToOne(() => Project, { cascade: true })
    project?: Project;

    @Column()
    permission?: EPermission;
}