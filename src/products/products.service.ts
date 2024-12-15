import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

//crear una interfaz para productos
export interface Producto{
    id:number;
    name:string;
    price:number;
}

@Injectable()
export class ProductsService {
    //constructor paara usar prisma 
    constructor(private prisma: PrismaService) {}

    //el (:Productos) decimos para validad datos le pasamos una interfaz
    //tambien pasarle(:int , boolean , object , array ,string)
    getProduct(){      
        //realizacion de una consulta to my db with prisma            
        return this.prisma.products.findMany()
    }
    createProduct(product:any){
        return this.prisma.products.create({data:product})
    }
    updateProduct(){
        return "product update in my service the products code "
    }

    deleteProduct(id:any){
        console.log("el valor de delete es: ",typeof(id))
        //funcion para elimionar un registro

        return this.prisma.products.delete({
            where:{
                id:id
            }
        })
        
    }
} 
