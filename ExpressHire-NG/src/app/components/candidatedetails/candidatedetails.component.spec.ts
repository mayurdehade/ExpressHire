import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatedetailsComponent } from './candidatedetails.component';

describe('CandidatedetailsComponent', () => {
  let component: CandidatedetailsComponent;
  let fixture: ComponentFixture<CandidatedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CandidatedetailsComponent]
    });
    fixture = TestBed.createComponent(CandidatedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
