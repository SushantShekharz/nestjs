
import { Table, Column, Model } from 'sequelize-typescript';
@Table
export class addCourse extends Model {
    @Column
    courseName: string;
    @Column
    courseStartDate:Date;
    @Column
    userid:string;
    
}