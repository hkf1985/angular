import { Component,EventEmitter, OnInit,Input,Output} from '@angular/core';

@Component({
  selector: 'app-left-drawer',
  templateUrl: './left-drawer.component.html',
  styleUrls: ['./left-drawer.component.less']
})
export class LeftDrawerComponent implements OnInit {
  @Input() items:Array<any>;
  @Input() name:string = 'name';
  @Input() isSelect:string = 'isSelect';
  @Input() selected:string = 'selected';
 @Input() showLeft:boolean = true;
 @Output() parentShowLeft = new EventEmitter<any>()
 @Output() selectedValue = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
  }
  hideLeftDrawer(showLeft:any){
  // console.log(showLeft)
   // this.showLeft = !this.showLeft;
    //console.log(showLeft)
    this.parentShowLeft.emit(showLeft)
  }
  selectThisItem(e,o,i){
    if(o.isSelect){
      e.stopPropagation()
      return 0;
    }
    this.selectedValue.emit(o)
  //console.log(e,o,i);
 // console.log( this.items[i]);
  this.items.forEach(function (o,n) {
  //  console.log(o,n)
    if(o.selected){
      o.selected = !o.selected;
     }
  })
  this.items[i].selected=true;
  }
}
