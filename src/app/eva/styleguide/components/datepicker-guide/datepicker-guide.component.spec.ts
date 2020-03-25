import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerGuideComponent } from './datepicker-guide.component';

describe('DatepickerGuideComponent', () => {
  let component: DatepickerGuideComponent;
  let fixture: ComponentFixture<DatepickerGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatepickerGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
