import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./view/register/register.component"
import {AuthenticationComponent} from "./view/authentication/authentication.component";
import {LoginComponent} from "./view/login/login.component";
import {NewsListComponent} from "./view/news-list/news-list.component";
import {AddNewsComponent} from "./view/add-news/add-news.component";
import {AuthGuard} from "./auth/auth.guard";
import {PageNotFoundComponent} from "./view/page-not-found/page-not-found.component";
//import {NewsDetailsComponent} from "./news/news-details/news-details.component";


const routes: Routes = [
  { path: 'register', component:RegisterComponent },
  { path: 'authentication', component:AuthenticationComponent },
  { path: 'login', component:LoginComponent },
  { path: 'newsList', component:NewsListComponent },
  { path: 'newsDetails/:id',
    loadChildren:'./news/news.module#NewsModule'
  },
  { path: 'courses',
    loadChildren:'./courses/courses.module#CoursesModule',
    canLoad:[AuthGuard]
  },
  { path: 'addNews', component:AddNewsComponent ,canActivate:[AuthGuard]},
  { path: '',redirectTo:'login',pathMatch:'full' },
  { path: '**', component:PageNotFoundComponent},

];
@NgModule({
  imports: [ RouterModule.forRoot(routes,{enableTracing:false}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
