import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {
    @ApiProperty()
    categoryId:number;
    @MinLength(20)
    @MaxLength(300)
    categoryName:String;
}
