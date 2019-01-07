import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  private loginUrl:string='/apps/TransportMobile/Identify/Login/login'
  public redirectUrl: string;
  constructor(private http:HttpClient) { }
  userLogin(data:any):Observable<any>{
    return this.http.post(this.loginUrl,data).pipe(tap(val=>{
      console.log('isLoggedInisLoggedIn',val)
      this.isLoggedIn = true;
    },error=>{
      console.log('errorerrorerror',error);
    }))
  }
  logOut():void{
    this.isLoggedIn = false
  }
}
