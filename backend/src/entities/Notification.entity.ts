import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import BaseEntity from "./BaseEntity.entity";
import User from "./User.entity";

@Entity("Notifications")
export default class Notification extends BaseEntity {
    @ManyToOne(() => User, { cascade: true })
    user?: User;

    @Column()
    status?: boolean;

    @Column()
    date?: Date;

    @Column({ type: "nvarchar", length: "MAX" })
    content?: string;
}