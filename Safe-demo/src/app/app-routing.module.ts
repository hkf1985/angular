import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./view/register/register.component"
import {AuthenticationComponent} from "./view/authentication/authentication.component";
import {LoginComponent} from "./view/login/login.component";


const routes: Routes = [
  { path: 'register', component:RegisterComponent },
  { path: 'authentication', component:AuthenticationComponent },
  { path: '', component:RegisterComponent },
  { path: 'login', component:LoginComponent },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
