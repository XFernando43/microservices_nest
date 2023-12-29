import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User{
    @PrimaryGeneratedColumn()
    userId: number;
    @Column()
    userName: string;
    @Column()
    lastName:string;
    @Column()
    userPhone:string;
    @Column()
    userMail:string;
}