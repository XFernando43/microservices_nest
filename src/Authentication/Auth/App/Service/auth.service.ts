import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../../Domain/dto/create-auth.dto';
import { UpdateAuthDto } from '../../Domain/dto/update-auth.dto';
import { UsersService } from 'src/Authentication/Users/App/Service/userService';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService){

  }

  async validateUser(username:string, password:string):Promise<any>{
    const user = await this.userService.findByUsername(username,password);
    const isValidPassword = await this.userService.checkPassword(password,user.account.password); 
    return null;
  }
}
