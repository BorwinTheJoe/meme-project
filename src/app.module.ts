import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './controller/auth';
import { AuthService } from './view';

@Module({
    imports: [],
    controllers: [AppController, AuthController],
    providers: [AppService, AuthService],
})
export class AppModule {}
