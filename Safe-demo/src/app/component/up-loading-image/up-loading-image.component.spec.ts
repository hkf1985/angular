import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpLoadingImageComponent } from './up-loading-image.component';

describe('UpLoadingImageComponent', () => {
  let component: UpLoadingImageComponent;
  let fixture: ComponentFixture<UpLoadingImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpLoadingImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpLoadingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
