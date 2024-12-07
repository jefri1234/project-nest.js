import { Injectable } from '@nestjs/common';

//crear una interfaz para productos
export interface Producto{
    id:number;
    name:string;
    price:number;
}

@Injectable()
export class ProductsService {

    private productos=[1,2,3]

    private products = [
        {
            id: 1, name: 'Product 1', price: 10.99
        },
        {
            id: 2, name: 'Product 2', price: 9.99
        },
        {
            id: 3, name: 'Product 3', price: 10.99
        }
    ];
    //el (:Productos) decimos para validad datos le pasamos una interfaz
    //tambien pasarle(:int , boolean , object , array ,string)
    getProduct(){                 
        return this.productos
    }
    createProduct(product:any){
        //guardar en el areglo
        this.productos.push(product);
        return {data:"dato creado"}
    }
    updateProduct(){
        return "product update in my service the products code "
    }
} 
