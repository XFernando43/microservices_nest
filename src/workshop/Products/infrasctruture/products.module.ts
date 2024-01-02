import { Module } from '@nestjs/common';
import { ProductsService } from '../App/Service/products.service';
import { ProductsController } from '../App/Controller/products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../Domain/entities/product.entity';
import { Category } from 'src/workshop/Categories/Domain/entities/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Product,Category])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {} 
