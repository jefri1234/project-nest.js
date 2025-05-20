import { Controller, Get } from '@nestjs/common';

@Controller()
export class AuthController {
  @Get('/auth')
  auth() {
    return 'MODULO AUTH';
  }
}
