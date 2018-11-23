import { Component, OnInit,Input } from '@angular/core';
import {DrawerEle} from '../left-drawer/drawerEle'

@Component({
  selector: 'app-choose-input',
  templateUrl: './choose-input.component.html',
  styleUrls: ['./choose-input.component.less']
})
export class ChooseInputComponent implements OnInit {
  @Input() inputClass:string;
  @Input() iconClass:string;
  @Input() placeholder:string = "请您输入相关信息";
  @Input() inputValue:any;
  parentShow:boolean=false;
  @Input() dataList:Array<DrawerEle>;
  constructor() { }

  ngOnInit() {
  }
  showLeftDarwer(){
    this.parentShow = !this.parentShow;
    console.log(this.parentShow)
  }
  querySelectedVal(o){
    console.log("querySelectedVal",o)
    this.inputValue= o.companyName
  }
}
