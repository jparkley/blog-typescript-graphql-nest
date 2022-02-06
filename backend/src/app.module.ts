import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { getConnectionOptions } from 'typeorm';
import { BlogpostsModule } from './blogposts/blogposts.module';

// envFilePath: !process.env.NODE_ENV ? '.env' : `.env.${process.env.NODE_ENV}`,

// Module order is impoertant as the ConfigModule load env variables.
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),     
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
    BlogpostsModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}