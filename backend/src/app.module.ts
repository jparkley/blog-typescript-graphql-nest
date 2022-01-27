import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogpostsController } from './blogposts/blogposts.controller';
import { BlogpostsService } from './blogposts/blogposts.service';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [AppController, BlogpostsController],
  providers: [AppService, BlogpostsService],
})
export class AppModule {}
