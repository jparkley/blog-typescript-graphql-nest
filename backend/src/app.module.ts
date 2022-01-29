import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { getConnectionOptions } from 'typeorm';
import { BlogpostsModule } from './blogposts/blogposts.module';

// GraphQLModule.forRoot(configuration object)
// entities:  ['dist/**/*.entity{.ts,.js}'],
// TypeOrmModule.forRoot(),

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
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
