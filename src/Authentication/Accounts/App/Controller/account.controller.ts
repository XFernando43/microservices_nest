import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountService } from '../Service/account.service';
import { CreateAccountDto } from '../../Domain/dto/create-account.dto';
import { UpdateAccountDto } from '../../Domain/dto/update-account.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/v1/account')
@ApiTags("Accounts")
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.accountService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAccountDto: UpdateAccountDto) {
    this.accountService.update(id,updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.accountService.remove(id);
  }
}
