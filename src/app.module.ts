
import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { AuthModule } from './auth/auth.module';
import { ValidationModule } from './validation/validation.module';
import { CourseModule } from './course/course.module';
import { ProductsModule } from './products/products.module';
import { HelloController } from './hello/hello.controller';
import { PaymentModule } from './payment/payment.module';

@Module({
  // App.module importa los modulos que tengo en todo mi app ya que es el modulo principal
  // el decorador module me permite importar modulos,controladores y proveedores
  // mi module principal va ser llamado en el main.ts
  imports: [
    TaskModule,
    AuthModule,
    ValidationModule,
    CourseModule,
    ProductsModule,
    PaymentModule,
  ],

  controllers: [HelloController],
})
export class AppModule {}
