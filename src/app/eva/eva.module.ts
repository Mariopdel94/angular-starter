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

@NgModule({
  declarations: [
    SpinnerComponent,
    StyleguideComponent,
    ColorGuideComponent,
    ButtonsGuideComponent,
    FormsGuideComponent,
    ResolutionsGuideComponent,
  ],
  imports: [CommonModule, EvaRoutingModule, FormsModule, MatSnackBarModule],
})
export class EvaModule {}
