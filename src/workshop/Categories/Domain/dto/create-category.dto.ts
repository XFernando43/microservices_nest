import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto {
    categoryId:number;
    @ApiProperty()
    @MaxLength(80)
    categoryName:String;
}
