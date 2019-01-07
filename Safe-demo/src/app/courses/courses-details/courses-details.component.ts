import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,ParamMap} from "@angular/router";
import {CoursesService} from "../courses.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-courses-details',
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.less']
})
export class CoursesDetailsComponent implements OnInit {
  private  course
  constructor(
    private route:ActivatedRoute,
    private  router:Router,
    private service:CoursesService
  ) { }

  ngOnInit() {
    this.course = this.route.paramMap.pipe(
      switchMap((params)=>
        {
          return this.service.getCourse(params.get('id'))
        }
      )
    )
    //不重新创建组件，可复用
    this.route.params.subscribe(data=>{
      console.log(data)
      this.service.getCourse(data.id).subscribe(data=>{
        console.log(data)
      })
    })
    this.route.paramMap.subscribe(params=>{
      let id = params.get("id")
      console.log('ididididididididididid===',id)
    })
    //每次重新创建组件，确定不用从详情页到详情页时使用
    let snapshotId = this.route.snapshot.paramMap.get('id');
    console.log('snapshotId======',snapshotId)
  }

}
