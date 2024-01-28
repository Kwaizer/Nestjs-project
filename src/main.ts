import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.modules";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "./pipes/validation.pipes";

async function start() {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Backend course')
        .setDescription('REST API')
        .setVersion('1.0.0')
        .addTag('me')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document)

    app.useGlobalPipes(new ValidationPipe()) // global validation

    await app.listen(PORT, ()=> console.log(`server started at ${PORT}`))
}

start()