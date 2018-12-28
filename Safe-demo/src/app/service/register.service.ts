import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private  registerUrl:string="/apps/TransportMobile/Identify/register/registUser";
  constructor(  private http:HttpClient) { }

  submitUserInfo(data:any):Observable<any> {
    return this.http.post(this.registerUrl, data)
  }
}
