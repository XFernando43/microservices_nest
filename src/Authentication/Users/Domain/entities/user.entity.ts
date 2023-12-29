import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'user'})
export class User {
    @PrimaryGeneratedColumn()
    userId: number;
    @Column()
    userName: string;
    @Column()
    lastName:string;
    @Column()
    userPhone:string;
    @Column({unique:true})
    userMail:string;
}
