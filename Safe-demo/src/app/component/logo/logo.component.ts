import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.less']
})
export class LogoComponent implements OnInit {
  @Input() textColor:string="#333333";
  @Input() logoSrc:string = '';
  constructor() { }

  ngOnInit() {
  }

}
