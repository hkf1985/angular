import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl:string='/apps/TransportMobile/Identify/Login/login'
  constructor(private http:HttpClient) { }
  userLogin(data:any):Observable<any>{
    return this.http.post(this.loginUrl,data)
  }
}
