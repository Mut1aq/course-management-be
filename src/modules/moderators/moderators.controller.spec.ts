import { Test, TestingModule } from '@nestjs/testing';
import { ModeratorsController } from './moderators.controller';
import { ModeratorsService } from './moderators.service';

describe('ModeratorsController', () => {
  let controller: ModeratorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModeratorsController],
      providers: [ModeratorsService],
    }).compile();

    controller = module.get<ModeratorsController>(ModeratorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
