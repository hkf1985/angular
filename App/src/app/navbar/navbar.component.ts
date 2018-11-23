import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  onLeftClick() {
    console.log('onLeftClick');
  }
  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    open: true
  };

  constructor() {}

  onOpenChange(event) {
    console.log(event);
    this.state.open = !this.state.open;
  }
}
