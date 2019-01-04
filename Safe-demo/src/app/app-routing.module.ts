import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./view/register/register.component"
import {AuthenticationComponent} from "./view/authentication/authentication.component";
import {LoginComponent} from "./view/login/login.component";
import {NewsListComponent} from "./view/news-list/news-list.component";
import {AddNewsComponent} from "./view/add-news/add-news.component";
import {AuthGuard} from "./auth/auth.guard";
import {PageNotFoundComponent} from "./view/page-not-found/page-not-found.component";
import {NewsDetailsComponent} from "./view/news-details/news-details.component";


const routes: Routes = [
  { path: 'register', component:RegisterComponent },
  { path: 'authentication', component:AuthenticationComponent },
  { path: 'login', component:LoginComponent },
  { path: 'newsList', component:NewsListComponent },
  { path: 'newsDetails/:webNewsId', component:NewsDetailsComponent },
  { path: 'addNews', component:AddNewsComponent ,canActivate:[AuthGuard]},
  { path: '',redirectTo:'login',pathMatch:'full' },
  { path: '**', component:PageNotFoundComponent},

];
@NgModule({
  imports: [ RouterModule.forRoot(routes,{enableTracing:true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
