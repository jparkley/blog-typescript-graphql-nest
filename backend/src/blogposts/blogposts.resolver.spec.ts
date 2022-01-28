import { Test, TestingModule } from '@nestjs/testing';
import { BlogpostsResolver } from './blogposts.resolver';

describe('BlogpostsResolver', () => {
  let resolver: BlogpostsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogpostsResolver],
    }).compile();

    resolver = module.get<BlogpostsResolver>(BlogpostsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
