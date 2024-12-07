import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TaskController{

    //get viene de esa importacion 
    //cuando se visite la url de tipo get se ejecutara la funcion getAllTask
    @Get('/task')
    getAllTask(){
        return "HERE Get all task for you";
    }

    @Get('/')
    home(){
        return "Welcome to home page";
    }

    @Get('/products')
    getProducts(){
        return "HERE Get all products for you";
        }

}