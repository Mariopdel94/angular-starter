import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarGuideComponent } from './snackbar-guide.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('SnackbarGuideComponent', () => {
  let component: SnackbarGuideComponent;
  let fixture: ComponentFixture<SnackbarGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      declarations: [SnackbarGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
