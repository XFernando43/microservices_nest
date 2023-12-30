import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersServiceImpl } from "../Service/userService";
import { CreateUserDto } from "../../Domain/dto/create-user.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("user")
@ApiTags("users")
export class UserController{
    constructor(private userService:UsersServiceImpl){}
    
    @Get()
    getUser(){
        return this.userService.listUser();
    }

    @Post("postUser")
    createUser(@Body() userRequest:CreateUserDto ){
        return this.userService.createUser(userRequest);
    }
}