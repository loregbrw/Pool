import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EPermission } from "../enums/EPermission.enum";
import BaseEntity from "./BaseEntity.entity";
import User from "./User.entity";
import Project from "./Project.entity";

@Entity("Permissions")
export default class Permission extends BaseEntity {
    @ManyToOne(() => User, { cascade: true })
    user?: User;

    @ManyToOne(() => Project, { cascade: true })
    project?: Project;

    @Column({
        type: "enum",
        enum: EPermission,
        default: EPermission.VIEWER
    })
    permission?: EPermission;
}