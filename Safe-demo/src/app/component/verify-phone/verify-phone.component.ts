import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.less']
})
export class VerifyPhoneComponent implements OnInit {
  @Input() type:string = '';
  @Input() iconType:string= '';
  @Input() className:string= 'input-wrap';
  @Input() name:string= '';
  @Input() placeholder:string= '';
  time=60;
  timer=null
  inputValue:string= '';
  showTime:boolean=false
  constructor() { }

  ngOnInit() {
  }
  sendPhoneNum(){
    console.log('获取验证码成功')
    if(true){
     this.showTime = true;
      this.timer=setInterval(()=>{
        this.time--
        if(this.time == 0){
          this.showTime = false;
          this.time=60;
          clearInterval(this.timer)
        }
      },1000)
    }
  }
}
