
// DTO (Data Transfer Object) que define la estructura de los datos que se esperan al crear un producto
// Aqui defino las reglas de validación para los datos que se envían al crear un producto.

//Traendo unos decoradores
import { IsString, IsNumber, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(4)
  name: string;

  @IsNumber()
  price: number;
}
