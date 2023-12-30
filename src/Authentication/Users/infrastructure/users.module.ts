import { Module } from '@nestjs/common';
import { UsersServiceImpl } from '../App/Service/userService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Domain/entities/user.entity';
import { UserController } from '../App/Controller/userController';
import { Account } from 'src/Authentication/Accounts/Domain/entities/account.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,Account])],
  controllers: [UserController],
  providers: [UsersServiceImpl],
})
export class UsersModule {}
