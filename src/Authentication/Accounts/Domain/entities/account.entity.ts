import { User } from "src/Authentication/Users/Domain/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Account"})
export class Account {
    @PrimaryGeneratedColumn()
    accountId:number;
    @Column()
    email:string;
    @Column({unique:true})
    password:string;

    @OneToOne(()=> User, (user)=>user.account)
    user:User;
}
