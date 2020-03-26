import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatBottomSheetModule,
  MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

const globalBottomSheetOptions = {
  autoFocus: true,
  closeOnNavigation: true,
  disableClose: true,
  panelClass: 'custom-sheet',
  restoreFocus: true,
  hasBackdrop: false,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS,
      useValue: globalBottomSheetOptions,
    },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: MatBottomSheetRef, useValue: {} },
  ],
})
export class AppModule {}
