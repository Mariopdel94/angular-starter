import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StyleguideRoutingModule } from './styleguide-routing.module';
import { StyleguideComponent } from './styleguide.component';

@NgModule({
  declarations: [StyleguideComponent],
  imports: [
    CommonModule,
    FormsModule,
    StyleguideRoutingModule,
    MatSnackBarModule
  ]
})
export class StyleguideModule {}
