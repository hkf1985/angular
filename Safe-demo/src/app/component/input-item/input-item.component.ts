import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.component.html',
  styleUrls: ['./input-item.component.less']
})
export class InputItemComponent implements OnInit {
  @Input() type:string = '';
  @Input() iconType:string= '';
  @Input() className:string= 'input-wrap';
  @Input() name:string= '';
  @Input() placeholder:string= '';
  inputValue:string= '';
  constructor() { }

  ngOnInit() {
  }

}
