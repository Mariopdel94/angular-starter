import { Component, OnInit } from '@angular/core';
import {
  BottomSheetInterface,
  EvaBottomSheetService,
} from 'src/app/eva/bottom-sheet/eva-bottom-sheet.service';
import { EvaBottomSheetComponent } from 'src/app/eva/bottom-sheet/bottom-sheet.component';
import { SpinnerGuideComponent } from '../spinner-guide/spinner-guide.component';

@Component({
  selector: 'eva-bottom-sheet-guide',
  templateUrl: './bottom-sheet-guide.component.html',
  styleUrls: ['./bottom-sheet-guide.component.scss'],
})
export class BottomSheetGuideComponent implements OnInit {
  constructor(private _evaBottomSheetService: EvaBottomSheetService) {}

  ngOnInit(): void {}

  public openBottomSheet() {
    const bottomSheetData: BottomSheetInterface = {
      title: 'Spinner Guide',
      component: SpinnerGuideComponent,
    };
    this._evaBottomSheetService.openBottomSheet(
      bottomSheetData,
      EvaBottomSheetComponent
    );
  }
}
