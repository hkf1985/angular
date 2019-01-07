import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF,HashLocationStrategy,LocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { RegisterComponent } from './view/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './view/authentication/authentication.component';
import { LoginComponent } from './view/login/login.component';
import { NewsListComponent } from './view/news-list/news-list.component';
import { AddNewsComponent } from './view/add-news/add-news.component';
import { PageNotFoundComponent } from './view/page-not-found/page-not-found.component';
//import { CoursesModule } from './courses/courses.module';
import { ComponentModule } from './component/component.module';
//import {NewsModule} from "./news/news.module";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthenticationComponent,
    LoginComponent,
    NewsListComponent,
    AddNewsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
 //   CoursesModule（惰性加载的模块不能imports到这里面）,
    AppRoutingModule,
    ComponentModule,
  //  NewsModule  （惰性加载的模块不能imports到这里面）
  ],
  providers: [{provide:LocationStrategy, useClass: HashLocationStrategy},{provide: APP_BASE_HREF, useValue: '/page/SafeEduFronEnd'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
