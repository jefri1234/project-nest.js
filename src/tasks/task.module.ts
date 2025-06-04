//importamos el decorador module
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';

//MODULO - su rol es básicamente de orquestador/configurador del dominio

@Module({


  imports: [], // si necesita otros módulos (ej: TypeOrmModule, otro módulo, etc.)
  controllers: [TaskController], // el controlador que va a manejar las peticiones
  providers: [],// si necesita otros proveedores (ej: servicios, repositorios, etc.)
  exports: [], // si quieres que otros módulos usen el TaskService

})
export class TaskModule { }
