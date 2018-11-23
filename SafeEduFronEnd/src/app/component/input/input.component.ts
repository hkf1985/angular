import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {
  inputWrap:string = 'input-list clear';
  @Input() inputClass:string;
  @Input() iconClass:string;
  @Input() placeholder:string = "请您输入相关信息";
  inputValue:string = "";
  constructor() { }

  ngOnInit() {
  }

}
