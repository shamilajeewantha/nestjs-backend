import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    // Enable CORS
    app.enableCors({
      origin: '*', // Replace with your desired origin
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Accept',
      credentials: true,
    });
  await app.listen(3000);
}
bootstrap();
