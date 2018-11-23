import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class NewsListService {
  newsListUrl:string = '/apps/TransportMobile/UserCenter/newsList/queryNewsList?pageSize=10';
  constructor(private http:HttpClient) { }
  queryNewsList(data){
   return this.http.get(this.newsListUrl,data).pipe()
  }
}
