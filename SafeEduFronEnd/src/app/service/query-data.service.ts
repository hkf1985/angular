import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class QueryDataService {

  constructor(private http:HttpClient) { }
  queryNewsList(uri,data){
    return this.http.get(uri,data).pipe()
  }
}
