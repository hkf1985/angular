import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyUrl:string = "/apps/TransportMobile/Identify/register/getCompanyList";
  constructor(  private http: HttpClient) { }
  getCompany (): Observable<any> {
    return this.http.get<any>(this.companyUrl)
  }
}
