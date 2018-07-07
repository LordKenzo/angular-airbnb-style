import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponentComponent],
  exports: [
    HeaderComponentComponent
  ]
})
export class CoreModule { }
