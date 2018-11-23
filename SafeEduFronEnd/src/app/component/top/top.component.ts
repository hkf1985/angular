import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit {
@Input() title:string;
@Input() back:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
