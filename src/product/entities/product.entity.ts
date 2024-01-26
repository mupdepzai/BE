import * as moment from 'moment';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StatusProduct } from '../enums/product.enum';

@Entity({
  name: 'product',
})
export class ProductEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    type: 'text',
  })
  product_name: string; // tên sản phẩm

  @Column({
    type: 'text',
  })
  image_url: string;

  @Column({
    type: 'text',
  })
  brand: string; // hãng

  @Column({
    type: 'text',
  })
  continuous_power: string; // công suất liên tục

  @Column({
    type: 'text',
  })
  peak_output_power: string; // công suất đỉnh

  @Column({
    type: 'text',
  })
  system_product: string; // hệ thống loa

  @Column({
    type: 'text',
  })
  frequency: string; // tần số

  @Column({
    type: 'text',
  })
  sensitivity: string; // Độ nhạy

  @Column({
    type: 'text',
  })
  Voltage: string; // điện thế

  @Column({
    type: 'text',
  })
  Voltage_ACQUI: string; // điện thế bình ắc quy

  @Column({
    type: 'text',
  })
  length: number; // chiều dài (m)

  @Column({
    type: 'text',
  })
  width: number; // chiều rộng (m)

  @Column({
    type: 'text',
  })
  height: number; // chiều cao (m)

  @Column({
    type: 'text',
  })
  weight: number; // trọng lượng (kg)

  @Column({
    type: 'text',
  })
  material: string; // chất liệu

  @Column({
    type: 'text',
  })
  color: string; // màu

  @Column({
    type: 'text',
  })
  price: number; // đơn giá đơn vị nghìn đồng

  @Column({
    type: 'text',
  })
  status: StatusProduct;

  @Column({
    type: 'text',
  })
  product_assembled_in: string; // Địa chỉ sản phẩm được lắp ráp tại đâu

  @Column({
    type: 'text',
  })
  design_by: string; // thiết kế bởi??

  @Column({
    type: 'text',
  })
  virtual_media: string; // thiết kế bởi??

  @CreateDateColumn({
    type: 'timestamp',
  })
  create_at: number;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: number;
}
