import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    userName: string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    lastName:string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(15)
    userPhone:string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userMail:string;
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userPassword:string;
}



