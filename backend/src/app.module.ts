import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { BlogpostsModule } from './blogposts/blogposts.module';


// Module order is impoertant as the ConfigModule load env variables.
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !process.env.NODE_ENV ? '.env' : `.env.${process.env.NODE_ENV}`,
      isGlobal: true
    }),     
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      sortSchema: true
    }),
    TypeOrmModule.forRootAsync({      
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true
      })      
      // useFactory: async () =>
      //   Object.assign(await getConnectionOptions(), {
      //     autoLoadEntities: true,
      //   }),
    }),
    BlogpostsModule
  ],
  controllers: [],
  providers: [],
})


export class AppModule {}

