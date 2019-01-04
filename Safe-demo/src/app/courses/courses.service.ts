import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courseListUrl:string="/apps/TransportMobile/UserCenter/learningList/getLearnList"
  private getMyListByInParamUrl:string="/apps/TransportMobile/ViewIndex/courseList/getMyListByInParam"
  constructor(private http:HttpClient) { }
  getCourseList(data):Observable<any>{
    return this.http.get<any>(this.courseListUrl+'?pageSize='+data.pageSize+'&pageIndex='+data.pageIndex)
  }
  getCourse(transportLearningId):Observable<any>{
    return this.http.post<any>(this.getMyListByInParamUrl,{transportLearningId:transportLearningId})
  }
}
