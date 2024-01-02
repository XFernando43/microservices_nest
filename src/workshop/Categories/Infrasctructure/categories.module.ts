import { Module } from '@nestjs/common';
import { CategoriesService } from '../App/Service/categories.service';
import { CategoriesController } from '../App/Controller/categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../Domain/entities/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Category])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
