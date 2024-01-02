import { Module } from '@nestjs/common';
import { ProductsService } from '../App/Service/products.service';
import { ProductsController } from '../App/Controller/products.controller';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
