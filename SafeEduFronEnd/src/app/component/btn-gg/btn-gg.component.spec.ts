import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGgComponent } from './btn-gg.component';

describe('BtnGgComponent', () => {
  let component: BtnGgComponent;
  let fixture: ComponentFixture<BtnGgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
