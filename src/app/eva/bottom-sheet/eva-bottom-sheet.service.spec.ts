import { TestBed } from '@angular/core/testing';

import { EvaBottomSheetService } from './eva-bottom-sheet.service';

describe('EvaBottomSheetService', () => {
  let service: EvaBottomSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaBottomSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
