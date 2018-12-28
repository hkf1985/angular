import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less']
})
export class AuthenticationComponent implements OnInit {
  width=document.documentElement.clientWidth;
  height: number = document.documentElement.clientHeight;
  files=[];
  constructor() { }

  ngOnInit() {
  }
  onLeftClick(){
    window.history.back()
  }
  next(){
    alert("请上传身份信息")
  }
}
