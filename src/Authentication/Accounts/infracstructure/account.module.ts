import { Module } from '@nestjs/common';
import { AccountService } from '../App/Service/account.service';
import { AccountController } from '../App/Controller/account.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from '../Domain/entities/account.entity';
import { User } from 'src/Authentication/Users/Domain/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Account,User])],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
