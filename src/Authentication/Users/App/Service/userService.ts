import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../Domain/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../../Domain/dto/create-user.dto";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { HttpErrorByCode } from "@nestjs/common/utils/http-error-by-code.util";

@Injectable()
export class UsersServiceImpl{
    constructor(
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