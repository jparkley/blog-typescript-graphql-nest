import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';

let server: Handler;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe())
  
  const configService = app.get(ConfigService)
  const port = configService.get('PORT')
  //await app.listen(port);

  await app.init()
  const expressApp = app.getHttpAdapter().getInstance()
  return serverlessExpress({ app: expressApp })
}
//bootstrap();
export const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback
) => {
    server = server ??  (await bootstrap())
    return server(event, context, callback)
}