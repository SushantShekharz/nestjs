import { logincredential } from '../entity/login.entity';

export const logincredentialprovider = [
  {
    provide: 'logincredential123',
    useValue: logincredential,
  },
];