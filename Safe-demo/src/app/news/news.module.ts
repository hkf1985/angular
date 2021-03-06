import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsDetailsComponent } from "./news-details/news-details.component";

@NgModule({
  declarations: [
    NewsDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],

})
export class NewsModule { }
