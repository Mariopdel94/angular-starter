import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaBottomSheetComponent } from './bottom-sheet.component';
import {
  MatBottomSheetModule,
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EvaBottomSheetComponent', () => {
  let component: EvaBottomSheetComponent;
  let fixture: ComponentFixture<EvaBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatBottomSheetModule, BrowserAnimationsModule],
      declarations: [EvaBottomSheetComponent],
      providers: [
        { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
        { provide: MatBottomSheetRef, useValue: {} },
      ],
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
