import { Controller, Get } from "@nestjs/common";

@Controller({})
export class TaskController{

    //get viene de esa importacion 
    //cuando se visite la url de tipo get se ejecutara la funcion getAllTask
    @Get('/api/task')
    getAllTask(){
        return "HERE Get all task for you";
    }

    @Get('/api/tasks')
    home(){
        return "MODULO TASK: listado de tasks";
    }

}