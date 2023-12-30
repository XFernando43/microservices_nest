import { Account } from "src/Authentication/Accounts/Domain/entities/account.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(()=> Account, (Account)=> Account.user,{cascade:true})
    account:Account;

}
