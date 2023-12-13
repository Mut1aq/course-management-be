import { Test, TestingModule } from '@nestjs/testing';
import { ModeratorsService } from './moderators.service';

describe('ModeratorsService', () => {
  let service: ModeratorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModeratorsService],
    }).compile();

    service = module.get<ModeratorsService>(ModeratorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
