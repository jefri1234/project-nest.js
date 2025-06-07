import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //En ves de agregar el usePipes uno x uno en cada controller lo colocamos en el file main.ts
  //Todas la rutas tendran validacione siempre en cuando tengan un DTO
  app.useGlobalPipes(new ValidationPipe());

  //configuracion copiada de la documentacion de swuagger---------------------------------
  // para el funcionamiento de SWUAGGER
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  //------------------end code --------------------------------------------------


  //----habilitar CORS
  // app.enableCors(); //habilitar todo
  app.enableCors({
    origin: ['http://localhost:3000', 'https://mi-dominio.com'], // Dominios permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si necesitas cookies/autenticación cruzada
  });
  // end code for enable CORS

  //reading enviroment variable by defaul port 5000
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
