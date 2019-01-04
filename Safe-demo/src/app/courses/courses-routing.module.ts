import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesListComponent} from "./courses-list/courses-list.component";
import {CoursesDetailsComponent} from "./courses-details/courses-details.component";
import {ComponentModule} from "../component/component.module";
import {NgZorroAntdMobileModule} from "ng-zorro-antd-mobile";

const routes: Routes = [
  {path:"courses",component:CoursesListComponent},
  {path:"course/:id",component:CoursesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
    ComponentModule,
    NgZorroAntdMobileModule
  ]
})
export class CoursesRoutingModule { }
