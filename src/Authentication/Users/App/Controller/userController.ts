import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersServiceImpl } from "../Service/userService";
import { CreateUserDto } from "../../Domain/dto/create-user.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("api/v1/user")
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