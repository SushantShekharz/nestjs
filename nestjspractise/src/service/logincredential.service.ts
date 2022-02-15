
import { Injectable, Inject } from '@nestjs/common';
import { logincredential } from '../entity/login.entity';

@Injectable()
export class logincredentialService {
  constructor(
    @Inject('logincredential123')
    private login: typeof logincredential
  ) {}
async registration(username,password,email):Promise<any>{
 return  this.login.create({username:username,password:password,email:email});

}
async registrationcheck(username):Promise<any>{
  return this.login.findAll<logincredential>({where:{
    username:username
  }})
}
async username(username,password):Promise<any>{
    return this.login.findAll<logincredential>({
      where: {
        username:username,
        password: password
      }
    });
  }
}

