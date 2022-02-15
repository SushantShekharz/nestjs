
import { Module } from '@nestjs/common';
import { addClassController} from '../controller/addCourse.controller';
import { addCourseService } from '../service/addCourse.service';
import { addCourseModule } from '../database/addCourse';
import { addCourseproviders} from 'src/provider123/addCourse.providers';

@Module({
  imports: [addCourseModule],
  controllers: [addClassController],
  providers: [
    addCourseService,
    ...addCourseproviders ,
  ],
})
export class addCourseFinal {}