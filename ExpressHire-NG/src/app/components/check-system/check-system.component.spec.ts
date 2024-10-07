import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckSystemComponent } from './check-system.component';

describe('CheckSystemComponent', () => {
  let component: CheckSystemComponent;
  let fixture: ComponentFixture<CheckSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckSystemComponent]
    });
    fixture = TestBed.createComponent(CheckSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
