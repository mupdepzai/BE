import { Expose, Transform } from "class-transformer";
import { IsNotEmpty, isNotEmpty } from "class-validator";
import { BaseDto } from "src/base/dto/base.dto";
import { STATUS } from "../enums/product.enum";

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
    model: string // model

    @IsNotEmpty()
    @Expose()
    power: string // công suất

    @IsNotEmpty()
    @Expose()
    adapter: string // nguồn

    @IsNotEmpty()
    @Expose()
    time_is_battery: string // thời gian sạc

    @IsNotEmpty()
    @Expose()
    time_is_use: string // thời gian sử dụng

    @IsNotEmpty()
    @Expose()
    many_speaker: string // số đường tiếng

    @IsNotEmpty()
    @Expose()
    many_bass: string // loa bass

    @IsNotEmpty()
    @Expose()
    treble: string // loa treble

    @IsNotEmpty()
    @Expose()
    connect_wireless: string // kết nối không dây

    @IsNotEmpty()
    @Expose()
    connect_micro_wireless: string // kết nối micro không dây

    @IsNotEmpty()
    @Expose()
    connect_other: string // các loại kết nối khác

    @IsNotEmpty()
    @Expose()
    port_wired_micro: string // cổng kết nối micro có dây

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
    frequency: string // tần số

    @IsNotEmpty()
    @Expose()
    price: number // đơn giá đơn vị nghìn đồng

    @IsNotEmpty()
    @Expose()
    status: STATUS
    
}
