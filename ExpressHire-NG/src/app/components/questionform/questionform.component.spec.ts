import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionformComponent } from './questionform.component';

describe('QuestionformComponent', () => {
  let component: QuestionformComponent;
  let fixture: ComponentFixture<QuestionformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionformComponent]
    });
    fixture = TestBed.createComponent(QuestionformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
