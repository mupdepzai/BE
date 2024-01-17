import { Expose, Transform } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { BaseDto } from "src/base/dto/base.dto";

export class CreateProductDto extends BaseDto{
    @Expose()
    full_name: string;
    
    @Expose()
    image_url: string;
}
