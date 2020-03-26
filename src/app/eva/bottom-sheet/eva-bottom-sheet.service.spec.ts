import { TestBed } from '@angular/core/testing';

import { EvaBottomSheetService } from './eva-bottom-sheet.service';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

describe('EvaBottomSheetService', () => {
  let service: EvaBottomSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatBottomSheetModule],
    });
    service = TestBed.inject(EvaBottomSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
