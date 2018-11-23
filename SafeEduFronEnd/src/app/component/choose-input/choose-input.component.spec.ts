import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseInputComponent } from './choose-input.component';

describe('ChooseInputComponent', () => {
  let component: ChooseInputComponent;
  let fixture: ComponentFixture<ChooseInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
