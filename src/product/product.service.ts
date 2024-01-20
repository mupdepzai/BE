import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { STATUS } from './enums/product.enum';
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
      adapter: createProductDto.adapter,
      brand: createProductDto.brand,
      color: createProductDto.color,
      connect_micro_wireless: createProductDto.connect_micro_wireless,
      connect_other: createProductDto.connect_other,
      connect_wireless: createProductDto.connect_wireless,
      frequency: createProductDto.frequency,
      height: createProductDto.height,
      length: createProductDto.length,
      many_bass: createProductDto.many_bass,
      many_speaker: createProductDto.many_speaker,
      material: createProductDto.material,
      model: createProductDto.model,
      port_wired_micro: createProductDto.port_wired_micro,
      power: createProductDto.power,
      time_is_battery: createProductDto.time_is_battery,
      time_is_use: createProductDto.time_is_use,
      treble: createProductDto.treble,
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
      adapter: createProductDto.adapter,
      brand: createProductDto.brand,
      color: createProductDto.color,
      connect_micro_wireless: createProductDto.connect_micro_wireless,
      connect_other: createProductDto.connect_other,
      connect_wireless: createProductDto.connect_wireless,
      frequency: createProductDto.frequency,
      height: createProductDto.height,
      length: createProductDto.length,
      many_bass: createProductDto.many_bass,
      many_speaker: createProductDto.many_speaker,
      material: createProductDto.material,
      model: createProductDto.model,
      port_wired_micro: createProductDto.port_wired_micro,
      power: createProductDto.power,
      time_is_battery: createProductDto.time_is_battery,
      time_is_use: createProductDto.time_is_use,
      treble: createProductDto.treble,
      weight: createProductDto.weight,
      width: createProductDto.width,
      price: createProductDto.price,
      status: createProductDto.status
    })
    return
  }

  findAll(status: number) {
    const a= this.productRepository.createQueryBuilder('p')
    if(status != -1){
      a.where('p.status =:status',{status})
      
    }
    a.andWhere('p.status !=:delete',{delete:STATUS.DELETED})
    const result = a.getMany()
    return result
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where: {id}
    })
  }


  async delete(id: number) {
    const result = await this.productRepository.update({
      id: id
    }, {
      status: STATUS.DELETED
    })
    return
  }
}
