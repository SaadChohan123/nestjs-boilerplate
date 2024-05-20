import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RequestcontextService } from 'src/requestcontext/requestcontext.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private jwtService: JwtService,
        private readonly requestContextService:RequestcontextService
    ) { }

    async signIn(email: string, password: string) {
        const user = await this.usersService.findUserByEmail(email);
        if (!user) {
            throw new NotFoundException('User Not Found.')
        }
        if (user.password !== password) {
            throw new UnauthorizedException('Invalid Credentials');
        }
        const payload = { sub: user._id, email: user.email };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async getProfile(){
        const user = await this.usersService.findUserById(this.requestContextService.getUserId());
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}
