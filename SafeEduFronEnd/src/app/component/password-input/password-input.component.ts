import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.less']
})
export class PasswordInputComponent implements OnInit {

  @Input() inputClass:string;
  @Input() iconClass:string;
  @Input() placeholder:string = "请您输入相关信息";
  inputValue:string = "";
  constructor() { }

  ngOnInit() {
  }
}
