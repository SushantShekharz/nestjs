import { Injectable, Inject } from '@nestjs/common';
import { addCourse } from '../entity/addCourse.entity';
@Injectable()
export class addCourseService {
  constructor(
    @Inject('addCourse123')
    private x: typeof addCourse
  ) {}

  async addingOfCourse(courseName,courseStartDate,userid):Promise<any>{
    return  this.x.create({courseName:courseName,courseStartDate:courseStartDate,userid:userid});
}
async updating(courseName,courseStartDate,userid):Promise<any>{
  return this.x.update({courseName:courseName,courseStartDate:courseStartDate,userid:userid},{where:{
    userid:userid
  }})
}
async listingOfCourse(userid):Promise<any>{
  return this.x.findAll<addCourse>({attributes:["courseName","courseStartDate"],where:{
    userid:userid
  }})
}
}