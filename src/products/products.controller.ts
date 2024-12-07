import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('/api/products')
export class ProductsController {

    //importo del productService lo "inyecto"
    constructor(private productService:ProductsService){}

    //cuando se visita esta ruta ejectua funcion y retorna
    @Get()
    getAllproduct(@Query() jeff:any){
        console.log(jeff)
        return this.productService.getProduct();
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
