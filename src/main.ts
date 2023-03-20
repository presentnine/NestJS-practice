import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { HttpExceptionFilter } from "@exception/http-exception.filter";
import { HOST, PORT } from "@utils/env";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "./app.module";

function swagger(app: NestExpressApplication) {
  const swaggerDocumentBuilder = new DocumentBuilder()
    .setTitle("NestJS boilerplate API Docs")
    .setDescription("NestJS boilerplate API description")
    .setVersion("1.0")
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerDocumentBuilder);
  SwaggerModule.setup("api", app, swaggerDocument);
}

async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter()); // 전역 필터 적용

  app.enableCors({
    origin: [HOST],
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  });

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 없는 값은 거르고 에러메세지 출력
      forbidNonWhitelisted: true, // DTO에 존재하지않는 값이 들어오면 에러메세지출력
      transform: true, // 넘어오는값은 무조건 String이라 하나하나 원하는 타입으로 바꿔줘야하는데 이런 불편함을 없애줌
    }),
  );

  swagger(app);

  await app.listen(PORT as string);
}

bootstrap();
