import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    product_id: string;

    @IsNotEmpty()
    full_name: string;
    
    image_url: string
}
