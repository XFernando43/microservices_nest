import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from "class-validator";

export class CreateProductDto {
    @ApiProperty()
    @MaxLength(40)
    productName:string;
    @ApiProperty()
    @MaxLength(500)
    productDescription:string;
    @ApiProperty()
    productPrice:number;
    @ApiProperty()
    categoryID:number;

}
