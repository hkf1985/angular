import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-btn-gg',
  templateUrl: './btn-gg.component.html',
  styleUrls: ['./btn-gg.component.less']
})
export class BtnGgComponent implements OnInit {

  constructor() { }
  @Input() name:string="大按钮"
  @Input() color:string="#ffffff"
  @Input() bgColor:string="#ffffff"
  ngOnInit() {
  }

}
