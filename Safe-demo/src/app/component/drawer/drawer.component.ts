import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.less']
})
export class DrawerComponent implements OnInit {

  @Input() open:boolean=false;
  @Output() onclick= new EventEmitter<any>();
  width=document.documentElement.clientWidth
  constructor() { }

  ngOnInit() {
  }
  closeDrawer(){
    this.onclick.emit()
  }
  stop(e){
    e.stopPropagation()
  }
}
