import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  width=document.documentElement.clientWidth;
  height: number = document.documentElement.clientHeight;
  logoSrc:string='./assets/images/headerImgW.png'
  load:boolean=false;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  userLogin(u,p){
    let data={
      username:u,
      pwd:p
    }
    this.load=true
    console.log(data)
    this.loginService.userLogin(data).subscribe(result=>{
      console.log(result)
      this.load=false
    },error=>{
      console.log('error',error)
    })

  }

}
