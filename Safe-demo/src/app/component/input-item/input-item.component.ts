import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.less']
})
export class InputItemComponent implements OnInit {
  @Input() type:string = '';
  @Input() iconType:string= '';
  @Input() className:string= 'input-wrap';
  @Input() inputName:string= '';
  @Input() iName:string;
  @Input() placeholder:string= '';
  @Input() password:boolean=false;
  @Input() color:number=0;
  textColor:string='';
  inputValue:string= '';
  constructor() { }

  ngOnInit() {
    if(this.color == 1){
      this.textColor='white'
    }
  }

}
