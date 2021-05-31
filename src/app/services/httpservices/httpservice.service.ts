import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  httpClient: any;
  constructor(private http:HttpClient) { 
  }
  token: any;
    post(url : string, data :any=null, isHeaderRequired : any=false,headers =null){
      console.log(url,data+"value");
    return this.http.post(url,data,isHeaderRequired && headers)
    }
    put(url : string, data :any=null, isHeaderRequired : any=false,headers =null){
      console.log(url,data+"value");
    return this.http.put(url,data,isHeaderRequired && headers)
  }
}
