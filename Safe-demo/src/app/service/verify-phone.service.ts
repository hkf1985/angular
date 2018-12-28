import { Injectable } from '@angular/core';
import {of,Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VerifyPhoneService {
  private phoneUrl:string='/apps/TransportMobile/Identify/register/checkRegistTel'
  constructor(private http:HttpClient) { }
  verifyPhone(num):Observable<any>{
    return this.http.post<any>(this.phoneUrl,num);
  }
}
