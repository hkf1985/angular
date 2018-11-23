import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  private  getCertNumUrl:string="/apps/TransportMobile/Identify/register/registUser";

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
  submitUserName(data:any):Observable<any>{
    return this.http.post<any>(this.getCertNumUrl,data,httpOptions)
      .pipe(tap(),
        catchError(this.handleError('verify',[]))
      );
  }
}
