import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../Domain/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../../Domain/dto/create-user.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";
import { Account } from "src/Authentication/Accounts/Domain/entities/account.entity";
import { CreateAccountDto } from "src/Authentication/Accounts/Domain/dto/create-account.dto";
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersServiceImpl{
    constructor(
        @InjectRepository(Account) private AccountRepository: Repository<Account>,
        @InjectRepository(User) private UserRepository:Repository<User>
    ){}

    async hashPassword(password:string):Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password,salt);
    }

    async listUser():Promise<User[]>{
        return await this.UserRepository.find();
    }

    async getUserId(id:number):Promise<User>{
        return await this.UserRepository.findOne({
            where:{
                userId:id,
            }
        })
    }

    async createUser(_user: CreateUserDto){
        try {
            const hashedPassword = await this.hashPassword(_user.userPassword);
            const newUser = this.UserRepository.create(_user);
            const savedUser = await this.UserRepository.save(newUser);
      
            const newAccount: CreateAccountDto={
                email:_user.userMail,
                password:hashedPassword
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