
import { addCourse } from '../entity/addCourse.entity';

export const addCourseproviders = [
  {
    provide: 'addCourse123',
    useValue: addCourse,
  },
];