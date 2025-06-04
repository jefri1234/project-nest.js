import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('productssss')
@Controller('/api/products')
export class ProductsController {
  //importo del productService lo "inyecto"
  constructor(private productService: ProductsService) { }

  //cuando se visita esta ruta GET ejectua funcion y retorna
  @Get()
  @ApiOperation({ summary: 'get all products' })
  @ApiResponse({ status: 200, description: 'successfully obtained p roduct' })
  @ApiResponse({ status: 204, description: 'failed response or request' })
  getAllproducts(@Query() jeff: any) {
    console.log(jeff);
    return this.productService.getProduct();
  }


  @Get('/:id')
  @ApiOperation({ summary: 'get product by id' })
  getProductById(@Param('id', ParseIntPipe) id: any) {
    console.log(id);
    console.log(typeof id);
    return 'the product id is:' + id;
  }

  @Post()
  @ApiOperation({ summary: 'create an new product' })
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Put('/:id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() product: CreateProductDto) {
    return this.productService.updateProduct(id, product);
  }


  @Delete('/:id')
  @ApiOperation({ summary: 'update an existing product' })
  deleteProduct(@Param('id', ParseIntPipe) id: any) {
    return this.productService.deleteProduct(id);
  }
}
