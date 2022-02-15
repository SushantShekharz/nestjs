
import { Sequelize } from 'sequelize-typescript';
import { addCourse } from '../entity/addCourse.entity';

export const addCourseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'loginagain',
      });
      sequelize.addModels([addCourse]);
      await sequelize.sync();
      return sequelize;
    },
  },
];