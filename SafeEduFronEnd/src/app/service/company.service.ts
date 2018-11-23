import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable,of} from "rxjs";
import {DrawerEle} from "../component/left-drawer/drawerEle";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyUrl="/apps/TransportMobile/Identify/register/getCompanyList"
  constructor(
    private http:HttpClient
  ) { }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  getCompanyData():Observable<any>{
    return this.http.get<any>(this.companyUrl)
      .pipe(tap(),
        catchError(this.handleError())
        );
  }
}
