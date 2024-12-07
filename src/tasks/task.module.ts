//importamos el decorador module
import { Module } from '@nestjs/common'
import { TaskController } from './task.controller'
//ejecutar un decorador
@Module({
    //este mi modulo TASK puede tener varios controladores 
    //en el controlador especificamos la funcionalidad y ruta api
    controllers:[TaskController],
})
export class TaskModule { }