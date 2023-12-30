import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from '../Service/account.service';
import { CreateAccountDto } from '../../Domain/dto/create-account.dto';
import { UpdateAccountDto } from '../../Domain/dto/update-account.dto';

@Controller('api/v1/account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {

  }

  @Get()
  findAll() {

  }

  @Get(':id')
  findOne(@Param('id') id: string) {

  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  }
}
