
import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class logincredential extends Model {
  @Column
  username: string;

  @Column
  password: string;
  static get: any;
  @Column
  email:string;
            

  
 

}