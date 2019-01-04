import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import {ComponentModule} from "../component/component.module";

@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ComponentModule
  ],
  declarations: [CoursesListComponent, CoursesDetailsComponent]
})
export class CoursesModule { }
