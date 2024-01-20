import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductService {

  constructor(
    @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>
  ) {

  }


  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    let image_url = ''
    createProductDto.image_url.forEach(i => {
      image_url += (i + "|")
    })
    const save_product = await this.productRepository.save({
      full_name: createProductDto.full_name,
      image_url,
    })
    return plainToInstance(ProductEntity, save_product)
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return this.productRepository.findOne({
      where: {id}
    })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
