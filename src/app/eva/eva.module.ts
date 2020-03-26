import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EvaRoutingModule } from './eva-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { ButtonsGuideComponent } from './styleguide/components/buttons-guide/buttons-guide.component';
import { ColorGuideComponent } from './styleguide/components/color-guide/color-guide.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { FormsGuideComponent } from './styleguide/components/forms-guide/forms-guide.component';
import { ResolutionsGuideComponent } from './styleguide/components/resolutions-guide/resolutions-guide.component';
import { SnackbarGuideComponent } from './styleguide/components/snackbar-guide/snackbar-guide.component';
import { SpinnerGuideComponent } from './styleguide/components/spinner-guide/spinner-guide.component';
import { DatepickerGuideComponent } from './styleguide/components/datepicker-guide/datepicker-guide.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EvaBottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { BottomSheetHeaderComponent } from './bottom-sheet/components/bottom-sheet-header/bottom-sheet-header.component';
import { BottomSheetGuideComponent } from './styleguide/components/bottom-sheet-guide/bottom-sheet-guide.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    StyleguideComponent,
    ColorGuideComponent,
    ButtonsGuideComponent,
    FormsGuideComponent,
    ResolutionsGuideComponent,
    SnackbarGuideComponent,
    SpinnerGuideComponent,
    DatepickerGuideComponent,
    EvaBottomSheetComponent,
    BottomSheetHeaderComponent,
    BottomSheetGuideComponent,
  ],
  imports: [
    CommonModule,
    EvaRoutingModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class EvaModule {}
