
import { Sequelize } from 'sequelize-typescript';
import { logincredential } from '../entity/login.entity';

export const databaseProviders = [
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
      sequelize.addModels([logincredential]);
      await sequelize.sync();
      return sequelize;
    },
  },
];