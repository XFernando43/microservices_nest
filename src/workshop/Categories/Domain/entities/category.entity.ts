import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Categories"})
export class Category {
    @PrimaryGeneratedColumn()
    categoryId:number;
    @Column()
    categoryName:String;
}
