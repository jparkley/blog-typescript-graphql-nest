import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blogpost } from './blogpost.entity';
import { BlogpostsResolver } from './blogposts.resolver';
import { BlogpostsService } from './blogposts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Blogpost])],
  providers: [BlogpostsService, BlogpostsResolver]
})
export class BlogpostsModule {}
