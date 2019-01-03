import { Component, OnInit,Input,Output,EventEmitter,HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, query, animateChild, stagger,
} from '@angular/animations';
@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.less'],
//   animations:[
//     trigger('openClose',[
//       state('open',style([{ display: 'block'}])),
//       state('closed',style([{display:'none'}])),
//       transition('open=>closed',[
//         animate('1s')
//       ])
// ]),
//     trigger('childAnimation', [
//       state('open',style([{transform: 'translateX(0)'}])),
//       state('closed',style([{transform: 'translateX(-100%)' }])),
//       transition('closed=>open', [
//         style({  transform: 'translateX(-100%)' }),
//         animate(300, style({ transform: 'translateX(0)' }))
//       ]),
//       transition('open=>closed',[
//         animate(300, style({ transform: 'translateX(-100%)' }))
//       ])
//     ])
//   ]
})
export class DrawerComponent implements OnInit {

  @Input() isOpen:boolean=false;
  @Output() onclick= new EventEmitter<any>();
 // offOn = false;
  width=document.documentElement.clientWidth
  constructor() { }

  ngOnInit() {
  }
  closeDrawer(){
  //  console.log(this.offOn)
 //   if(this.offOn){
      this.onclick.emit()
    //  this.offOn = false
   // }

  }
  stop(e){
    e.stopPropagation()
  }
  // closeDrawerOffOn(e){
  //   console.log(e.toState)
  //   if(e.toState == 'open'){
  //     this.offOn = true
  //   }
  // }
 // isOpen = true;

  // toggle() {
  //   this.isOpen = !this.isOpen;
  // }
}
