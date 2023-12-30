import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersServiceImpl } from "../Service/userService";
import { CreateUserDto } from "../../Domain/dto/create-user.dto";
import { ApiTags } from "@nestjs/swagger";
import * as bcrypt from 'bcrypt';

@Controller("api/v1/user")
@ApiTags("users")
export class UserController{
    constructor(private userService:UsersServiceImpl){}
    
    @Get()
    getUser(){
        return this.userService.listUser();
    }

    async hashPassword(password:string):Promise<string>{
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password,salt);
    }

    @Post("postUser")
    createUser(@Body() userRequest:CreateUserDto ){


        return this.userService.createUser(userRequest);
    }
}