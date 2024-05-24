import { Body, Controller, Get, Post, UseGuards,Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { AuthGuard, Public } from './auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from 'src/users/dtos/user.dto';
import { CHECK_ABILITIES, CaslGuard } from 'src/casl/casl.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Public()
  @Post('signin')
  signIn(@Body() createUserDto: CreateUserDto) {
    const {email,password} = createUserDto;
    return this.authService.signIn(email,password);
  }

  @Serialize(UserDto)
  @CHECK_ABILITIES(["read","articles"])
  @UseGuards(CaslGuard)
  @Get('me')
  getProfile() {
    return this.authService.getProfile();
  }
}

