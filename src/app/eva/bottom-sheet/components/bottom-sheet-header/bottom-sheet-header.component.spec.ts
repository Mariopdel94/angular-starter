import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetHeaderComponent } from './bottom-sheet-header.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

describe('BottomSheetHeaderComponent', () => {
  let component: BottomSheetHeaderComponent;
  let fixture: ComponentFixture<BottomSheetHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatBottomSheetModule],
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
