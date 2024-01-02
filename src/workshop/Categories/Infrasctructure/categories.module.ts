import { Module } from '@nestjs/common';
import { CategoriesService } from '../App/Service/categories.service';
import { CategoriesController } from '../App/Controller/categories.controller';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
