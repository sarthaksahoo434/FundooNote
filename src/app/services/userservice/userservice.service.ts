import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservices/httpservice.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 
 
  constructor(private httpservice:HttpserviceService) {

   }
   baseUrl=environment.baseUrl
   registerUser(data: any){
    console.log("Data in userservice",data)
    return this.httpservice.post(`${this.baseUrl}/api/register`,data);
  }
  loginnUser(data:any){
    console.log("Data in userService",data)
    return this.httpservice.post(`${this.baseUrl}/api/loginEmployee`,data);
  }
  forgetUser(data:any){
    console.log("Data in userService",data)
    return this.httpservice.post(`${this.baseUrl}/api/forgetPassword?emailAddress=sarthaksahoo434@gmail.com`);
}
resetUser(data:any){
  console.log("Data in userService",data)
  return this.httpservice.put(`${this.baseUrl}/api/resetPassword`,data);
}
}
