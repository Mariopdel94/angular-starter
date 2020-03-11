import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StyleguideRoutingModule } from './styleguide-routing.module';
import { StyleguideComponent } from './styleguide.component';

@NgModule({
  declarations: [StyleguideComponent],
  imports: [CommonModule, FormsModule, StyleguideRoutingModule]
})
export class StyleguideModule {}
