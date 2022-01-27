import { Test, TestingModule } from '@nestjs/testing';
import { BlogpostsController } from './blogposts.controller';

describe('BlogpostsController', () => {
  let controller: BlogpostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogpostsController],
    }).compile();

    controller = module.get<BlogpostsController>(BlogpostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
