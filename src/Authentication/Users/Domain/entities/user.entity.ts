import { Account } from "src/Authentication/Accounts/Domain/entities/account.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(()=> Account)
    account:Account;

}
