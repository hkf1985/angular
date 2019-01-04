import { Component, OnInit } from '@angular/core';
import {CoursesService} from "../courses.service";
import {Course} from "../struct/course";
import {Section} from  "../struct/section"

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.less']
})
export class CoursesListComponent implements OnInit {

  constructor(private service:CoursesService) { }
    courses:Course[] = [];
    course:Course = new Course();
    update:boolean=true;
  ngOnInit() {
    if(this.update){
      this.getCoursesList(0,10)
      this.update = false
    }

  }

  getCoursesList(pageIndex:number,pageSize:number){
    let data={
      pageSize:pageSize,
      pageIndex:pageIndex,
    };
    this.service.getCourseList(data).subscribe(resule=>{
      console.log(resule)
      let dataList = resule.dataMap.dataList
      for (let i=0;i<dataList.length;i++){
        this.course.transportLearningId = dataList[i].transportLearningId
        this.course.learningTitle = dataList[i].learningTitle
        this.course.learningProfile = dataList[i].learningProfile
        this.course.learningPrice = dataList[i].learningPrice
        this.course.frontCover = dataList[i].frontCover
        let courselist =  dataList[i].courselist
        for (let j=0;j<courselist.length;j++){
        let  sectionData:Section = new  Section();
          sectionData.courseOrder = courselist[j].courseOrder
          sectionData.transportCoursesId = courselist[j].transportCoursesId
          sectionData.coursesProfile = courselist[j].coursesProfile
          sectionData.frontCover = courselist[j].frontCover
          sectionData.transportLearningId = courselist[j].transportLearningId
          sectionData.coursesTitle = courselist[j].coursesTitle
          sectionData.lastUpdatedStamp = courselist[j].lastUpdatedStamp
          console.log(sectionData)
          this.course.courseList.push(sectionData)
        }
        this.courses.push(this.course)
      }

      console.log(this.courses)
    })
  }
}
