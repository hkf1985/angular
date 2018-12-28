import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.less']
})
export class TopPageComponent implements OnInit {
  @Input() open:boolean=false;
  width=document.documentElement.clientWidth;
  constructor() { }
  ngOnInit() {
  }

}
