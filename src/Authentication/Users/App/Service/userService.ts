import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../Domain/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../../Domain/dto/create-user.dto";
import { Injectable } from "@nestjs/common";
import { checkPrimeSync } from "crypto";

@Injectable()
export class UsersServiceImpl{
    constructor(
        @InjectRepository(User) private UserRepository:Repository<User>
    ){

    }
    async listUser(){
        return await this.UserRepository.find();
    }

    async createUser(_user: any){
        try {
            console.log(_user);
    
            const newUser = this.UserRepository.create(_user);
            const savedUser = await this.UserRepository.save(newUser);
    
            return savedUser; 
        } catch (error) {
            console.log(error);
            throw error; 
        }
    }
}