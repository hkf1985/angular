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
      switchMap((params:ParamMap)=>
        this.service.getCourse(params.get('id'))
      )
    )
    this.route.params.subscribe(data=>{
      console.log(data)
      this.service.getCourse(data.id).subscribe(data=>{
        console.log(data)
      })
    })
  }

}
