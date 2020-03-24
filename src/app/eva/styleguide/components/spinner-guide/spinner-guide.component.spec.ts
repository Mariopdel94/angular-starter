import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerGuideComponent } from './spinner-guide.component';

describe('SpinnerGuideComponent', () => {
  let component: SpinnerGuideComponent;
  let fixture: ComponentFixture<SpinnerGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
