import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  private  licenseUrl:string="/apps/TransportMobile/Identify/register/queryDrivingVehicle"
  constructor(  private  http:HttpClient) { }
  getLicenseList():Observable<any>{
   return this.http.get<any>(this.licenseUrl)
  }
}
