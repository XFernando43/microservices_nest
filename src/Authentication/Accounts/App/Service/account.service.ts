import { Injectable } from '@nestjs/common';
import { UpdateAccountDto } from '../../Domain/dto/update-account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from '../../Domain/entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private AccountRepository: Repository<Account>,
  ){

  }

  async findAll():Promise<Account[]> {
    return await this.AccountRepository.find();
  }

  async findOne(id: number):Promise<Account> {
    return await this.AccountRepository.findOne({
      where: {
        accountId:id,
      }
    });
  }


  async update(id: number, updateAccountDto: UpdateAccountDto) {
    if(id != 0 || id != null){
      const accountFromDb = await this.AccountRepository.findOne({
        where:{
          accountId:id,
        }
      })

      accountFromDb.email = updateAccountDto.email;
      accountFromDb.password = updateAccountDto.password;

      if(accountFromDb != null){
        await this.AccountRepository.update(id,accountFromDb);
      }
    }else{
      throw new Error("Ocurrio un error al servidor");
    }

  }

  remove(id: number) {
    return this.AccountRepository.delete(id);
  }
}
