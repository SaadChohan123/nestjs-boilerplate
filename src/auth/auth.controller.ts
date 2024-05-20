import { Body, Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthGuard } from './auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from 'src/users/dtos/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signin')
  signIn(@Body() createUserDto: CreateUserDto) {
    const {email,password} = createUserDto;
    return this.authService.signIn(email,password);
  }

  @Serialize(UserDto)
  @UseGuards(AuthGuard)
  @Get('me')
  getProfile() {
    return this.authService.getProfile();
  }
}
