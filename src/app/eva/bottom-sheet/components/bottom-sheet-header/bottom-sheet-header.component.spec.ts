import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetHeaderComponent } from './bottom-sheet-header.component';

describe('BottomSheetHeaderComponent', () => {
  let component: BottomSheetHeaderComponent;
  let fixture: ComponentFixture<BottomSheetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSheetHeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
