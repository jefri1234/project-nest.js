import { Controller, Get,Req,Res} from '@nestjs/common';
//UTILIZANDO EXPRES
import { Request,Response } from 'express';

@Controller()
export class HelloController {

    // USO DE CONBINACION DE (EXPRESS)
    //los controladores son funciones que se ejecutan cuando una ruta(url) es visitada

    @Get('/')
    index(@Req() req: Request, @Res() res:Response   ) {
        console.log(req.url)
        res.status(200).json({
            message: 'ROUTE HOME',         
        })
    }
}
