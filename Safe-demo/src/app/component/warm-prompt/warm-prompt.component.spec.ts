import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmPromptComponent } from './warm-prompt.component';

describe('WarmPromptComponent', () => {
  let component: WarmPromptComponent;
  let fixture: ComponentFixture<WarmPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
