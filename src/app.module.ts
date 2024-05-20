import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      database:'Boilerplate',
      url:
        'mongodb://host.docker.internal:27017',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
      useNewUrlParser: true,
      logging: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
