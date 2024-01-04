import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "../Service/userService";
import { CreateUserDto } from "../../Domain/dto/create-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("api/v1/user")
@ApiTags("users")
export class UserController{
    constructor(private userService:UsersService){}
    
    @Get("GetUsers")
    async getUsers(){
        return await this.userService.findAll();
    }
 
    @Post("postUser")
    @ApiOperation({summary:"Crea un usuario y una cuenta relacionada"})
    async createUser(@Body() userRequest:CreateUserDto ){
        return await this.userService.createUser(userRequest);
    }

    @Get(":id")
    async getUserById(@Param('id') id:number){
        return await this.userService.finOne(id);
    }
}