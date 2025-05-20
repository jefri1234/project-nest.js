import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  //un modulo puede tener varios controladores
  controllers: [ProductsController],

  //un modulo puede tener varios servicios
  providers: [ProductsService, PrismaService],
})
export class ProductsModule {}
