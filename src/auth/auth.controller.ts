import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(
    @Body() data: { email: string; password: string; name: string },
  ) {
    return this.authService.register(data);
  }

  @Post('login')
  login(
    @Body() data: { email: string; password: string },
  ) {
    return this.authService.login(data);
  }
}
