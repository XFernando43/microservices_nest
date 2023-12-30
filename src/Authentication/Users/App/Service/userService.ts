import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../Domain/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../../Domain/dto/create-user.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { Account } from "src/Authentication/Accounts/Domain/entities/account.entity";
import { CreateAccountDto } from "src/Authentication/Accounts/Domain/dto/create-account.dto";

@Injectable()
export class UsersServiceImpl{
    constructor(
        @InjectRepository(Account) private AccountRepository: Repository<Account>,
        @InjectRepository(User) private UserRepository:Repository<User>
    ){

    }
    async listUser(){

        // throw new HttpException('Error de Peticion',HttpStatus.BAD_REQUEST);

        // return new Promise((resolve,reject)=>{
        //     setTimeout(()=> reject("Error de peticion"),2000);
        // })

        return await this.UserRepository.find();
    }

    async createUser(_user: CreateUserDto){
        try {
            const newUser = this.UserRepository.create(_user);
            const savedUser = await this.UserRepository.save(newUser);
    

            const newAccount: CreateAccountDto={
                email:_user.userMail,
                password:_user.userPassword
            };

            const account = this.AccountRepository.create(newAccount);
            this.AccountRepository.save(account);

            return savedUser; 
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
}