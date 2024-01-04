import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from '../Service/auth.service';
import { CreateAuthDto } from '../../Domain/dto/create-auth.dto';
import { UpdateAuthDto } from '../../Domain/dto/update-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

}
