import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from '../../Domain/dto/create-auth.dto';
import { UpdateAuthDto } from '../../Domain/dto/update-auth.dto';
import { UsersServiceImpl } from 'src/Authentication/Users/App/Service/userService';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersServiceImpl){

  }

  validateUser(username:string, password:string):Promise<any>{
    // const user = this.userService.
    return null;
  }
}
