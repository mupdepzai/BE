import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, HttpStatus, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ModuleRef } from '@nestjs/core';
import { ProductEntity } from './entities/product.entity';
import { StatusProduct } from './enums/product.enum';
import { BaseResponse } from './response/base.response';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Res() res: any) {
    const data = await this.productService.create(createProductDto);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }));
  }

  @Get('detail/:id')
  async findOne(@Param('id') id: string, @Res() res: any) {
    const data = await this.productService.findOne(+id);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }));
  }

  @Post('update/:id')
  async update(@Body() createProductDto: CreateProductDto, @Param('id') id: number, @Res() res: any) {
    const data = await this.productService.update(createProductDto, id);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }));
  }

  @Get('list/:status')
  async find(@Param('status') status: number, @Res() res: any) {
    const data = await this.productService.findAll(status);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }));
  }

  @Post('delete/:id')
  async delete(@Param('id') id: number, @Res() res: any) {
    const data = await this.productService.delete(id);
    return res.status(HttpStatus.OK).send(new BaseResponse({ data }));
  }

}
