import { Component } from '@angular/core';

@Component({
  selector: 'component/nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  onLeftClick() {
    console.log('onLeftClick');
  }
}
