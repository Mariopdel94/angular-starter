import { Component, OnInit } from '@angular/core';
import { EvaBottomSheetService } from '../../eva-bottom-sheet.service';

@Component({
  selector: 'eva-bottom-sheet-header',
  templateUrl: './bottom-sheet-header.component.html',
  styleUrls: ['./bottom-sheet-header.component.scss'],
})
export class BottomSheetHeaderComponent implements OnInit {
  constructor(public evaBottomSheetService: EvaBottomSheetService) {}

  ngOnInit(): void {}

  public close() {
    this.evaBottomSheetService.close();
  }
}
