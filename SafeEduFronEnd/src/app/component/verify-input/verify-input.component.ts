import { Component, OnInit,Input,Output } from '@angular/core';
import {VerifyService} from '../../service/verify.service'

@Component({
  selector: 'app-verify-input',
  templateUrl: './verify-input.component.html',
  styleUrls: ['./verify-input.component.less']
})
export class VerifyInputComponent implements OnInit {
  @Input() inputClass:string;
  @Input() iconClass:string;
  @Input() placeholder:string = "请您输入相关信息";
  @Input() inputVal:string = "";
  inputValue:string;

  sendAuthcode:boolean = true;
  constructor(private verifyService:VerifyService) { }

  ngOnInit() {
  }
  getVerify(){
    this.verifyService.queryTelVerify({telNum:this.inputVal}).subscribe(json=>console.log(json))
  }
}
