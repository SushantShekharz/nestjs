import { Body, Post, Controller, Get, UseFilters } from '@nestjs/common';
import { logincredentialService } from "../service/logincredential.service";

@Controller("login")
export class logincontroller {
  constructor(private readonly lc: logincredentialService) { }

  @Post("login")
  async check(@Body() request) {
    let login = await this.lc.username(request.username, request.password);
  if (login.length == 1) {
      return { sucess: true }
    } else {
      return { sucess: false }
    }
  }
  @Post("registration")
  async todel(@Body() request) {
    let checker = await this.lc.registrationcheck(request.username);
    if (checker.length == 0) {
      this.lc.registration(request.username, request.password, request.email);
      return { sucess: true }
    }
    else {
      return { sucess: false }
    }
  }
}
function username(params: any, type: any): any {
  throw new Error('Function not implemented.');
}

