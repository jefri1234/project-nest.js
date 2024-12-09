import { Controller, Get,Req,Res} from '@nestjs/common';
//UTILIZANDO EXPRES
import { Request,Response } from 'express';

@Controller()
export class HelloController {

    @Get('/home')
    index(@Req() request: Request, @Res() response:Response   ) {
        console.log(request.url)
        response.status(200).json({
            message: 'Hello World',         
        })
    }
}
