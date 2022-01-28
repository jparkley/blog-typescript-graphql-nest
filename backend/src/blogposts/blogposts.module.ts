import { Module } from '@nestjs/common';
import { BlogpostsResolver } from './blogposts.resolver';
import { BlogpostsService } from './blogposts.service';

@Module({
  providers: [BlogpostsService, BlogpostsResolver]
})
export class BlogpostsModule {}
