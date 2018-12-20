import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontIconComponent } from './font-icon.component';

describe('FontIconComponent', () => {
  let component: FontIconComponent;
  let fixture: ComponentFixture<FontIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
