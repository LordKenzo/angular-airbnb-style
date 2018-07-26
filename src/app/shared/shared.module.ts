import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UppercasePipe } from './pipes/uppercase.pipe';
import { MapModule } from './map/map.module';
import { FieldErrorDisplayComponent } from './form/field-error-display/field-error-display.component';

@NgModule({
  imports: [
    CommonModule,
    MapModule
  ],
  declarations: [
    UppercasePipe,
    FieldErrorDisplayComponent
  ],
  exports: [
    CommonModule, // Export it for use on my Features Module
    UppercasePipe,
    MapModule,
    FieldErrorDisplayComponent
  ]
})
export class SharedModule { }
