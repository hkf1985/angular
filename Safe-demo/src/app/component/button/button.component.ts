import { Component } from '@angular/core';

@Component({
  selector: 'button',
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  onClick() {
    console.log('click');
  }
}
