import { Injectable, Type } from '@angular/core';
import {
  MatBottomSheetRef,
  MatBottomSheet,
} from '@angular/material/bottom-sheet';

export interface BottomSheetInterface {
  title: string;
  component: Type<any>;
  componentData?: any;
}

@Injectable({
  providedIn: 'root',
})
export class EvaBottomSheetService {
  public isBottomSheetOpen = false;
  public isBottomSheetMinimized = false;
  public bottomSheetData: BottomSheetInterface;
  public bottomSheetRef: MatBottomSheetRef<any>;

  constructor(private _bottomSheet: MatBottomSheet) {}

  public openBottomSheet(
    bottomSheetData: BottomSheetInterface,
    component: Type<any>
  ) {
    if (!this.isBottomSheetOpen) {
      this.isBottomSheetOpen = true;
      this.bottomSheetData = bottomSheetData;
      this.bottomSheetRef = this._bottomSheet.open(component);
    }
  }

  public close() {
    if (this.bottomSheetRef) {
      this.isBottomSheetOpen = false;
      this.bottomSheetRef.dismiss();
    }
  }
}
