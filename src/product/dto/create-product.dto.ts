import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, isNotEmpty } from "class-validator";
import { BaseDto } from "src/base/dto/base.dto";
import { StatusProduct } from "../enums/product.enum";

export class CreateProductDto extends BaseDto{
  forEach(arg0: (element: any) => void) {
    throw new Error('Method not implemented.');
  }
  
  @IsNotEmpty()
  @Expose()
  product_name: string; // tên sản phẩm
  
  @IsNotEmpty()
  @Expose()
  image_url: string[];
  
  @IsNotEmpty()
  @Expose()
  brand: string; // hãng
  
  @IsNotEmpty()
  @Expose()
  continuous_power: string // công suất liên tục
  
  @IsNotEmpty()
  @Expose()
  peak_output_power: string // công suất đỉnh
  
  @IsNotEmpty()
  @Expose()
  system_product: string // hệ thống loa
  
  @IsNotEmpty()
  @Expose()
  frequency: string // tần số
  
  @IsNotEmpty()
  @Expose()
  sensitivity: string // Độ nhạy

  @IsNotEmpty()
  @Expose()
  Voltage: string // điện thế
  
  @IsNotEmpty()
  @Expose()
  Voltage_ACQUI: string // điện thế bình ắc quy

  @IsNotEmpty()
  @Expose()
  length: number // chiều dài (m)
  
  @IsNotEmpty()
  @Expose()
  width: number // chiều rộng (m)
  
  @IsNotEmpty()
  @Expose()
  height: number // chiều cao (m)
  
  @IsNotEmpty()
  @Expose()
  weight: number // trọng lượng (kg)
  
  @IsNotEmpty()
  @Expose()
  material: string // chất liệu
  
  @IsNotEmpty()
  @Expose()
  color: string // màu
  
  @IsNotEmpty()
  @Expose()
  price: number // đơn giá đơn vị nghìn đồng
  
  @IsNotEmpty()
  @Expose()
  status: StatusProduct
  
  @IsNotEmpty()
  @Expose()
  product_assembled_in: string // Địa chỉ sản phẩm được lắp ráp tại đâu
  
  @IsNotEmpty()
  @Expose()
  design_by: string // thiết kế bởi??
    
}
