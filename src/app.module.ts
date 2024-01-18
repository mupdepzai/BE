import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product/entities/product.entity';

@Module({
  imports: [ProductModule, 
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '202.92.7.54',
      port: 3306,
      charset: "UTF8",
      username: 'qlxqokrphosting_admin_loa',
      password: 'Phung@123',
      database: 'qlxqokrphosting_test_loa',
      entities: [ProductEntity],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
