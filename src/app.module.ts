//nest generate module user   --- nest g mo user
//nest generate controller user  --- nest g co user
//nest g co user --no-spec ==> genera el controlador pero sin archivo test
//nest generate service user ==> Genera un servicio 
//nest g s user => forma abreviada crear un servicio
import { Module } from '@nestjs/common';

//my modules imports
import {TaskModule} from './tasks/task.module'
import { AuthModule } from './auth/auth.module';
import { ValidationModule } from './validation/validation.module';
import { CourseModule } from './course/course.module';
import { ProductsModule } from './products/products.module';
import { HelloController } from './hello/hello.controller';
import { PaymentModule } from './payment/payment.module';


@Module({
  //mi archivo app.module principal importa los modulos que tengo en todo mi proyecto
  // mi module principal va ser llamado en el main.ts
  imports: [TaskModule, AuthModule, ValidationModule, CourseModule, ProductsModule, PaymentModule],

  //mi archivo app.module tiene un controlador
  controllers: [HelloController],

})
export class AppModule {}
