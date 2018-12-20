import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  logoSrc:string='../../../assets/images/headerImg.png';
  constructor() { }

  ngOnInit() {
  }
  onLeftClick(){
    console.log("onleftclick")
    window.history.back()
  }
}
