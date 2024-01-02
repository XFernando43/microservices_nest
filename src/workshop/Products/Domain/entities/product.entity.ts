import { Category } from "src/workshop/Categories/Domain/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("Proeducts")
export class Product {
    @PrimaryGeneratedColumn()
    productId:number;
    @Column()
    productName:string;
    @Column()
    productDescription:string;
    @Column()
    productPrice:number;

    @ManyToOne(()=> Category, category=>category.products)
    @JoinColumn({name:"CategoryId"})
    category:Category;
}
