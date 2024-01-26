import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { StatusProduct } from './enums/product.enum';
import { BaseResponse } from './response/base.response';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>
  ) {

  }


  async create(createProductDto: CreateProductDto): Promise<{id: number}> {
    let image_url = ''
    createProductDto.image_url.forEach(i => {
      image_url += (i + "|")
    })
    const save_product = await this.productRepository.save({
      product_name: createProductDto.product_name,
      image_url,
      continuous_power: createProductDto.continuous_power,
      brand: createProductDto.brand,
      color: createProductDto.color,
      peak_output_power: createProductDto.peak_output_power,
      system_product: createProductDto.system_product,
      sensitivity: createProductDto.sensitivity,
      frequency: createProductDto.frequency,
      height: createProductDto.height,
      length: createProductDto.length,
      Voltage: createProductDto.Voltage,
      Voltage_ACQUI: createProductDto.Voltage_ACQUI,
      material: createProductDto.material,
      product_assembled_in: createProductDto.product_assembled_in,
      design_by: createProductDto.design_by,
      weight: createProductDto.weight,
      width: createProductDto.width,
      price: createProductDto.price
    })
    return {id: save_product.id}
  }

  async update(createProductDto: CreateProductDto, id: number) {
    let image_url = ''
    createProductDto.image_url.forEach(i => {
      image_url += (i + "|")
    })
    const result = await this.productRepository.update({
      id: id
    }, {
      product_name: createProductDto.product_name,
      image_url,
      continuous_power: createProductDto.continuous_power,
      brand: createProductDto.brand,
      color: createProductDto.color,
      peak_output_power: createProductDto.peak_output_power,
      system_product: createProductDto.system_product,
      sensitivity: createProductDto.sensitivity,
      frequency: createProductDto.frequency,
      height: createProductDto.height,
      length: createProductDto.length,
      Voltage: createProductDto.Voltage,
      Voltage_ACQUI: createProductDto.Voltage_ACQUI,
      material: createProductDto.material,
      product_assembled_in: createProductDto.product_assembled_in,
      design_by: createProductDto.design_by,
      weight: createProductDto.weight,
      width: createProductDto.width,
      price: createProductDto.price,
      status: createProductDto.status,
    })
    return
  }

  async findAll(status: number) {
    const a= this.productRepository.createQueryBuilder('p')
    if(status != -1){
      a.where('p.status =:status',{status})
      
    }
    a.andWhere('p.status !=:delete',{delete:StatusProduct.DELETED})
    const result = await a.getMany()
    return result.map(i => {
      let image_url = i.image_url.split('|')
      image_url.pop()
      return {...i,image_url}
    })
  }

  async findOne(id: number) {
    let result = await this.productRepository.findOne({
      where: {id}
    })
    let image_url = result.image_url.split('|')
    image_url.pop()
    return {
      ...result,
      image_url
    }
  }


  async delete(id: number) {
    const result = await this.productRepository.update({
      id: id
    }, {
      status: StatusProduct.DELETED
    })
    return
  }
}
