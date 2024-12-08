import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/api/products')
export class ProductsController {

    //importo del productService lo "inyecto"
    constructor(private productService:ProductsService){}

    //cuando se visita esta ruta ejectua funcion y retorna
    @Get()
    getAllproducts(@Query() jeff:any){
        console.log(jeff)
        return this.productService.getProduct();
    }
    @Get('/:id')
    getAllproduct(@Param('id',ParseIntPipe) id:any){
        console.log(id)
        console.log(typeof id)
        return "the product id is:"+id
    }

    @Post()
    createProduct(@Body() product:any){
        return this.productService.createProduct(product);
    }
    @Put()
    updateProduct(){
        return this.productService.updateProduct();
    }

}
