import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../../Domain/dto/create-auth.dto';
import { UpdateAuthDto } from '../../Domain/dto/update-auth.dto';
import { UsersService } from 'src/Authentication/Users/App/Service/userService';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/Authentication/Users/Domain/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService,
              private readonly jwtService:JwtService){}

  async validateUser(username:string, password:string):Promise<any>{
    const user = await this.userService.findByUsername(username,password);
    const isValidPassword = await this.userService.checkPassword(password,user.account.password); 
    if(user && isValidPassword){
      return user;
    }
    throw new HttpException("Not User Validated", HttpStatus.INTERNAL_SERVER_ERROR);
  }

  async signIn(user:any){
    const payload = {
      username:user.username,
      sub:user.id,
    }

    return {access_token: this.jwtService.sign(payload)};
  }

  async signUp(userDto: CreateUserDto){
    return await this.userService.createUser(userDto);
  }

}
