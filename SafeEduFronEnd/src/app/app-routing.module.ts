import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./view/register/register.component";
import {LoginComponent} from "./view/login/login.component";
import {UserCenterComponent} from "./view/user-center/user-center.component"
import {NewsListComponent} from "./view/news-list/news-list.component";

const routes:Routes=[
  {path:"register",component:RegisterComponent},
  {path:"view/user-Center",component:UserCenterComponent},
  {path:"view/news-list",component:NewsListComponent},
  {path:"",component:RegisterComponent},
  {path:"login",component:LoginComponent},
];
@NgModule({
  exports:[
    RouterModule
  ],
imports: [ RouterModule.forRoot(routes,{useHash: true}) ],

})



export class AppRoutingModule { }
