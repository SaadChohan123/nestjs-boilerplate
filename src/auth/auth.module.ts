import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/common/constants';
import { UsersModule } from 'src/users/users.module';
import { RequestcontextModule } from 'src/requestcontext/requestcontext.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '7d' },
    }),
    UsersModule,
    RequestcontextModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
