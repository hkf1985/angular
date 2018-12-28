import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.less']
})
export class SelectInputComponent implements OnInit {
  @Input() type:string = '';
  @Input() iconType:string= '';
  @Input() className:string= 'input-wrap';
  @Input() name:string= '';
  @Input() inputName:string= '';
  @Input() placeholder:string= '';
  @Input() inputValue:string= '';
  @Output() onclick = new EventEmitter<any>()
  formUrl:string='/apps/TransportMobile/Identify/register/registUser'
  constructor() { }

  ngOnInit() {
  }
  showOptions(e:any){
    console.log("sssss")
    this.onclick.emit(e);
  }
}
