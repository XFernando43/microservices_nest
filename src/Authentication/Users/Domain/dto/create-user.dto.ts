import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    userName: string;
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    lastName:string;
    @IsNotEmpty()
    @IsString()
    @MaxLength(10)
    userPhone:string;
    @IsNotEmpty()
    @IsString()
    userMail:string;
    @IsNotEmpty()
    @IsString()
    userPassword:string;
}



