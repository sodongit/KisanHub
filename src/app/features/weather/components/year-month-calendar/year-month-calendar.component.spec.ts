import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearMonthCalendarComponent } from './year-month-calendar.component';

describe('YearMonthCalendarComponent', () => {
  let component: YearMonthCalendarComponent;
  let fixture: ComponentFixture<YearMonthCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearMonthCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearMonthCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
