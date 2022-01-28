import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path/posix';
import { BlogpostsModule } from './blogposts/blogposts.module';

// GraphQLModule.forRoot(configuration object)

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    BlogpostsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
