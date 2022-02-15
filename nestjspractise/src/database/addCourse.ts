import { Module } from '@nestjs/common';
import { addCourseProviders } from '../provider/addCourseDatabase.providers';

@Module({
  providers: [...addCourseProviders],
  exports: [...addCourseProviders],
})
export class addCourseModule {}