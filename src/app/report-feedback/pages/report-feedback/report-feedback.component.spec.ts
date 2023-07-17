import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFeedbackComponent } from './report-feedback.component';

describe('ReportFeedbackComponent', () => {
  let component: ReportFeedbackComponent;
  let fixture: ComponentFixture<ReportFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
