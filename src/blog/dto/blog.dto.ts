import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { BaseDto } from "src/base/dto/base.dto";
import { StatusBlog } from "../enums/blog.enum";

export class BlogDto extends BaseDto{
  forEach(arg0: (element: any) => void) {
    throw new Error('Method not implemented.');
  }
  
  @IsNotEmpty()
  @Expose()
  title: string; // tên sản phẩm
  
  @IsNotEmpty()
  @Expose()
  image_url: string[];
  
  @IsNotEmpty()
  @Expose()
  content: string; // hãng
  
  @IsNotEmpty()
  @Expose()
  type: number; // hãng
  
  @IsNotEmpty()
  @Expose()
  status: StatusBlog
}
