import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(40)
    userName: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(40)
    lastName:string;
    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    userPhone:string;
    @IsNotEmpty()
    @IsString()
    userMail:string;
}












