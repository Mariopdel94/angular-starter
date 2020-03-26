import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetGuideComponent } from './bottom-sheet-guide.component';

describe('BottomSheetGuideComponent', () => {
  let component: BottomSheetGuideComponent;
  let fixture: ComponentFixture<BottomSheetGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSheetGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomSheetGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
