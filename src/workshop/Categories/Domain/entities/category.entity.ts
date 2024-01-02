import { Product } from "src/workshop/Products/Domain/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name:"Categories"})
export class Category {
    @PrimaryGeneratedColumn()
    categoryId:number;
    @Column({unique:true})
    categoryName:String;

    @OneToMany(()=> Product, product=>product.category)
    products:Product[];
}
