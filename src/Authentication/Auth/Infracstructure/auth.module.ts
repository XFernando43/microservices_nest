import { Module } from '@nestjs/common';
import { AuthService } from '../App/Service/auth.service';
import { AuthController } from '../App/Controller/auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
