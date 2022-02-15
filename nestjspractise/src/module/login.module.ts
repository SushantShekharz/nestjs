
import { Module } from '@nestjs/common';
import { logincontroller } from '../controller/login.controller';
import { logincredentialService } from '../service/logincredential.service';
import {logincredentialprovider} from '../provider123/logincredential.providers';
import { DatabaseModule } from '../database/DatabaseModule';
@Module({
  imports: [DatabaseModule],
  controllers: [logincontroller],
  providers: [
    logincredentialService,
    ...logincredentialprovider,
  ],
})
export class loginModule {}