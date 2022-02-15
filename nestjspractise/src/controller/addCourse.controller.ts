import { Body, Post, Controller, Get, UseFilters } from '@nestjs/common';
import { addCourseService } from"../service/addCourse.service";

@Controller("addCourse")
export class addClassController {
    constructor(private readonly addcourse:addCourseService ) { }
@Post("addCourseToDatabase")
 adding(@Body() request){
    this.addcourse.addingOfCourse(request.courseName,request.courseStartDate,request.userid);
    return {sucess:"true"};
 }
 @Get("listingcourse")
 async listing(@Body() request){
   
     return await this.addcourse.listingOfCourse(request.userid)
}
@Get("updatingcourse")
async updating(@Body()request){
    this.addcourse.updating(request.courseName,request.courseStartDate,request.userid)
    return {"sucess":true}
}
}
function username(params: any, type: any): any {
    throw new Error('Function not implemented.');
}
   
