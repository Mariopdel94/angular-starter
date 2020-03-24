import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolutionsGuideComponent } from './resolutions-guide.component';

describe('ResolutionsGuideComponent', () => {
  let component: ResolutionsGuideComponent;
  let fixture: ComponentFixture<ResolutionsGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResolutionsGuideComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolutionsGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
