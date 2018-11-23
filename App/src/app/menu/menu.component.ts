import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  initData: Array<any>;
  show: boolean = false;
  menuHeight: number = document.documentElement.clientHeight * 0.6;
  dataMenu: Array<any> = [
    {
      value: '1',
      label: 'Food',
      children: [
        {
          label: 'All Foods',
          value: '1',
          disabled: false
        },
        {
          label: 'Chinese Food',
          value: '2'
        },
        {
          label: 'Hot Pot',
          value: '3'
        },
        {
          label: 'Buffet',
          value: '4'
        },
        {
          label: 'Fast Food',
          value: '5'
        },
        {
          label: 'Snack',
          value: '6'
        },
        {
          label: 'Bread',
          value: '7'
        },
        {
          label: 'Fruit',
          value: '8'
        },
        {
          label: 'Noodle',
          value: '9'
        },
        {
          label: 'Leisure Food',
          value: '10'
        }
      ]
    },
    {
      value: '2',
      label: 'Supermarket',
      children: [
        {
          label: 'All Supermarkets',
          value: '1'
        },
        {
          label: 'Supermarket',
          value: '2',
          disabled: true
        },
        {
          label: 'C-Store',
          value: '3'
        },
        {
          label: 'Personal Care',
          value: '4'
        }
      ]
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true,
      children: [
        {
          label: 'you can not see',
          value: '1'
        }
      ]
    }
  ];

  onChange(value) {
    let label = '';
    this.dataMenu.forEach(dataItem => {
      if (dataItem.value === value[0]) {
        label = dataItem.label;
        if (dataItem.children && value[1]) {
          for (let i = 0; i < dataItem.children.length; i++) {
            const cItem = dataItem.children[i];
            if (cItem.value === value[1]) {
              label += cItem.label;
            }
          }
        }
      }
    });
    console.log(label);
  }

  handleClick(e) {
    e.preventDefault();
    this.show = !this.show;
    if (!this.initData) {
      setTimeout(() => {
        this.initData = this.dataMenu;
      }, 500);
    }
  }

  onMaskClick() {
    this.show = false;
  }
}
