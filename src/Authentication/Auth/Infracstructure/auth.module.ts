import { Module } from '@nestjs/common';
import { AuthService } from '../App/Service/auth.service';
import { AuthController } from '../App/Controller/auth.controller';
import { UsersModule } from 'src/Authentication/Users/infrastructure/users.module';

@Module({
  imports:[UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
