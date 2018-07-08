import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UppercasePipe } from './pipes/uppercase.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UppercasePipe
  ],
  exports: [
    UppercasePipe
  ]
})
export class SharedModule { }
