import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query} from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('/api/products')

export class ProductsController {
    //importo del productService lo "inyecto"
    constructor(private productService:ProductsService){}

    //cuando se visita esta ruta GET ejectua funcion y retorna
    @Get()
    @ApiTags('get all existing products from my store')
    @ApiOperation({summary:"get all products"})
    @ApiResponse({status:200,description:"successfully obtained p roduct"})
    @ApiResponse({status:204,description:"failed response or request"})
    getAllproducts(@Query() jeff:any){
        console.log(jeff)
        return this.productService.getProduct();
    }
    @Get('/:id')
    @ApiOperation({summary:"get product by id"})
    getAllproduct(@Param('id',ParseIntPipe) id:any){
        console.log(id)
        console.log(typeof id)
        return "the product id is:"+id
    }

    @Post()
    @ApiOperation({summary:"create an new product"})
    createProduct(@Body() product:CreateProductDto){
        return this.productService.createProduct(product);
    }
    @Put()
    @ApiOperation({summary:"update an existing product"})
    updateProduct(){
        return this.productService.updateProduct();
    }

    @Delete('/:id')
    @ApiOperation({summary:"update an existing product"})
    deleteProduct(@Param('id',ParseIntPipe) id:any){
        return this.productService.deleteProduct(id);
    }
}
