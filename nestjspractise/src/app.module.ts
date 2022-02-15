import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { addCourseFinal } from './module/addCourse.module';
import { loginModule } from './module/login.module';


@Module({
  imports: [loginModule,addCourseFinal],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
