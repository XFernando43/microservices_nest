import { Module } from '@nestjs/common';
import { UsersService } from '../App/Service/userService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Domain/entities/user.entity';
import { UserController } from '../App/Controller/userController';
import { Account } from 'src/Authentication/Accounts/Domain/entities/account.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Account])],
  controllers: [UserController],
  providers: [UsersService],
  exports:[UsersService],
})
export class UsersModule {}
