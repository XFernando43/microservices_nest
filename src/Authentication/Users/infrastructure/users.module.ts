import { Module } from '@nestjs/common';
import { UsersServiceImpl } from '../App/Service/userService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Domain/entities/user.entity';
import { UserController } from '../App/Controller/userController';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersServiceImpl],
})
export class UsersModule {}
