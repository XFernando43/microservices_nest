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
export class UsersService{
    constructor(
        @InjectRepository(Account) private AccountRepository: Repository<Account>,
        @InjectRepository(User) private UserRepository:Repository<User>
    ){}
    
    async checkPassword(password:string, passwordDb:string):Promise<boolean>{
        return await bcrypt.compare(password,passwordDb);
    }

    async findByUsername(username:string, password:string){
        return await this.UserRepository.findOne({
            where:{
                userName:username
            },
            relations: ['account']
        })
    }

    async hashPassword(password:string):Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password,salt);
    }

    async findAll():Promise<User[] | any>{
        try{
            const users = await this.UserRepository.find({relations: ['account']});
            if(users && users.length > 0){
                return users
            }else{
                throw new HttpException("No hay usuarios disponibles", HttpStatus.AMBIGUOUS);
            }
        }catch(error){

        }
    }   

    async finOne(id:number):Promise<User>{
        try{
            const user = await this.UserRepository.findOne({
                where:{
                    userId:id,
                },
                relations: ['account']
            })
            if(user){
                return user;
            }else{
                throw new HttpException(`User with ID ${id} not found`, HttpStatus.NOT_FOUND);
            }
        }catch(error){
            throw new HttpException("not Users found", HttpStatus.AMBIGUOUS);
        }
    }

    async createUser(_user: CreateUserDto){
        try {
            const hashedPassword = await this.hashPassword(_user.userPassword);
            const newUser = this.UserRepository.create(_user);
            
            const newAccount: CreateAccountDto={
                email:_user.userMail,
                password:hashedPassword
            };
            
            const account = this.AccountRepository.create(newAccount);
            this.AccountRepository.save(account);
            
            newUser.account = account;

            const savedUser = await this.UserRepository.save(newUser);

            return savedUser; 
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
}