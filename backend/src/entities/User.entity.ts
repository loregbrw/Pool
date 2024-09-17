import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}