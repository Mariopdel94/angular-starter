import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaBottomSheetComponent } from './bottom-sheet.component';

describe('EvaBottomSheetComponent', () => {
  let component: EvaBottomSheetComponent;
  let fixture: ComponentFixture<EvaBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EvaBottomSheetComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
