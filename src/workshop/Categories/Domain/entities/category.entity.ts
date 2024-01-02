import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({name:"Categories"})
export class Category {
    @PrimaryGeneratedColumn()
    categoryId:number;
    @Column({unique:true})
    categoryName:String;
}
