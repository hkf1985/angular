import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../service/login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService:LoginService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    let url:string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  canLoad(route:Route):boolean{
    let url = `/${route.path}`;
    console.log('urlurlurlurlurl====',url)
   return this.checkLogin(url);
  }
  checkLogin(url:string):boolean{
    if(this.loginService.isLoggedIn){return true;}

      this.loginService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false
  }
}
