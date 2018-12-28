import {Component, Input, OnInit} from '@angular/core';
import {VerifyPhoneService} from "../../service/verify-phone.service";

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
  @Input() inputName:string= '';
  @Input() placeholder:string= '';
  @Input() phoneNum:string
  time=60;
  timer=null
  inputValue:string= '';
  showTime:boolean=false
  constructor(private verifyPhoneService:VerifyPhoneService) { }

  ngOnInit() {
  }
  sendPhoneNum(){
    this.verifyPhoneService.verifyPhone({telNum:this.phoneNum}).subscribe(value => {
      if(value.success){
        console.log('发送验证码成功')
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
    })
  }
}
