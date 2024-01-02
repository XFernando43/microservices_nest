import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '../../Domain/dto/create-category.dto';
import { UpdateCategoryDto } from '../../Domain/dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../../Domain/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

  constructor(@InjectRepository(Category) private categoryRepository:Repository<Category>){}

  async create(createCategoryDto: CreateCategoryDto) {
    try{
      const cateogry = await this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(cateogry);
    }catch(error){
      throw new HttpException("WEB API ERROR" + error, HttpStatus.NOT_FOUND);
    }
  }

  async findAll() {
    return await this.categoryRepository.find({ relations: ['products'] });
  }

  async findOne(id: number) {
    try{
      const categoryDB = await this.categoryRepository.findOne({
        where:{
          categoryId:id,
        }
      })
      if(categoryDB != null){
        return categoryDB;
      }else{
        return "Not Category found it";      
      }
    }catch(error){
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try{
      const categoryDB = await this.categoryRepository.findOne({
        where:{
          categoryId:id,
        }
      });
      if(categoryDB!=null){
        return await this.categoryRepository.update(id,categoryDB);
      }
    }catch(error){
      throw new HttpException('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: number) {
    return await this.categoryRepository.delete(id);
  }
}
