import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../../Domain/dto/create-product.dto';
import { UpdateProductDto } from '../../Domain/dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from '../../Domain/entities/product.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/workshop/Categories/Domain/entities/category.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepository:Repository<Product>,
              @InjectRepository(Category) private categoryRepository:Repository<Category>
  ) {
   
  }

  async create(createProductDto:CreateProductDto){
    try{
      const categoryFromDB = await this.categoryRepository.findOne({
        where:{
          categoryId:createProductDto.categoryID
        }
      })

      createProductDto.category = categoryFromDB;

      const productToDb = await this.productRepository.create(createProductDto);
      
      return await this.productRepository.save(productToDb);
    }catch(error){
      throw new HttpException("WEB API ERROR" + error, HttpStatus.NOT_FOUND);
    }
  }

  async findAll():Promise<Product[]>{
    try{
      return await this.productRepository.find();
    }catch(error){
      throw new HttpException("Error in WEBAPI", HttpStatus.NOT_FOUND);
    }
  }

  async findOne(id: number):Promise<Product | string> {
    try{

      const ProductFromDB = await this.productRepository.findOne({
        where:{
          productId:id
        }
      })
      if (ProductFromDB) {
        return ProductFromDB;
    } else {
        return "Producto no encontrado"
    }
    }catch(error){
      throw new HttpException("WEB API ERROR" + error , HttpStatus.BAD_GATEWAY);
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try{
      const producFromDb = await this.productRepository.findOne({
        where:{
          productId:id
        }
      })
      if(producFromDb){
        return await this.productRepository.update(id,updateProductDto);
      }else{
        throw new HttpException("Some happend here", HttpStatus.CONFLICT);
      }
    }catch(error){
      throw new HttpException("Some happend here", HttpStatus.CONFLICT);
    }
  }

  async remove(id: number) {
    try{
      return await this.productRepository.delete(id);
    }catch(error){
      throw new HttpException("Some happend here", HttpStatus.CONFLICT);
    }
  }
}
