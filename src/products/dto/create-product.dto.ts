//Traendo unos decoradores
import {
    IsString,
    IsNumber,
    MinLength
} from 'class-validator'

export class CreateProductDto{

    @IsString()
    @MinLength(4)
    name:string

    @IsNumber()
    price:number
}