import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalRountingModule } from './rental-rounting.module';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RentalRountingModule
  ],
  declarations: [
    RentalComponent,
    RentalListComponent,
    RentalListItemComponent,
    RentalDetailComponent
  ]
})
export class RentalModule { }
