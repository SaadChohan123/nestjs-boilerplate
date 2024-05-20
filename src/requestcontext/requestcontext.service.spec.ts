import { Test, TestingModule } from '@nestjs/testing';
import { RequestcontextService } from './requestcontext.service';

describe('RequestcontextService', () => {
  let service: RequestcontextService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestcontextService],
    }).compile();

    service = module.get<RequestcontextService>(RequestcontextService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
