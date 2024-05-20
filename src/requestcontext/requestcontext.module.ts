import { Module } from '@nestjs/common';
import { RequestcontextService } from './requestcontext.service';

@Module({
  providers: [RequestcontextService],
  exports: [RequestcontextService]
})
export class RequestcontextModule {}
