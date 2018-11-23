import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }
  login(u,p){
    console.log(u,p)
    this.loginService.login({username:u,pwd:p}).subscribe(
      data=>console.log(data),
        error=>console.log(error)
    )
  }
}
