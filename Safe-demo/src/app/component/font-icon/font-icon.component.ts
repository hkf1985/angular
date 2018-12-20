import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-font-icon',
  templateUrl: './font-icon.component.html',
  styleUrls: ['./font-icon.component.less']
})
export class FontIconComponent implements OnInit {
  @Input() type:string;
  constructor() { }

  ngOnInit() {
  }

}
